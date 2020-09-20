// Button effect
function toggleColor(button, state) {
    if ($(".before_1500").length > 0){
        if (state) {
            $(`.${button}__button`).css("background-color", "#1c4d6d");
        } else {
            $(`.${button}__button`).css("background-color", "#a8432f");
        }
    } else if ($(".around_2040").length > 0){
        if (state) {
            $(`.${button}__button`).css("background-color", "#8af3ff");
        } else {
            $(`.${button}__button`).css("background-color", "#fae127");
        }
    } else if ($(".early_20th").length > 0){
        if (state) {
            $(`.${button}__button`).css("background-color", "#c76351");
        } else {
            $(`.${button}__button`).css("background-color", "#5d5a4f");
        }
    } else if ($(".late_20th").length > 0) {
        if (state) {
            $(`.${button}__button`).css("background-color", "white");
        } else {
            $(`.${button}__button`).css("background-color", "#ccc");
        }
    }
    $(`.${button}__button`).toggleClass('changed');
};

// Hide widget container when not active
function hideWidget(widget, state){
    if (state) {
        $(`.${widget}`).css("z-index", "-1")
    } else {
        $(`.${widget}`).css("z-index", "1")
    }
}

function hideOtherWidget(otherWidget, otherWidgetState){
    if(otherWidgetState){
        $(`.${otherWidget}__button`).trigger("click");
        hideWidget(otherWidget, otherWidgetState);
    }
}

