var dictOfDocuments = {};
var peopleTextOrder = [],
    placesTextOrder = [],
    datesTextOrder = [];

var metadataActive = false;
var selectorActive = false;

var x = window.matchMedia("(max-width: 56.25em)");

var listOfClasses = ["person", "place", "date"];

var listOfIssues;

function jsonReader(data){
    $(".indexOfPeople .index__item, .indexOfPlaces .index__item, .indexOfDates .index__item").each(function(index, item){
        var curItem = $(item).children().attr("title");
        if (curItem in data) {
            var url = data[curItem];
            $(item).append(`
                <a title="${curItem} Wikipedia page" href="${url}" target="_blank"><img src="img/wikipedia_icon.svg" alt="Wikipedia icon" class="index__wikipedia"></a>
            `);
        }

        // Record original text order
        if($(item).parents(".metadata__tab").hasClass("indexOfPeople")){
            peopleTextOrder.push($(item)[0].outerHTML)
        } else if ($(item).parents(".metadata__tab").hasClass("indexOfPlaces")) {
            placesTextOrder.push($(item)[0].outerHTML)
        } else if ($(item).parents(".metadata__tab").hasClass("indexOfDates")){
            datesTextOrder.push($(item)[0].outerHTML)
        }
    });
}

function createList(dictOfDocuments, context, articleSelected){
    var instanceNoSpecialCharacters;
    var index__item;
    $(".metadata__tab:not(.tableOfContents) .index__list").each(function(){
        $(this).html("");
    });
    if (context == "everyArticle"){
        $.each(dictOfDocuments, function(document, metadata){
            var documentURLSplit = document.split('/');
            var articleSelected = (documentURLSplit[documentURLSplit.length - 1]).replace(/\.|xml/g,'');
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
                        instanceNoSpecialCharacters = `${instance[0].replace(/ |,|\.|\?|:|'/g,'')}_${articleSelected}`;
                        index__item = `<li class="index__item" data-text="${instance[1]}">
                                            <a class='index__link' title='${instance[0]}' data-text="${instance[0]}, ${articleTitle}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance[0]}, ${articleTitle}</a>
                                            <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
                                        </li>`
                        $(`.${list} .index__list`).append(index__item);
                        // datesTextOrder.push(index__item);
                    } else if (classe != "head") {
                        instanceNoSpecialCharacters = `${instance.replace(/ |,|\.|\?|:|'/g,'')}_${articleSelected}`;
                        index__item = `<li class="index__item" data-text="${instanceNoSpecialCharacters}">
                                            <a class='index__link' title='${instance}' data-text="${instance}, ${articleTitle}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance}, ${articleTitle}</a>
                                            <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
                                        </li>`
                        $(`.${list} .index__list`).append(index__item);
                        if (classe == "people") {
                            // peopleTextOrder.push(index__item);
                        } else if (classe == "places") {
                            // placesTextOrder.push(index__item);
                        }
                    }  
                });
            });
        });
        // Disable Text order
        $("#indexOfPeopleTextOrder, #indexOfPlacesTextOrder, #indexOfDatesTextOrder").prop("disabled", true);
        $("#indexOfPeopleTextOrder, #indexOfPlacesTextOrder, #indexOfDatesTextOrder").css("pointer-events", "none");
        $("#indexOfPeopleTextOrder, #indexOfPlacesTextOrder, #indexOfDatesTextOrder").removeClass("btn--color");
    } else if (context == "currentArticle"){
        articleSelected = $(".index__item .selector__article--active").attr("title");
        $(document).ready(function(){
            $.each(dictOfDocuments[articleSelected][1], function(classe, instances){
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
                        instanceNoSpecialCharacters = `${instance[0].replace(/ |,|\.|\?|:|'/g,'')}_${articleSelected}`;
                        list__item = `<li class="index__item" data-text="${instance[1]}">
                                            <a class='index__link' title='${instance[0]}' data-text="${instance[0]}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance[0]}</a>
                                            <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
                                        </li>`
                        $(`.${list} .index__list`).append(list__item);
                        // datesTextOrder.push(list__item);
                    } else if (classe != "head") {
                        instanceNoSpecialCharacters = `${instance.replace(/ |,|\.|\?|:|'/g,'')}_${articleSelected}`;
                        index__item = `<li class="index__item" data-text="${instanceNoSpecialCharacters}">
                                            <a class='index__link' title='${instance}' data-text="${instance}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance}</a>
                                            <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
                                        </li>`
                        $(`.${list} .index__list`).append(index__item);
                        if (classe == "people") {
                            // peopleTextOrder.push(index__item);
                        } else if (classe == "places") {
                            // placesTextOrder.push(index__item);
                        }
                    }
                });
            });
        });
    }

    var generated_data, hard_data;
    $.when(
        $.getJSON("wikipedia.json", function(data) {
            generated_data = data;
        }),
        $.getJSON("people_wikipedia.json", function(data) {
            hard_data = data;
        })
    ).then(function() {
        var final_data = $.extend({}, generated_data, hard_data);
        jsonReader(final_data);
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
        var instanceNoSpecialCharacters = this.innerHTML.replace(/ |,|\.|\?|:|'/g,'');

        var parent = $(this).parent();
        var subheadings = $(parent).find('h3');

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

    if (subheadings.length != 0) {
        $('.tableOfContents .index__list li').last().append(`
          <ul></ul>
        `);
        subheadings.each(function(i){
            var instance = this.innerHTML;
            var instanceNoSpecialCharacters = this.innerHTML.replace(/ |,|\.|\?|:|'/g,'');

            $(this).replaceWith(`<h3><a title="${instance}" data-text="${instance}" id="${instanceNoSpecialCharacters}_${i}" href="#${instanceNoSpecialCharacters}_${i}--anchor">
                ${instance}</a></h3>
            `);

            $('.tableOfContents .index__list li ul').last().append(`
              <li class="index__item">
                <a class='index__link' title='${instance}' data-text="${instance}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance}</a>
                <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
              </li>
            `);
        });
    }
    });
}

// From HTML to JSON-LD
function createObj(documentSelected){
    var metadata = {
        "@id": window.location.hostname + "/" + documentSelected,
        "@context": {
            "DC": "http://purl.org/dc/elements/1.1/",
            "DCTERMS": "http://purl.org/dc/terms/"
        }
    }
    $("head meta").not("meta[name='viewport']").each(function(){
        var prefix = $(this).attr("name").replace("\.", ":");
        metadata[prefix] = $(this).attr("content");
    });
    return JSON.stringify(metadata);
}

function hide1500Scrollbar(){
    var rules = document.styleSheets[0].cssRules;
    for (i=0; i<rules.length; i++){
        if (rules[i].selectorText) {
            if (rules[i].selectorText.toLowerCase() == "body.before_1500::-webkit-scrollbar"){ 
                targetRule = i;
                document.styleSheets[0].deleteRule(i)
                break;
            }        
        } 
    }
}

function show1500Scrollbar(){
    var ss = document.styleSheets[0];
    ss.insertRule('body.before_1500::-webkit-scrollbar {width: 2.5rem}', 0);
}

$(function(){
    function documentLoader(listOfArticles, listOfClasses, dictOfDocuments){
        $(listOfArticles).each(function(i, article){
            $.when($.get(article), $.get("text.xsl"))
            .done(function(xml_doc, xsl_doc) {
                var xsltProcessor = new XSLTProcessor();
                xsltProcessor.importStylesheet(xsl_doc[0]);
                resultDocument = xsltProcessor.transformToFragment(xml_doc[0], document);
                var parsedDocument = parseDocument(article, resultDocument, listOfClasses);
                var documentURLSplit = article.split('/');
                articleSelected = (documentURLSplit[documentURLSplit.length - 1]).replace(/ |,|\.|xml/g,'');
                dictOfDocuments[articleSelected] = [parsedDocument[0], parsedDocument[1]];

                // Active link
                $(".selector__article").each(function(){
                    if ($(this).text() == $("meta[name='DC.title']").attr("content")){
                        $(this).addClass("selector__article--active");
                        
                        // Arrows enabled
                        $(".index__nextprevious a").each(function(){
                            $(this).removeClass("selector__article--active");
                        });
                    }
                }); 
            });
        });
    }

    function addSource(article) {
        var meta = $(article).find("meta[scheme='DCTERMS.URI']");
        var source = meta.attr("content");
        $(".indexOfArticles .index__item").last().append(`<br><a href="${source}" title="Article original source" target="_blank">[Original Source]</a>`);
    }

    function addInlineMetadata(classe, val, id) {
        if (classe == "person") {
            $(val).wrap(`<span itemscope itemtype="http://schema.org/Person" itemid="#${id}" about="#${id}" instanceof="foaf:Person" property="foaf:name"></span>`);
        } else if (classe == "place") {
            $(val).wrap(`<span itemscope itemtype="https://schema.org/Place" itemid="#${id}" about="#${id}" instanceof="crm:E53_Place" property="crm:P168_place_is_defined_by"></span>`);
        } else if (classe="date") {
            $(val).wrap(`<span itemscope itemtype="https://schema.org/DateTime" itemid="#${id}" about="#${id}" instanceof="crm:E2_Temporal_Entity" datatype="xsd:date" property="crm:P4_has_time-span"></span>`);
        }
    }

    // Parse document
    function parseDocument(articleSelected, article, listOfClasses) {
        // Temporary DOM
        var documentFolder = articleSelected;
        var documentURLSplit = articleSelected.split('/');
        articleSelected = (documentURLSplit[documentURLSplit.length - 1]).replace(/\.|xml/g,'');
        var documentFragment = document.createDocumentFragment();
        var metadata = {};
        var peopleValues = [];
        var placesValues = [];
        var datesValues = [];
        $(documentFragment).html(article);
        // Datetime -> class="date"
        // $(documentFragment).find("time").each(function(i){
        //     $(this).replaceWith(`<time datetime="${$(this).attr("datetime")}" class="date"'>${this.innerHTML}</time>`);
        // });

        var articleTitle = $(documentFragment).closest("h1").text() ? $(documentFragment).closest("h1").text() : $(documentFragment).find("h1").text();
        $(".indexOfArticles .index__list").append(`<li class="index__item"><a class="selector__article" href="#" title="${articleSelected}" folder="${documentFolder}">${articleTitle}</a></li>`);
        addSource(documentFragment);
       
        var headMetadata = $(documentFragment).find("meta");
        $(documentFragment).find("head, title, meta, script, nav, footer").remove();

        $(listOfClasses).each(function(i, classe){
            $(documentFragment).find(`.${classe}`).each(function(i, fragment){
                var instanceNoSpecialCharacters = `${fragment.innerHTML.replace(/ |,|\.|\?|:|'/g,'')}_${articleSelected}`;
                var instance = fragment.innerHTML;

                addInlineMetadata(classe, fragment, `${instanceNoSpecialCharacters}_${i}`);

                if (classe == "date") {
                    $(fragment).replaceWith(`
                        <a title="${instance}" data-text="${instance}" class="${classe}" id="${instanceNoSpecialCharacters}_${i}" href="#${instanceNoSpecialCharacters}_${i}--anchor">
                            <time datetime="${$(fragment).attr("datetime")}">${instance}</time>
                        </a>
                    `);
                    datesValues.push([instance, $(fragment).attr("datetime")]);
                } else if (classe == "place") {
                    placesValues.push(instance);
                    $(fragment).replaceWith(`<a title="${instance}" data-text="${instance}" class="${classe}" id="${instanceNoSpecialCharacters}_${i}" href="#${instanceNoSpecialCharacters}_${i}--anchor">${instance}</a>`);
                } else if (classe == "person") {
                    peopleValues.push(instance);
                    $(fragment).replaceWith(`<a title="${instance}" data-text="${instance}" class="${classe}" id="${instanceNoSpecialCharacters}_${i}" href="#${instanceNoSpecialCharacters}_${i}--anchor">${instance}</a>`);
                }
            });
        });
        metadata["head"] = headMetadata;
        metadata["people"] = peopleValues;
        metadata["places"] = placesValues;
        metadata["dates"] = datesValues;

        // documentFragment to HTML
        var div = document.createElement('div');
        div.appendChild( documentFragment.cloneNode(true) );
        var html = div.innerHTML;
        return [html, metadata];
    }

    function issueLoader(listOfIssues, listOfClasses, dictOfDocuments){
        $(listOfIssues).each(function(i, issue){
            $(".indexOfIssues .index__list").append(`<li class="index__item"><a class="selector__issue" href="#" folder=${issue.folder}>${issue['name']}</a></li>`);
            if(i === 0) {
                var currentIssueArticles = loadIssueData(issue);

                $(".indexOfIssues .index__list .selector__issue")[0].classList.add("selector__issue--active");

                documentLoader(currentIssueArticles, listOfClasses, dictOfDocuments);
            }
        });
    }

    function loadIssueData(issueDict) {
        var currentIssueArticles = [];
        $(issueDict['articles']).each(function(i, article){
           currentIssueArticles.push((issueDict['folder']).concat('/', article));
        });

        return currentIssueArticles;
    }

    $.getJSON("issue_info.json")
        .then(function(data){
            listOfIssues = data;
            issueLoader(listOfIssues, listOfClasses, dictOfDocuments);
        });
        
    // Changing article 
    $(document).on("click", ".selector__article", function(){
        $(".selector__article").each(function(){
            $(this).removeClass("selector__article--active");
        })
        $(this).addClass("selector__article--active");

        // Update document
        var documentSelected = `${$(this).attr("title")}`;
        $(".container__text").html(dictOfDocuments[documentSelected]);

        // Update head metadata
        $("head meta").each(function(){
            $(this).remove();
        });
        $(document).ready(function(){
            $("head").append(dictOfDocuments[documentSelected][1]["head"]);
            $("head").append(`
                <script type="application/ld+json">
                    ${createObj(documentSelected)}
                </script>
            `);
        });

        // Update metadata
        createTableOfContents();
        createList(dictOfDocuments, "currentArticle", $(this).attr("title"));

        // Close selector widget
        $(".selector__button").trigger("click");

        // One click to set right colors
        $(".metadata__button").trigger("click");
        // One click to close it
        $(".metadata__button").trigger("click");

        // Reset radio button
        $("input[type=radio][name=context][value=currentArticle]").prop("checked", true)

        // Update download as DocBook
        if ($(".selector__docbook").length > 0){
            $(".selector__docbook").remove();
        }
        $(".selector__nav").prepend(`
            <div class="selector__docbook">
                <a>Download as Docbook</a>
            </div>
        `);

        // Revoce active from nav
        $(".nav__item").each(function(){
            $(this).removeClass("nav__item--active");
        });

        show1500Scrollbar();

        // Metadata widget enabled
        $(".metadata__background").css("display", "block");
        $(".metadata__button").addClass("btn--color");
        $(".metadata__button").css("pointer-events", "auto");

        // Arrows enabled
        $(".index__nextprevious a").each(function(){
            $(this).removeClass("selector__article--active");
        });

        // Themes not active 
        $(".fa-info-circle").each(function(){
            $(this).removeClass("themeSelector--active");
        });
    });

    $(document).on("click", ".selector__issue", function(){
        $(".selector__issue").each(function(){
            $(this).removeClass("selector__issue--active");
        });
        $(this).addClass("selector__issue--active");

        // Update document
        var issueFolder = $(this).attr("folder");
        var issue = listOfIssues[issueFolder.charAt(issueFolder.length - 1) - 1];
        var currentIssueArticles = loadIssueData(issue);

        $(".indexOfArticles .index__list").html(`<div class="index__nextprevious">
                                                    <a class="index__nextprevious--previous selector__article--active">&larr;</a>
                                                    <a class="index__nextprevious--next selector__article--active">&rarr;</a>
                                                </div>`);

        documentLoader(currentIssueArticles,listOfClasses, dictOfDocuments);

        if(!document.getElementById('indexOfArticles').checked) {
            $("#indexOfArticles").trigger("click");
        }
    });
});