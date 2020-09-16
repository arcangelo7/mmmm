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

    // Parse document
    function parseDocument(article, listOfClasses) {
        // Temporary DOM
        var documentFragment = document.createDocumentFragment();
        $(documentFragment).html(article);
        // Datetime -> class="date"
        $(documentFragment).find("time").each(function(i){
            $(this).replaceWith(`<time datetime="${$(this).attr("datetime")}" class="date"'>${this.innerHTML}</time>`);
        });
        // Temporary
        $(documentFragment).find("head, title, meta, script, nav, footer").remove();

        $(listOfClasses).each(function(i, classe){
            $(documentFragment).find(`.${classe}`).each(function(i, fragment){
                var instanceNoSpecialCharacters = fragment.innerHTML.replace(/ |,|\./g,'');
                var instance = fragment.innerHTML;
                if (classe == "date") {
                    $(fragment).replaceWith(`
                        <a title="${instance}" data-text="${instance}" class="${classe}" id="${instanceNoSpecialCharacters}_${i}" href="#${instanceNoSpecialCharacters}_${i}--anchor">
                            <time datetime="${$(fragment).attr("datetime")}">${instance}</time>
                        </a>
                    `);
                } else {
                    $(fragment).replaceWith(`<a title="${instance}" data-text="${instance}" class="${classe}" id="${instanceNoSpecialCharacters}_${i}" href="#${instanceNoSpecialCharacters}_${i}--anchor">${instance}</a>`);
                }
            });
        });
        // documentFragment to HTML
        var div = document.createElement('div');
        div.appendChild( documentFragment.cloneNode(true) );
        var html = div.innerHTML;
        return html;
    }

    // var listOfArticles = ["roller_stones.xml"];
    // var listOfDocuments = {};
    // fromTeiToHtml(listOfDocuments, listOfArticles, "text.xsl");

    function tempDocumentLoader(listOfArticles, listOfClasses, dictOfDocuments){
        $(listOfArticles).each(function(i, article){
            $.ajax({
                url: article,
                success: function(data){
                    var parsedDocument = parseDocument(data, listOfClasses);
                    dictOfDocuments[article] = parsedDocument;
                }
            });
            
        });
    }

    function clearMetadata(){
        $(".index__item, .index__list").each(function(){
            $(this).html("");
        });
    }

    function createList(listOfClasses){
        $(listOfClasses).each(function(i, classe){
            $(`.${classe}`).each(function(i, fragment){
                switch (classe) {
                    case "person":
                        list = "indexOfPeople";
                        instance = fragment.innerHTML;
                        instanceNoSpecialCharacters = fragment.innerHTML.replace(/ |,|\./g,'');
                        break;
                    case "place":
                        list = "indexOfPlaces";
                        instance = fragment.innerHTML;
                        instanceNoSpecialCharacters = fragment.innerHTML.replace(/ |,|\./g,'');
                        break;
                    case "date":
                        list = "indexOfDates";
                        instance = $(fragment).find("time").html();
                        instanceNoSpecialCharacters = $(fragment).find("time").html().replace(/ |,|\./g,'');
                        break;
                }
                if (classe == "date") {
                    $(`.${list} .index__list`).append(`
                            <li class="index__item" data-date="${$(fragment).children().attr("datetime")}">
                                <a class='index__link' title='${instance}' data-text="${instance}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance}</a>
                                <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
                            </li>
                        `);
                } else {
                    $(`.${list} .index__list`).append(`
                        <li class="index__item">
                            <a class='index__link' title='${instance}' data-text="${instance}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance}</a>
                            <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
                        </li>
                    `);
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

    function prepareToBeSorted(items, list) {
        $(`.${list} li`).each(function(){
            if (items == dates) {
                items.push(this.outerHTML);
            } else {
                items.push(this.innerHTML);
            }
        });
    }

    var templistOfArticles = ["NYTimes.html", "validation.html"];
    var tempListOfClasses = ["person", "place", "date"];
    var tempDictOfDocuments = {};
    tempDocumentLoader(templistOfArticles, tempListOfClasses, tempDictOfDocuments);

    // Changing article 
    $(document).on("click", ".selector__article", function(){
        // Update document
        var documentSelected = `${$(this).attr("title")}.html`;
        $(".container__text").html(tempDictOfDocuments[documentSelected]);

        // Update metadata
        clearMetadata();
        createTableOfContents();
        createList(tempListOfClasses);

        // Handle sort functions
        prepareToBeSorted(people, "indexOfPeople");
        peopleToSort = people.slice();
        prepareToBeSorted(places, "indexOfPlaces");
        placesToSort = places.slice();
        prepareToBeSorted(dates, "indexOfDates");
        datesToSort = dates.slice();
    });
});