$(function(){
    $("body").prepend(`
        <label for="meta-toggle" class="metadata__button btn btn--color btn--animated-up">
            <svg xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 125">
                <g transform="translate(0,-952.36218)">
                    <path class="metadata__svg" style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#000000;enable-background:accumulate;" d="m 74.223536,957.36215 c -6.5314,0 -12.38727,3.035 -16.19514,7.7621 a 2.1305483,2.1305483 0 1 0 3.29739,2.6554 c 3.03065,-3.7622 7.67941,-6.157 12.89775,-6.157 9.15088,0 16.516085,7.3653 16.516115,16.51596 4e-5,9.1509 -7.365105,16.5452 -16.516115,16.5453 -4.85161,-10e-5 -9.2024,-2.0819 -12.2266,-5.3983 a 2.1305483,2.1305483 0 1 0 -3.15149,2.8596 c 1.48232,1.6257 3.23035,2.9919 5.16494,4.0852 -2.22102,1.6406 -5.30525,1.4648 -7.32429,-0.5543 -2.22788,-2.2277 -2.2279,-5.7676 0,-7.9955 2.22793,-2.228 5.7675,-2.228 7.99544,0 0.58279,0.5828 1.00884,1.2396 1.28394,1.9552 a 2.1305483,2.1305483 0 1 0 3.96853,-1.5174 c -0.48376,-1.2583 -1.23815,-2.4639 -2.24689,-3.4725 -1.92807,-1.9282 -4.46008,-2.8889 -7.0033,-2.8889 -2.54321,0 -5.07523,0.9607 -7.0033,2.8889 -3.85611,3.8561 -3.85627,10.1797 0,14.0357 3.8561,3.85639 10.15047,3.85609 14.0066,0 0.19746,-0.1974 0.37631,-0.4015 0.55443,-0.6127 1.89837,0.5716 3.90573,0.8754 5.98199,0.8754 1.1957,0 2.36057,-0.096 3.50165,-0.2918 l 0,5.98189 -37.58439,37.5845 -30.02665,-29.9975 37.58438,-37.58449 19.2299,0 10.82594,10.8551 0,3.9394 a 2.1305483,2.1305483 0 1 0 4.26034,0 l 0,-4.8439 a 2.1305483,2.1305483 0 0 0 -0.64197,-1.4882 l -12.08069,-12.10986 a 2.1305483,2.1305483 0 0 0 -1.51739,-0.6127 l -20.95154,0 a 2.1305483,2.1305483 0 0 0 -0.20426,0 2.1305483,2.1305483 0 0 0 -1.31312,0.6127 L 5.620366,1010.704 a 2.1305483,2.1305483 0 0 0 0,3.0057 l 33.03223,33.0322 a 2.1305483,2.1305483 0 0 0 3.00559,0 l 39.71455,-39.6854 a 2.1305483,2.1305483 0 0 0 0.61279,-1.5174 l 0,-8.11219 c 7.617525,-3.0919 13.014505,-10.58 13.014465,-19.2883 -4e-5,-11.45346 -9.32294,-20.77646 -20.776455,-20.77646 z m -44.73359,41.75716 a 2.1305483,2.1305483 0 0 0 -1.89673,2.13019 l 0,12.1391 a 2.1305483,2.1305483 0 1 0 4.26034,0 l 0,-10.0089 10.00889,0 a 2.1305483,2.1305483 0 1 0 0,-4.26039 l -12.13906,0 a 2.1305483,2.1305483 0 0 0 -0.23344,0 z m 21.59351,9.19199 a 2.1305483,2.1305483 0 0 0 -0.23344,0.029 2.1305483,2.1305483 0 0 0 -1.86755,2.1593 l 0,10.0089 -10.00888,0 a 2.1305483,2.1305483 0 1 0 0,4.2604 l 12.13905,0 a 2.1305483,2.1305483 0 0 0 2.13017,-2.1302 l 0,-12.1391 a 2.1305483,2.1305483 0 0 0 -2.15935,-2.1883 z" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible" />
                </g>
            </svg>
        </label>
        <div class="metadata">

            <input type="checkbox" class="metadata__checkbox" id="meta-toggle">
            <div class="metadata__background">&nbsp;</div>

            <nav class="metadata__nav">
                <div class="metadata__context">
                    <div class="metadata__input">
                        <input type="radio" id="currentArticle" name="context" value="currentArticle" checked="checked">
                        <label for="currentArticle" class="u-nowrap">Current article</label>
                    </div>
                    <div class="metadata__input">
                        <input type="radio" id="everyArticle" name="context" value="everyArticle">
                        <label for="everyArticle" class="u-nowrap">Every article</label>      
                    </div>
                </div>
                <div class="metadata__tabs">
                    <div class="metadata__tab tableOfContents">
                        <input type="checkbox" class="metadata__checkbox" id="tableOfContents" checked>
                        <label class="metadata__tab--label" for="tableOfContents">Table of Contents</label>
                        <div class="metadata__tab--content">
                        </div>
                    </div>
                    <div class="metadata__tab index indexOfPeople">
                        <input type="checkbox" class="metadata__checkbox" id="indexOfPeople">
                        <label class="metadata__tab--label" for="indexOfPeople">Index of names</label>
                        <div class="metadata__tab--content">
                            <div class="index__btn--container">
                                <button class="index__btn btn btn--color" id="indexOfPeopleSort">Sort <span class='u-nowrap'>A-Z</span></button>
                                <button class="index__btn btn" id="indexOfPeopleTextOrder" disabled>Text order</button>
                            </div>
                            <ul class="index__list"></ul>
                        </div>
                    </div>
                    <div class="metadata__tab indexOfPlaces">
                        <input type="checkbox" class="metadata__checkbox" id="indexOfPlaces">
                        <label class="metadata__tab--label" for="indexOfPlaces">Index of places</label>
                        <div class="metadata__tab--content">
                            <div class="index__btn--container">
                                <button class="index__btn btn btn--color" id="indexOfPlacesSort">Sort <span class='u-nowrap'>A-Z</span></button>
                                <button class="index__btn btn" id="indexOfPlacesTextOrder" disabled>Text order</button>
                            </div>
                            <ul class="index__list"></ul>
                        </div>
                    </div>
                    <div class="metadata__tab indexOfDates">
                        <input type="checkbox" class="metadata__checkbox" id="indexOfDates">
                        <label class="metadata__tab--label" for="indexOfDates">Index of dates</label>
                        <div class="metadata__tab--content">
                            <div class="index__btn--container">
                                <button class="index__btn btn btn--color" id="indexOfDatesSort"><img alt="clockwise icon" src="img/clockwise.svg"></img></button>
                                <button class="index__btn btn" id="indexOfDatesTextOrder" disabled>Text order</button>
                            </div>
                            <ul class="index__list"></ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    `);

    function sortUnorderedList (list, sortDescending, textOrder, items) {
        if (textOrder) {
            $(`.${list} li`).each(function(i){
                this.outerHTML = items[i];
            });
            $(`#${list}TextOrder`).prop('disabled', true);
            $(`#${list}TextOrder`).removeClass("btn--color");
            $(`#${list}Sort`).html("Sort <span class='u-nowrap'>A-Z</span>");
            return
        }
        $(`.${list} li`).sort(function(a, b){
            if (sortDescending) {
                a = $(b).attr("data-text");
                b = $(a).attr("data-text");
                $(`#${list}Sort`).html("Sort <span class='u-nowrap'>A-Z</span>");
            } else {
                a = $(a).attr("data-text");
                b = $(b).attr("data-text");
                $(`#${list}Sort`).html("Sort <span class='u-nowrap'>Z-A</span>");
            }
            if (a < b) {
                return 1
            } else if (a == b) {
                return 0
            } else if (a > b) {
                return -1;
            }
        }).each(function(){
            $(`.${list} ul`).prepend(this);
        });
        $(`#${list}TextOrder`).prop('disabled', false);
        $(`#${list}TextOrder`).addClass("btn--color");
    }

    function expandMetadataViewer(x) {
        if (!metadataActive && x.matches) {
            $(".metadata").css("height", "0");
            $(".metadata__nav").css("height", "0");
        } else if (metadataActive && x.matches){
            $(".metadata").css("height", "30vh");
            $(".metadata__nav").css("height", "30vh");
        } else if (!x.matches && $(".around_2040").length > 0) {
            $(".metadata").css("height", "91vh");
            $(".metadata__nav").css("height", "91vh");
        } else if (!x.matches && $(".before_1500").length > 0) {
            $(".metadata").css("height", "100vh");
        } else if (!x.matches && $(".early_20th").length > 0) {
            $(".metadata").css("height", "100vh");
        } else if (!x.matches && $(".late_20th").length > 0) {
            $(".metadata").css("height", "100vh");
            $(".metadata__nav").css("height", "100vh");
        } else if (!x.matches && $(".early_20th").length > 0) {
            $(".metadata").css("height", "100vh");
            $(".metadata__nav").css("height", "100vh");
        } else {
            $(!x.matches && ".metadata").css("height", "100vh");
            $(".metadata__nav").css("height", "100vh");
        }
    }

    $(document).on("click", ".metadata__button", function(){
        toggleColor("metadata", metadataActive);
        hideWidget("metadata", metadataActive);
        if(selectorActive){
            $(".selector__button").trigger("click");
            selectorActive = false;
        }
        metadataActive = !metadataActive;
    });

    x.addListener(expandMetadataViewer);

    // Height 0 when closed on mobile
    $(document).on("click", ".metadata__button", function(){
        if (metadataActive && x.matches) {
            $(".metadata").css("height", "30vh");
            $(".metadata__nav").css("height", "30vh");
        } else if (!metadataActive && x.matches) {
            $(".metadata").css("height", "0");
            $(".metadata__nav").css("height", "0");
        }
    });

    // Index of names
    var peopleDesc = false;

    $(document).on("click", "#indexOfPeopleSort", function(){
        sortUnorderedList("indexOfPeople", peopleDesc, false, peopleTextOrder);
        peopleDesc = !peopleDesc;
    });

    $(document).on("click", "#indexOfPeopleTextOrder", function(){
        sortUnorderedList("indexOfPeople", peopleDesc, true, peopleTextOrder);
        peopleDesc = false;
    });

    // Index of places
    var placesDesc = false;

    $(document).on("click", "#indexOfPlacesSort", function(){
        sortUnorderedList("indexOfPlaces", placesDesc, false, placesTextOrder);
        placesDesc = !placesDesc;
    });

    $(document).on("click", "#indexOfPlacesTextOrder", function(){
        sortUnorderedList("indexOfPlaces", placesDesc, true, placesTextOrder);
        placesDesc = false;
    });

    // Index of dates
    var clockwise = true;

    $(document).on("click", "#indexOfDatesSort", function(){
        if (clockwise) {
            $(".indexOfDates li").sort(function(a, b){
                return Date.parse($(b).attr("data-text")) - Date.parse($(a).attr("data-text"));
            }).each(function(){
                $(".indexOfDates ul").prepend(this);
            });
            $("#indexOfDatesSort").html("<img alt='anti-clockwise icon' src='img/anti-clockwise.svg'></img>")
        } else {
            $(".indexOfDates li").sort(function(a, b){
                return Date.parse($(a).attr("data-text")) - Date.parse($(b).attr("data-text"));
            }).each(function(){
                $(".indexOfDates ul").prepend(this);
            });
            $("#indexOfDatesSort").html("<img alt='clockwise icon' src='img/clockwise.svg'></img>")
        }
        $("#indexOfDatesTextOrder").prop("disabled", false);
        $("#indexOfDatesTextOrder").addClass("btn--color");
        clockwise = !clockwise;
    });

    $(document).on("click", "#indexOfDatesTextOrder", function(){
        $(".indexOfDates li").each(function(i){
            this.outerHTML = datesTextOrder[i];
        });
        $("#indexOfDatesTextOrder").prop("disabled", true);
        $("#indexOfDatesTextOrder").removeClass("btn--color");
        $("#indexOfDatesSort").html("<img alt='clockwise icon' src='img/clockwise.svg'></img>");
        clockwise = true;
    });

    // All indexes
    $(document).on("click", ".index__link", function(){
        var targetId = $(this).attr("href");
        var targetDocument = targetId.substring(targetId.indexOf('_') + 1, targetId.lastIndexOf('_'));
        if (!($(".tableOfContents")[0].contains(this)) && targetDocument != $(".selector__article--active").attr("title")){
            // Update document
            var documentSelected = `${targetDocument}.html`;
            $(".container__text").html(tempDictOfDocuments[documentSelected]);
            // Update active link
            $(".selector__article").each(function(){
                $(this).removeClass("selector__article--active");
                if ($(this).attr("title") == targetDocument){
                    $(this).addClass("selector__article--active");
                }
            });
        }
        var target =  $(`${$(this).attr("href")}`);
        if ($(".before_1500").length > 0) {
            target.css("animation", "none");
            setTimeout(function(){
                target.css("animation", "highlight_before_1500 3s");
            }, 10);
        } else if ($(".around_2040").length > 0) {
            target.addClass('glitch');
            setTimeout(function() {
                target.removeClass('glitch');
            }, 4000);
        } else if ($(".early_20th").length > 0) {
            target.css("animation", "none");
            setTimeout(function(){
                target.css("animation", "highlight_early_20th 3s");
            }, 10);
        } else if ($(".late_20th").length > 0) {
            target.effect("highlight", {color: "#ccc"}, 3000);
        }

        if (x.matches) {
            $(".metadata__button").trigger("click");
        }
    });

    $(document).on("click", ".person, .place, .date, h2 a", function(){
        var target =  $(`${$(this).attr("href").replace("--anchor","--index")}`);
        var anchor = $(`${$(this).attr("href")}`);

        if (/person/i.test($(this)[0].outerHTML)) {
            $("#tableOfContents").prop('checked', false);
            $("#indexOfPeople").prop('checked', true);
            $("#indexOfPlaces").prop('checked', false);
            $("#indexOfDates").prop('checked', false);
        } else if (/place/i.test($(this)[0].outerHTML)) {
            $("#tableOfContents").prop('checked', false);
            $("#indexOfPeople").prop('checked', false);
            $("#indexOfPlaces").prop('checked', true);
            $("#indexOfDates").prop('checked', false);
        } else if (/date/i.test($(this)[0].outerHTML)) {
            $("#tableOfContents").prop('checked', false);
            $("#indexOfPeople").prop('checked', false);
            $("#indexOfPlaces").prop('checked', false);
            $("#indexOfDates").prop('checked', true);
        }

        if (metadataActive == false) {
            $(".metadata__button").trigger("click");
            setTimeout(function() {
                anchor[0].scrollIntoView();
            }, 700);
        }

        if ($(".before_1500").length > 0) {
            target.css("animation", "none");
            setTimeout(function(){
                target.css("animation", "highlight_before_1500 4s");
            }, 10);
        } else if ($(".around_2040").length > 0) {
            target.addClass('glitch');
            setTimeout(function() {
                target.removeClass('glitch');
            }, 4000);
        } else if ($(".early_20th").length > 0) {
            target.css("animation", "none");
            setTimeout(function(){
                target.css("animation", "highlight_early_20th 4s");
            }, 10);
        } else if ($(".late_20th").length > 0) {
            target.effect("highlight", {color: "#ccc"}, 3000);
        }
    });

    // Every article
    $(document).on("change", "input[type=radio][name=context]", function() {
        createList(tempDictOfDocuments, this.value);
    });

    // Result I want
    // {
    //     "@id": "http://127.0.0.1:8080/fromTeiToHtml.html",
    //     "@context": {
    //       "dc": "http://purl.org/dc/elements/1.1/",
    //       "dcterms": "http://purl.org/dc/terms/"
    //     },
    //     "dc:title": "Validation of a Functional Pyelocalyceal Renal Model for the Evaluation of Renal Calculi Passage While Riding a Roller Coaster",
    //     "dc:creator": "Marc A. Mitchell, DO",
    //     "dc:creator": "David D. Wartinger, DO, JD",
    //     "dcterms:issued": "2016-10-01",
    //     "dc:publisher": "Elsevier",
    //     "dc:identifier": "https://www.broomedocs.com/wp-content/uploads/2016/10/roller-stone.pdf",
    //     "dc:format": "text/html",
    //     "dc:type": "Text",
    //     "dcterms:bibliographicCitations": "J Am Osteopath Assoc. 2016;116(10):647-652"
    //   }

    // From HTML to JSON-LD
    function createObj(){
        var metadata = {
            "@id": window.location.href,
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

    // From HTML to RDFa
    // Add curie to <body>
    $("body").attr("xmlns:foaf", "http://xmlns.com/foaf/0.1/");
    $("body").attr("xmlns:xsd", "http://www.w3.org/2001/XMLSchema#");
    $("body").attr("xmlns:crm", "http://www.cidoc-crm.org/cidoc-crm/");

    // $(document).on("click", ".selector__article", function(){
    //         $("head").append(createObj());
    // });

    // Add Wikipedia
    // function addWikipedia(val){
    //     var target =  $(`${$(val).attr("href").replace("--anchor","--index")}`);
    //     $.ajax({
    //         url: 'http://en.wikipedia.org/w/api.php',
    //         data: { action: 'query', list: 'search', srsearch: $(val).text(), format: 'json' },
    //         dataType: 'jsonp',
    //     }).done(function(data){
    //         if (data.query.search[0]) {
    //             var matcher = new RegExp($(val).attr("data-text"));
    //             if (matcher.test(data.query.search[0].title)) {
    //                 target.after(` <a title="Wikipedia page about ${$(val).attr("title")}" href="http://en.wikipedia.org/?curid=${data.query.search[0].pageid}" target="_blank">&rarr;</a>`);
    //             }
    //         }
    //     });
    // }
});
