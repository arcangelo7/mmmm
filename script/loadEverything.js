var tempDictOfDocuments = {};
var peopleTextOrder = [],
    placesTextOrder = [],
    datesTextOrder = [];

var isActive = false;

function createList(dictOfDocuments, context){
    var documentSelected = `${$(".selector__article--active").attr("title")}.html`;
    var instanceNoSpecialCharacters;
    var index__item;
    peopleTextOrder = [];
    placesTextOrder = [];
    datesTextOrder = [];
    var documentName;
    $(".metadata__tab:not(.tableOfContents) .index__list").each(function(){
        $(this).html("");
    })
    if (context == "everyArticle"){
        $.each(dictOfDocuments, function(document, metadata){
            documentName = document.replace(/ |,|\.|html/g,'');
            var articleTitle = $(metadata[0]).closest("h1").text() ? $(metadata[0]).closest("h1").text() : $(metadata[0]).find("h1").text();
            $.each(metadata[1], function(classe, instances){
                $.each(instances, function(i, instance){
                    switch (classe) {
                        case "people":
                            list = "indexOfPeople";
                            break;
                        case "places":
                            list = "indexOfPlaces";
                            break;
                        case "dates":
                            list = "indexOfDates";
                            break;
                    }
    
                    if (classe == "dates") {
                        instanceNoSpecialCharacters = `${instance[0].replace(/ |,|\./g,'')}_${documentName}`;
                        index__item = `<li class="index__item" data-text="${instance[1]}">
                                            <a class='index__link' title='${instance[0]}' data-text="${instance[0]}, ${articleTitle}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance[0]}, ${articleTitle}</a>
                                            <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
                                        </li>`
                        $(`.${list} .index__list`).append(index__item);
                        datesTextOrder.push(index__item);
                    } else {
                        instanceNoSpecialCharacters = `${instance.replace(/ |,|\./g,'')}_${documentName}`;
                        index__item = `<li class="index__item" data-text="${instanceNoSpecialCharacters}">
                                            <a class='index__link' title='${instance}' data-text="${instance}, ${articleTitle}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance}, ${articleTitle}</a>
                                            <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
                                        </li>`
                        $(`.${list} .index__list`).append(index__item);
                        if (classe == "people") {
                            peopleTextOrder.push(index__item);
                        } else if (classe == "places") {
                            placesTextOrder.push(index__item);
                        }
                    }  
                });
            });
        });
    } else if (context == "currentArticle"){
        documentName = documentSelected.replace(/ |,|\.|html/g,'');
        $.each(dictOfDocuments[documentSelected][1], function(classe, instances){
            $.each(instances, function(i, instance){
                switch (classe) {
                    case "people":
                        list = "indexOfPeople";
                        break;
                    case "places":
                        list = "indexOfPlaces";
                        break;
                    case "dates":
                        list = "indexOfDates";
                        break;
                }

                if (classe == "dates") {
                    instanceNoSpecialCharacters = `${instance[0].replace(/ |,|\./g,'')}_${documentName}`;
                    list__item = `<li class="index__item" data-text="${instance[1]}">
                                        <a class='index__link' title='${instance[0]}' data-text="${instance[0]}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance[0]}</a>
                                        <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
                                    </li>`
                    $(`.${list} .index__list`).append(list__item);
                    datesTextOrder.push(list__item);
                } else {
                    instanceNoSpecialCharacters = `${instance.replace(/ |,|\./g,'')}_${documentName}`;
                    index__item = `<li class="index__item" data-text="${instanceNoSpecialCharacters}">
                                        <a class='index__link' title='${instance}' data-text="${instance}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance}</a>
                                        <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
                                    </li>`
                    $(`.${list} .index__list`).append(index__item);
                    if (classe == "people") {
                        peopleTextOrder.push(index__item);
                    } else if (classe == "places") {
                        placesTextOrder.push(index__item);
                    }
                }  
            });
        }); 
    }
}

