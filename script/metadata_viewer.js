$(function(){
    $("body").prepend(`
        <div class="metadata">
            <input type="checkbox" class="metadata__checkbox" id="meta-toggle">

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

            <div class="metadata__background">&nbsp;</div>

            <nav class="metadata__nav">
                <div class="metadata__tabs">
                    <div class="metadata__tab">
                        <input type="checkbox" class="metadata__checkbox" id="tableOfContent" checked>
                        <label class="metadata__tab--label" for="tableOfContent">Table of content</label>
                        <div class="metadata__tab--content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                        </div>
                    </div>
                    <div class="metadata__tab index indexOfNames">
                        <input type="checkbox" class="metadata__checkbox" id="indexOfNames">
                        <label class="metadata__tab--label" for="indexOfNames">Index of names</label>
                        <div class="metadata__tab--content">
                            <div class="index__btn--container">
                                <button class="index__btn btn btn--color" id="indexOfNamesSort">Sort <span class='u-nowrap'>A-Z</span></button>
                                <button class="index__btn btn" id="indexOfNamesTextOrder" disabled>Text order</button>
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

    // Button effect
    function toggleColor() {
        if ($(".before_1500").length > 0){
            if (isActive) {
                $(".metadata__button").css("background-color", "#1c4d6d");
                $('.metadata__button').toggleClass('changed');
            } else {
                $(".metadata__button").css("background-color", "#a8432f");
                $('.metadata__button').toggleClass('changed');
            }
        } else if ($(".around_2040").length > 0){
            if (isActive) {
                $(".metadata__button").css("background-color", "#8af3ff");
                $('.metadata__button').toggleClass('changed');
            } else {
                $(".metadata__button").css("background-color", "#fae127");
                $('.metadata__button').toggleClass('changed');
            }
        }
    };

    function createList(classe, list) {
        $(`.${classe}`).each(function(i){
            var instanceNoSpecialCharacters = this.innerHTML.replace(/ |,|\./g,'');
            var instance = this.innerHTML;
            if (classe == "date") {
                $(this).replaceWith(`<a title="${instance}" data-text="${instance}" class="${classe}" id="${instanceNoSpecialCharacters}_${i}" href="#${instanceNoSpecialCharacters}_${i}--anchor">
                    <time datetime="${$(this).attr("datetime")}">${instance}</time>
                </a>
            `);
            $(`.${list} .index__list`).append(`
                <li class="index__item" data-date="${$(this).attr("datetime")}">
                    <a class='index__link' title='${instance}' data-text="${instance}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance}</a>
                    <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
                </li>
            `);
            } else {
                $(this).replaceWith(`<a title="${instance}" data-text="${instance}" class="${classe}" id="${instanceNoSpecialCharacters}_${i}" href="#${instanceNoSpecialCharacters}_${i}--anchor">${instance}</a>`);
                $(`.${list} .index__list`).append(`
                <li class="index__item">
                    <a class='index__link' title='${instance}' data-text="${instance}" id='${instanceNoSpecialCharacters}_${i}--index' href='#${instanceNoSpecialCharacters}_${i}'>${instance}</a>
                    <a class="anchor" id="${instanceNoSpecialCharacters}_${i}--anchor"></a>
                </li>
            `);
            }
        });
    }

    function prepareToBeSorted(items, list) {
        $(`.${list} li`).each(function(){
            items.push(this.innerHTML);
        });
    }

    function sortUnorderedList (ul, items, itemsToSort, sortDescending, textOrder) {
        if (textOrder) {
            ul.each(function(i){
                this.innerHTML = items[i];
            });
            return
        }
        itemsToSort.sort();
        if(sortDescending) {
            itemsToSort.reverse();
        }
        ul.each(function(i){
            this.innerHTML = itemsToSort[i];
        });
    }

    function handleSortButton(list, items, itemsToSort, desc) {
        if (desc){
            sortUnorderedList($(`.${list} li`), items, itemsToSort, desc, false);
            $(`#${list}Sort`).html("Sort <span class='u-nowrap'>A-Z</span>");
        } else {
            sortUnorderedList($(`.${list} li`), items, itemsToSort, desc, false);
            $(`#${list}Sort`).html("Sort <span class='u-nowrap'>Z-A</span>");
        }
        $(`#${list}TextOrder`).prop('disabled', false);
        $(`#${list}TextOrder`).addClass("btn--color");
    }

    function handleTextOrderButton(list, items, itemsToSort, desc) {
        sortUnorderedList($(`.${list} li`), items, itemsToSort, desc, true);
        $(`#${list}TextOrder`).prop('disabled', true);
        $(`#${list}TextOrder`).removeClass("btn--color");
        $(`#${list}Sort`).html("Sort <span class='u-nowrap'>A-Z</span>");
    }

    var isActive = false;
    $(".metadata__button").click(function(){
        toggleColor();
        isActive = !isActive;
    });

    // Index of names
    createList("person", "indexOfNames");

    var people = [];
    var peopleDesc = false;
    prepareToBeSorted(people, "indexOfNames") 
    peopleToSort = people.slice();
    
    $("#indexOfNamesSort").click(function(){
        handleSortButton("indexOfNames", people, peopleToSort, peopleDesc);
        peopleDesc = !peopleDesc;
    });

    $("#indexOfNamesTextOrder").click(function(){
        handleTextOrderButton("indexOfNames", people, peopleToSort, peopleDesc);
        peopleDesc = false;
    });

    // Index of places
    createList("place", "indexOfPlaces");

    var places = [];
    var placesDesc = false;
    prepareToBeSorted(places, "indexOfPlaces");
    placesToSort = places.slice();
    
    $("#indexOfPlacesSort").click(function(){
        handleSortButton("indexOfPlaces", places, placesToSort, placesDesc);
        placesDesc = !placesDesc;
    });

    $("#indexOfPlacesTextOrder").click(function(){
        handleTextOrderButton("indexOfPlaces", places, placesToSort, placesDesc);
        placesDesc = false;
    });

    // Index of dates
    $("time").each(function(i){
        $(this).replaceWith(`<time datetime="${$(this).attr("datetime")}" class="date"'>${this.innerHTML}</time>`);
    });
    createList("date", "indexOfDates");

    var dates = [];
    $(".indexOfDates li").each(function(){
        dates.push(this.outerHTML);
    });  
    var clockwise = true;
    
    $("#indexOfDatesSort").click(function(){
        if (clockwise) {
            $(".indexOfDates li").sort(function(a, b){
                return Date.parse($(b).attr("data-date")) - Date.parse($(a).attr("data-date"));
            }).each(function(){
                $(".indexOfDates ul").prepend(this);
            });
            $("#indexOfDatesSort").html("<img alt='anti-clockwise icon' src='img/anti-clockwise.svg'></img>")
        } else {
            $(".indexOfDates li").sort(function(a, b){
                return Date.parse($(a).attr("data-date")) - Date.parse($(b).attr("data-date"));
            }).each(function(){
                $(".indexOfDates ul").prepend(this);
            });
            $("#indexOfDatesSort").html("<img alt='clockwise icon' src='img/clockwise.svg'></img>")
        }
        $("#indexOfDatesTextOrder").prop("disabled", false);
        $("#indexOfDatesTextOrder").addClass("btn--color");
        clockwise = !clockwise;
    });

    $("#indexOfDatesTextOrder").click(function(){
        $(".indexOfDates li").each(function(i){
            this.outerHTML = dates[i];
        });
        $("#indexOfDatesTextOrder").prop("disabled", true);
        $("#indexOfDatesTextOrder").removeClass("btn--color");
        $("#indexOfDatesSort").html("<img alt='clockwise icon' src='img/clockwise.svg'></img>");
        clockwise = true;
    });

    // All indexes
    $(document).on("click", ".index__link", function(){
        var target =  $(`${$(this).attr("href")}`);

        if ($(".before_1500").length > 0) {
            target.effect("highlight", {color: "a8432f"}, 3000);
        } else if ($(".around_2040").length > 0) {            
            target.addClass('glitch');
            setTimeout(function() {
                target.removeClass('glitch');
            }, 4000);
        }
    });

    $(".person, .place, .date").on("click", function(){
        var target =  $(`${$(this).attr("href").replace("--anchor","--index")}`);
        var anchor = $(`${$(this).attr("href")}`);

        if (/person/i.test($(this)[0].outerHTML)) {
            $("#tableOfContent").prop('checked', false);
            $("#indexOfNames").prop('checked', true);
            $("#indexOfPlaces").prop('checked', false);
            $("#indexOfDates").prop('checked', false);
        } else if (/place/i.test($(this)[0].outerHTML)) {
            $("#tableOfContent").prop('checked', false);
            $("#indexOfNames").prop('checked', false);
            $("#indexOfPlaces").prop('checked', true);
            $("#indexOfDates").prop('checked', false);
        } else if (/date/i.test($(this)[0].outerHTML)) {
            $("#tableOfContent").prop('checked', false);
            $("#indexOfNames").prop('checked', false);
            $("#indexOfPlaces").prop('checked', false);
            $("#indexOfDates").prop('checked', true);
        }

        if (isActive == false) {
            $(".metadata__button").trigger("click");
            setTimeout(function() {
                anchor[0].scrollIntoView();
            }, 500);

        } 

        if ($(".before_1500").length > 0) {
            target.effect("highlight", {color: "a8432f"}, 3000);
        } else if ($(".around_2040").length > 0) {            
            target.addClass('glitch');
            setTimeout(function() {
                target.removeClass('glitch');
            }, 4000);
        }        
    });

    // On tablets and below
    // function compressText(x) {
    //     if (x.matches) { // If media query matches        
    //         $(".metadata").css("visibility", "hidden");
    //         $(".metadata__svg").css("visibility", "hidden");
    //     } else {
    //         $(".metadata").css("visibility", "visible");
    //         $(".metadata__svg").css("visibility", "visible");
    //     }
    // }
    
    // var x = window.matchMedia("(max-width: 56.25em)")
    // compressText(x) // Call listener function at run time
    // x.addListener(compressText) // Attach listener function on state changes
});