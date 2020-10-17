$(function(){
    $("body").prepend(`
        <label for="selector-toggle" class="selector__button btn btn--color btn--animated-up">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 412.72 412.72" style="enable-background:new 0 0 412.72 412.72;" xml:space="preserve">
                <g>
                    <path class="selector__svg" d="M404.72,82.944c-0.027,0-0.054,0-0.08,0h0h-27.12v-9.28c0.146-3.673-2.23-6.974-5.76-8
                        c-18.828-4.934-38.216-7.408-57.68-7.36c-32,0-75.6,7.2-107.84,40c-32-33.12-75.92-40-107.84-40
                        c-19.464-0.048-38.852,2.426-57.68,7.36c-3.53,1.026-5.906,4.327-5.76,8v9.2H8c-4.418,0-8,3.582-8,8v255.52c0,4.418,3.582,8,8,8
                        c1.374-0.004,2.724-0.362,3.92-1.04c0.8-0.4,80.8-44.16,192.48-16h1.2h0.72c0.638,0.077,1.282,0.077,1.92,0
                        c112-28.4,192,15.28,192.48,16c2.475,1.429,5.525,1.429,8,0c2.46-1.42,3.983-4.039,4-6.88V90.944
                        C412.72,86.526,409.139,82.944,404.72,82.944z M16,333.664V98.944h19.12v200.64c-0.05,4.418,3.491,8.04,7.909,8.09
                        c0.432,0.005,0.864-0.025,1.291-0.09c16.55-2.527,33.259-3.864,50-4c23.19-0.402,46.283,3.086,68.32,10.32
                        C112.875,307.886,62.397,314.688,16,333.664z M94.32,287.664c-14.551,0.033-29.085,0.968-43.52,2.8V79.984
                        c15.576-3.47,31.482-5.241,47.44-5.28c29.92,0,71.2,6.88,99.84,39.2l0.24,199.28C181.68,302.304,149.2,287.664,94.32,287.664z
                        M214.32,113.904c28.64-32,69.92-39.2,99.84-39.2c15.957,0.047,31.863,1.817,47.44,5.28v210.48
                        c-14.354-1.849-28.808-2.811-43.28-2.88c-54.56,0-87.12,14.64-104,25.52V113.904z M396.64,333.664
                        c-46.496-19.028-97.09-25.831-146.96-19.76c22.141-7.26,45.344-10.749,68.64-10.32c16.846,0.094,33.663,1.404,50.32,3.92
                        c4.368,0.663,8.447-2.341,9.11-6.709c0.065-0.427,0.095-0.859,0.09-1.291V98.944h19.12L396.64,333.664z"/>
                </g>
            </svg>
        </label>
        <div class="selector">

            <input type="checkbox" class="selector__checkbox" id="selector-toggle">
            <div class="selector__background">&nbsp;</div>

            <nav class="selector__nav">
                <div class="selector__tabs">
                    <div class="selector__tab indexOfIssues">
                        <input type="checkbox" class="index__checkbox" id="indexOfIssues" checked>
                        <label class="selector__tab--label" for="indexOfIssues">Index of issues</label>
                        <div class="selector__tab--content">
                        <ul class="index__list"></ul>
                        </div>
                    </div>
                    <div class="selector__tab index indexOfArticles">
                        <input type="checkbox" class="index__checkbox" id="indexOfArticles" checked>
                        <label class="selector__tab--label" for="indexOfArticles">Index of articles</label>
                        <div class="selector__tab--content">
                            <ul class="index__list">
                                <div class="index__nextprevious">
                                    <a class="index__nextprevious--previous">&larr;</a>
                                    <a class="index__nextprevious--next">&rarr;</a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div class="selector__tab indexOfThemes">
                        <input type="checkbox" class="index__checkbox" id="indexOfThemes">
                        <label class="selector__tab--label" for="indexOfThemes">Index of themes</label>
                        <div class="selector__tab--content">
                            <ul class="index__list"></ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    `);

    // Visual effects
    function expandSelector(x) {
        if (!selectorActive && x.matches) {
            $(".selector").css("height", "0");
            $(".selector__nav").css("height", "0");
        } else if (selectorActive && x.matches){
            $(".selector").css("height", "30vh");
            $(".selector__nav").css("height", "30vh");
        } else if (!x.matches && $(".around_2040").length > 0) {
            $(".selector").css("height", "91vh");
            $(".selector__nav").css("height", "79vh");
        } else if (!x.matches && $(".before_1500").length > 0) {
            $(".selector").css("height", "100vh");
            $(".selector__nav").css("height", "100vh");
        } else if (!x.matches && $(".early_20th").length > 0) {
            $(".selector").css("height", "100vh");
            $(".selector__nav").css("height", "100vh");
        } else if (!x.matches && $(".late_20th").length > 0) {
            $(".selector").css("height", "100vh");
            $(".selector__nav").css("height", "100vh");
        } else {
            $(!x.matches && ".selector").css("height", "100vh");
            $(".selector__nav").css("height", "100vh");
        }
    }

    $(document).on("click", ".selector__button", function(){
        toggleColor("selector", selectorActive);
        hideWidget("selector", selectorActive);
        if(metadataActive){
            $(".metadata__button").trigger("click");
            metadataActive = false;
        }          
        selectorActive = !selectorActive;
    });

    x.addListener(expandSelector);

    // Height 0 when closed on mobile
    $(document).on("click", ".selector__button", function(){
        if (selectorActive && x.matches) {
            $(".selector").css("height", "30vh");
            $(".selector__nav").css("height", "30vh");
        } else if (!selectorActive && x.matches) {
            $(".selector").css("height", "0");
            $(".selector__nav").css("height", "0");
        }
    });

    // Populate index of themes
    var listOfThemes = ["before_1500", "around_2040", "early_20th", "late_20th"];
    $(listOfThemes).each(function(i, theme){
        var prettyTheme;
        switch (theme){
            case "before_1500":
                prettyTheme = "Before 1500"
                break;
            case "around_2040":
                prettyTheme = "Around 2040"
                break;
            case "early_20th":
                prettyTheme = "Early 20th"
                break;
            case "late_20th":
                prettyTheme = "Late 20th"
                break;
        }
        $(".indexOfThemes .index__list").append(`
            <li class="index__item">
                <a href="#" title="${theme}" class="themeSelector">${prettyTheme}</a>
                <a href="#" title="${prettyTheme}"><i class="fas fa-info-circle"></i></a>
            </li>
        `);
        // Add class active to active theme
        $(`.indexOfThemes a[title="${$('body').attr('class')}"]`).addClass("themeSelector--active");
    });

    $(document).on("click", ".fa-info-circle", function(){
        var documentation;
        switch ($(this).parent().attr("title")) {
            case "Before 1500":
                documentation = before_1500_doc;
                break;
            case "Around 2040":
                documentation = around_2040_doc;
                break;
            case "Early 20th":
                documentation = early_20th_doc;
                break;
            case "Late 20th":
                documentation = late_20th_doc;
                break;
        }
        $(".container__text").html(documentation);

        // Update active link
        $(".fa-info-circle").each(function(){
            $(this).removeClass("themeSelector--active");
        });
        $(this).addClass("themeSelector--active");
    });

    $(document).on("click", ".themeSelector", function(){
        $("body").removeClass();
        $("body").addClass($(this).attr("title"));

        // Update selector colors
        $(".selector__button").trigger("click");

        // One click to set right colors
        $(".metadata__button").trigger("click");
        // One click to close it
        $(".metadata__button").trigger("click");

        // Disable or enable around_2040 js
        if ($(".around_2040").length > 0) {
            manage2040();
        } else {
            remove2040();
        }

        // Change widget height only on desktop
        if ($(".around_2040").length > 0) {
            $(".metadata, .selector").css("height", "91vh");
        } else if (!x.matches) {
            $(".metadata, .selector").css("height", "100vh");
        }

        // Update active link
        $(".themeSelector").each(function(){
            $(this).removeClass("themeSelector--active");
            if ($(this).attr("title") == $("body").attr("class")){
                $(this).addClass("themeSelector--active");
            }
        });
    });

    $(document).on("click", ".index__nextprevious a", function(){
        // Update document
        var currentArticle = $(".selector__article--active").parent();

        if ($(this).hasClass("index__nextprevious--previous")) {
            var nextArticle = currentArticle.prev().not(".index__nextprevious");
            if ($(nextArticle).length == 0){
                nextArticle = currentArticle.siblings(":last");
            }    
        } else {
            var nextArticle = currentArticle.next();
            if ($(nextArticle).length == 0){
                nextArticle = currentArticle.parent().children(":nth-child(2)");
            }
        }

        nextArticle.find("a").trigger("click");
    });

    function saveAsFile(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    $(document).on("click", ".selector__docbook a", function(){
        var xml_url = $(".selector__article--active").attr("folder");
        var curArticleTitle = xml_url.split("/").pop().split(".")[0];
        console.log(curArticleTitle)
        var xsl_url = "./DocBook.xsl"
        // From TEI to DocBook
        $.when($.get(xml_url), $.get(xsl_url))
        .done(function(xml_doc, xsl_doc) {
            var xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xsl_doc[0]);
            resultDocument = xsltProcessor.transformToDocument(xml_doc[0]);
            var resultDocumentString = new XMLSerializer().serializeToString(resultDocument.documentElement);
            saveAsFile(`${curArticleTitle}.dbk`, resultDocumentString);
        });
    });
});