$(function(){
    // From TEI to HTML
    function fromTeiToHtml(listOfDocuments, listOfArticles, xsl_url) {     
        $(listOfArticles).each(function(i, xml_url){
            $.when($.get(xml_url), $.get(xsl_url))
            .done(function(xml_doc, xsl_doc) {
                var xsltProcessor = new XSLTProcessor();
                xsltProcessor.importStylesheet(xsl_doc[0]);
                resultDocument = xsltProcessor.transformToFragment(xml_doc[0], document);
                // parseDocument(resultDocument, "person", "indexOfNames");
                // parseDocument(resultDocument, "place", "indexOfPlaces");
                // parseDocument(resultDocument, "date", "indexOfDates");
                listOfDocuments[xml_url] = resultDocument;
            });
        });
    }

    // Add RDFa tags
    function addRDFa(classe, val, id) {
        if (classe == "person") {
            $(val).wrap(`<span about="#${id}" instanceof="foaf:Person" property="foaf:name"></span>`);
        } else if (classe == "place") {
            $(val).wrap(`<span about="#${id}" instanceof="crm:E53_Place" property="crm:P168_place_is_defined_by"></span>`);
        } else if (classe="date") {
            $(val).find("time").wrap(`<span about="#${id}" instanceof="crm:E2_Temporal_Entity" datatype="xsd:date" property="crm:P4_has_time-span"></span>`);
        }
}  

    // Parse document
    function parseDocument(documentName, article, listOfClasses) {
        // Temporary DOM
        var documentName = documentName.replace(/ |,|\.|html/g,'');
        var documentFragment = document.createDocumentFragment();
        var metadata = {};
        var peopleValues = [];
        var placesValues = [];
        var datesValues = [];
        $(documentFragment).html(article);
        // Datetime -> class="date"
        $(documentFragment).find("time").each(function(i){
            $(this).replaceWith(`<time datetime="${$(this).attr("datetime")}" class="date"'>${this.innerHTML}</time>`);
        });
        // Temporary
        $(documentFragment).find("head, title, meta, script, nav, footer").remove();

        $(listOfClasses).each(function(i, classe){
            $(documentFragment).find(`.${classe}`).each(function(i, fragment){
                var instanceNoSpecialCharacters = `${fragment.innerHTML.replace(/ |,|\./g,'')}_${documentName}`;
                var instance = fragment.innerHTML;

                addRDFa(classe, fragment, `${instanceNoSpecialCharacters}_${i}`);

                if (classe == "date") {
                    $(fragment).replaceWith(`
                        <a title="${instance}" data-text="${instance}" class="${classe}" id="${instanceNoSpecialCharacters}_${i}" href="#${instanceNoSpecialCharacters}_${i}--anchor">
                            <time datetime="${$(fragment).attr("datetime")}">${instance}</time>
                        </a>
                    `);
                    datesValues.push([instance, $(fragment).attr("datetime")]);
                } else if (classe == "place") {
                    placesValues.push(instance);
                } else if (classe == "person") {
                    peopleValues.push(instance);
                }
                $(fragment).replaceWith(`<a title="${instance}" data-text="${instance}" class="${classe}" id="${instanceNoSpecialCharacters}_${i}" href="#${instanceNoSpecialCharacters}_${i}--anchor">${instance}</a>`);
            });
        });
        metadata["people"] = peopleValues;
        metadata["places"] = placesValues;
        metadata["dates"] = datesValues;

        // documentFragment to HTML
        var div = document.createElement('div');
        div.appendChild( documentFragment.cloneNode(true) );
        var html = div.innerHTML;
        return [html, metadata];
    }

    // var listOfArticles = ["roller_stones.xml"];
    // var listOfDocuments = {};
    // fromTeiToHtml(listOfDocuments, listOfArticles, "text.xsl");

    function tempDocumentLoader(listOfArticles, listOfClasses, dictOfDocuments){
        $(listOfArticles).each(function(i, article){
            $.ajax({
                url: article,
                success: function(data){
                    var parsedDocument = parseDocument(article, data, listOfClasses);
                    dictOfDocuments[article] = [parsedDocument[0], parsedDocument[1]];
                }
            });
        });
    }

    function createTableOfContents() {
        if ($('h2').length == 0) {
          $('.tableOfContents .metadata__tab--content').html('<p class="index__item">This article has no headings!</p>');
        } else {
            $('.tableOfContents .metadata__tab--content').html("<ul class='index__list'></ul>")
        }
        $('h2').each(function(i){
            var instance = this.innerHTML;
            var instanceNoSpecialCharacters = this.innerHTML.replace(/ |,|\./g,'');
  
            $(this).replaceWith(`
                <h2>
                    <a title="${instance}" data-text="${instance}" id="${instanceNoSpecialCharacters}_${i}" href="#${instanceNoSpecialCharacters}_${i}--anchor">${instance}</a>
                </h2>
            `);
  
        $('.tableOfContents .index__list').append(`
                <li class="index__item">
                    <a class='index__link' title='${instance}' data-text="${instance}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance}</a>
                    <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
                </li>
            `);
        });
    }

    var templistOfArticles = ["NYTimes.html", "validation.html"];
    var tempListOfClasses = ["person", "place", "date"];
    tempDocumentLoader(templistOfArticles, tempListOfClasses, tempDictOfDocuments);

    // Changing article 
    $(document).on("click", ".selector__article", function(){
        $(".selector__article").each(function(){
            $(this).removeClass("selector__article--active");
        })
        $(this).addClass("selector__article--active");

        // Update document
        var documentSelected = `${$(this).attr("title")}.html`;
        $(".container__text").html(tempDictOfDocuments[documentSelected]);

        // Update metadata
        createTableOfContents();
        createList(tempDictOfDocuments, "currentArticle");

        // Close metadata widget
        if (isActive) {
            $(".metadata__button").trigger("click");
        }

        // Reset radio button
        $("input[type=radio][name=context][value=currentArticle]").prop("checked", true)
    });
});