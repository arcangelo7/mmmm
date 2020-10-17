$(function(){
    var cover = `
        <h1>Digital Humanities MMMM</h1>
        <div class="book">
            <span class="page turn">

            </span>
            <span class="page turn">
                <img src="img/slut.jpg" alt="Placeholder page" class="u-responsive">
            </span>
            <span class="page turn">
                <img src="img/2040_page.png" alt="2040 page" class="u-responsive">
            </span>
            <span class="page turn">
                <img src="img/late_20th_page.png" alt="Late 20th page" class="u-responsive">
            </span>
            <span class="page turn">
                <img src="img/medieval_page.jpg" alt="Medieval page" class="u-responsive">
            </span>
            <span class="page turn">
                <img src="img/bauhaus_page.jpg" alt="Bauhaus page" class="u-responsive">
            </span>
            <span class="page">
                <!-- <img src="img/slut.jpg" alt="Placeholder page" class="u-responsive"> -->
            </span>
            <span class="cover"></span>
            <span class="cover turn"></span>
        </div>
        <p>This is the Metadata Model for Modern Magazines, DH edition. In the multiple issues of this magazine,
            you will find articles about the field of Digital Humanities enriched with metadata.
        </p>
        <p>In order to navigate through the issues, use the button with the logo of a book. In the same sidebar,
        you can choose between four themes spanning centuries between the 1400s and the 2040s.</p>
        <p>To view and download the metadata, instead, use the widget with a label icon.</p>
        <div class="filler">

        </div>
    `
    var disclaimer = `
        <div style="column-span:all">
            <h1>Disclaimer</h1>
            <p>The purpose of this web site is to explore various types of typographic and layout
                style for text documents, as an end-of-course project for the "Information Modeling
                and Web technologies" course of the Master Degree in Digital Humanities and
                Digital Knowledge of the University of Bologna, under prof. Fabio Vitali.</p>
            <p>The documents contained in this web site have been selected for their length and
                complexity from <a href="http://www.digitalhumanities.org/dhq/" title="Digital Humanities Quarterly homepage" target="_blank">"Digital Humanities Quarterly"</a>. Their publication here is not intended to be an alternative or
                replace their original locations:</p>
            <ul>
                <li>Citation in Classical Studies: <a href="http://www.digitalhumanities.org/dhq/vol/3/1/000028/000028.html" title="Citation in Classical Studies article source" target="_blank">http://www.digitalhumanities.org/dhq/vol/3/1/000028/000028.html</a></li>
                <li>Computational Linguistics and Classical Lexicography: <a href="http://www.digitalhumanities.org/dhq/vol/3/1/000033/000033.html" title="Computational Linguistics and Classical Lexicography article source" target="_blank">http://www.digitalhumanities.org/dhq/vol/3/1/000033/000033.html</a></li>
                <li>Crowdsourcing Image Extraction and Annotation: Software Development and Case Study: <a href="http://www.digitalhumanities.org/dhq/vol/14/2/000469/000469.html" title="Crowdsourcing Image Extraction and Annotation: Software Development and Case Study article source" target="_blank">http://www.digitalhumanities.org/dhq/vol/14/2/000469/000469.html</a></li>
                <li>Digitizing Latin Incunabula: Challenges, Methods, and Possibilities: <a href="http://www.digitalhumanities.org/dhq/vol/3/1/000027/000027.html" title="Digitizing Latin Incunabula: Challenges, Methods, and Possibilities article source" target="_blank">http://www.digitalhumanities.org/dhq/vol/3/1/000027/000027.html</a></li>
                <li>Reconstruir histórias da conservação da natureza na Califórnia: 1850 – 2010: <a href="http://www.digitalhumanities.org/dhq/vol/14/2/000467/000467.html" title="Reconstruir histórias da conservação da natureza na Califórnia: 1850 – 2010 article source" target="_blank">http://www.digitalhumanities.org/dhq/vol/14/2/000467/000467.html</a></li>
                <li>Open Data in Cultural Heritage Institutions: Can We Be Better Than Data Brokers?: <a href="http://www.digitalhumanities.org/dhq/vol/14/2/000462/000462.html" title="Open Data in Cultural Heritage Institutions: Can We Be Better Than Data Brokers? article source" target="_blank">http://www.digitalhumanities.org/dhq/vol/14/2/000462/000462.html</a></li>
            </ul>
        </div>
        <div class="filler"></div>
    `;

    var about = `
        <h1>About</h1>

        <div class="row">
            <div class="card">
                <div class="card__side card__side--front">
                    <div class="card__picture card__picture--1">
                        &nbsp;
                    </div>
                    <h4 class="card__heading">
                        <span class="card__heading-span card__heading-span--1">Arcangelo Massari</span>
                    </h4>
                    <div class="card__details">
                        <p>Graduated in Humanities at Alma Mater Studiorum in Bologna, passionate about Literature and Computer Science, and especially interested in Computational Thinking and Web Development.</p>
                        <p>I dealt with the design of the theme inspired by the incunabula after 1550 and the futuristic theme set in an imaginary 2040.</p>
                    </div>
                </div>
                <div class="card__side card__side--back card__side--back-1">
                    <div class="card__cta">
                        <div class="card__mail-box">
                            <p class="card__mail-only">mail: arcangelo.massari@studio.unibo.it</p>
                        </div>
                        <button href="#" class="btn btn--color btn--mailtoArcangelo">Contact!</button>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__side card__side--front">
                    <div class="card__picture card__picture--2">
                        &nbsp;
                    </div>
                    <h4 class="card__heading">
                        <span class="card__heading-span card__heading-span--2">Nooshin Shahidzadeh</span>
                    </h4>
                    <div class="card__details">
                        <p>Nooshin has graduated in Software Engineering from the University of Tehran, but strives to
                        be a humanist. She is currently studying Digital Humanities and Digital Knowledge at the
                        University of Bologna. Nooshin was responsible for the themes from the 20th century.</p>
                    </div>
                </div>
                <div class="card__side card__side--back card__side--back-2">
                    <div class="card__cta">
                        <div class="card__mail-box">
                            <p class="card__mail-only">mail: noo.shahidzadehasadi@studio.unibo.it</p>
                        </div>
                        <button href="#" class="btn btn--color btn--mailtoNooshin">Contact!</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    $(document).on("click", ".nav__item a", function(){
        if ($(this).text().toLowerCase() == "mmmm"){
            $(".container__text").html(cover);
        } 
        else if ($(this).text().toLowerCase() == "disclaimer"){
            $(".container__text").html(disclaimer);
        } 
        else if ($(this).text().toLowerCase() == "about"){
            $(".container__text").html(about);
        }

        // Active link
        $(".nav__item").each(function(){
            $(this).removeClass("nav__item--active");
        });
        $(this).parent().addClass("nav__item--active");
    });

    // Prepare email
    $(document).on("click", ".card .btn", function(){
        var email;
        var subject = "MMMM"

        if ($(this).hasClass("btn--mailtoArcangelo")) {
            email = 'arcangelo.massari@studio.unibo.it';
        } else if ($(this).hasClass("btn--mailtoNooshin")) {
            email = 'noo.shahidzadehasadi@studio.unibo.it';
        }

        window.location = 'mailto:' + email + '?subject=' + subject;
    });
});



