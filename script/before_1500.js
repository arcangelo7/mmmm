var before_1500_doc = `
    <h2>Before 1500: incunabula</h2>
    <section>
        <h3>Base</h3>
        <h4>Margins</h4>
            <figure id="f01">
                <img src="img/golden_ration.png" alt="Golden ratio applied to the Gutemberg Bible">
                <figcaption>
                    <p class="num">Figure 1.</p>
                    <p>Application of the gold standard to the layout of the Gutenberg Bible.</p>
                </figcaption>
            </figure>
            <p>The Argentinian typographiv design artist, Raùl Mario <strong>Rosarivo</strong> (1903-1966), was the fist scholar to analyze Renaissance books with the helps of compass and rulers and concluded that Gutemberg applied the golden canon of page construction to his work.<a class="biblioRef" href="#b01">1</a></p>
            <p>The ratio of the <strong>width</strong> of the page (made up of the width of 9 tiles) to the width of the <strong>textbox</strong> (equal to the width of 6 tiles) is 9/6 = <strong>3/2</strong>. The same proportion is satisfied in the ratio of the <strong>length</strong> of the page to the length of the textbox (<a class="figureRef" href="#f01">Figure 1</a>).</p>
            <p>Moreover, the width of the <strong>inner margin</strong> of the page is made up of the width of <strong>1 tile</strong>, while the width of the <strong>outer</strong> margin is <strong>twice</strong> as large, for the reader's hands to hold the book open without covering any content. The same proportion is satisfied in the ratio of the <strong>lower</strong> margine to the upper one.</p>
            <!-- <pre>
                <code class="prettyprint">
    // The ratio of the width of the page to the width of the textbox is 3/2. 
    // 3:100vw = 2:66.6667vw
    margin-top: 11.1111vh; // calc((100vh - 66.6667vh) / 3)
    margin-bottom: 22.2222vh ; // column-width (66.6667vw) - 2 * margin (20rem) - 2* padding (2rem)
    margin-left: 11.1111vw; // calc((100vw - 66.6667vw) / 3)
    margin-right: 22.2222vw; // calc((100vw - 66.6667vw) / 3 * 2)
                </code>
            </pre> -->
            <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="dyMRgdZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Before_1500-margins">
                <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/dyMRgdZ">
                Before_1500-margins</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
            <h4>Columns</h4>
                <p>The overall layout is modeled on classical <strong>two-columns layout</strong> of manuscripts, elegantly balanced.</p>
                <p>The <strong>gap</strong> between one column and the other is equal to <strong>half of the left margin</strong>, that is <strong>5.5vw</strong>. Half of that space, that is 2.75vw, has been left between paragraphs, below and above a figure, above a title, above a table and as padding in the Cover and Summary sections.</p>
                <p>Dividing the text into columns introduces the problem of possible <strong>orphans</strong> and <strong>widows</strong>, that is, isolated portions of text respectively at the beginning and at the end of a column. Fortunately, CSS provides widows and orphans properties to specify the minimum number of words at the end and beginning of a column. The rest of the text arranges itself automatically to allow for the chosen result.</p>
                <!-- <pre>
    <code class="prettyprint">
    body.before_1500 p {
    column-count: 2;
    column-gap: 5.5vw; 
    widows: 3; orphans: 3;
    }
    @media only screen and (max-width: 56.25em) {
    body.before_1500 p {
        column-count: 1; 
    } 
    }
    </code>
            </pre>  -->
            <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="oNxwado" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Before_1500-columns">
                <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/oNxwado">
                Before_1500-columns</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        <h4>Background image</h4>
            <p>To replicate the effect of the <strong>ancient paper</strong>, an entirely <strong>CSS solution</strong> was preferred. A background image, in fact, would have had a greater impact on performance, since for large screens it would have been necessary to use very large and high-definition images.</p>
            <p>For this purpose, a <strong>linear gradient</strong> from left to right with six intervals was used, the values of which were obtained using an eyedropper on the Gutemberg Bible high definition images provided by the Bavarian State Library.</p>
            <!-- <pre>
                <code class="prettyprint">
    background-color: $color-white;
    background-image: linear-gradient(
    to right, 
    rgb(23,13,11),
    rgba(107,90,72,.4) 0.2%, 
    rgba(240,232,219,.4) 10%,
    rgba(240,232,219,.4) 90%,
    rgba(107,90,72,.4) 99.8%,
    rgb(23,13,11) 100%);
                </code>
            </pre> -->
            <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="oNxwayo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Before_1500-backgroundImage">
                <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/oNxwayo">
                Before_1500-backgroundImage</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        <h4>Scrollbar and selection</h4>
            <p>To match every single element of the page to the historical theme, the scrollbar and the selection have also been customized.</p>
            <p>For the scrollbar, the image of the <strong>move type</strong> of the letter i was used, because moving metaphorically recalls the possibility of moving and reusing characters thanks to the technique introduced by Gutemberg.</p>
            <p>For the selection, the <strong>blue color</strong> of the <strong>dropcaps</strong> contained in an edition of the Gutemberg Bible kept at the Bavarian State Library was used (<a class="figureRef" href="#f02">Figure 2</a>). Instead, the text takes on the color of the background.</p>
            <!-- <pre>
                <code class="prettyprint">
    body.before_1500 ::-moz-selection {
    background-color: #1c4d6d;
    color: #f0e8db; 
    }
    body.before_1500 ::selection {
    background-color: #1c4d6d;
    color: #f0e8db; 
    }
    body.before_1500::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 1rem rgba(0, 0, 0, 0.3);
    background-color: #f0e8db; 
    }
    body.before_1500::-webkit-scrollbar {
    width: 2.5rem; 
    }
    body.before_1500::-webkit-scrollbar-thumb {
    background-image: url(img/move_type.jpg);
    background-size: auto;
    height: 8rem;
    border-top-left-radius: 15%;
    border-top-right-radius: 15%;
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%; 
    }
                </code>
            </pre> -->
            <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="BaKZqPM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Before_1500-scrollbarAndSelection">
                <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/BaKZqPM">
                Before_1500-scrollbarAndSelection</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
    </section>
    <section>
        <h3>Typography</h3>
            <h4>Font</h4>
                <p>The Gutenberg Bible is printed in the <strong>blackletter</strong> type styles that would become known as Textualis (Textura) and <strong>Schwabacher</strong>.<a class="biblioRef" href="#b02">2</a></p>
                <p>This specific font has therefore been adopted for the theme, found via <a href="https://www.1001fonts.com/alte-schwabacher-font.html" title="Link to the Schwabacher font source" target="_blank">https://www.1001fonts.com/alte-schwabacher-font.html</a>.<a class="biblioRef" href="#b03">3</a></p>
    <pre>
    <code class="prettyprint">
    @font-face {
    font-family: 'schwabacher';
    src: url('fonts/alteschwabacher-webfont.woff2') format('woff2'),
            url('fonts/alteschwabacher-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    </code>
    </pre>
            <h4>Font-size & color</h4>
                <p>The font size was a crucial aspect in making the theme. In fact, the size of all the other elements depends on it, through the unit of measurement "<strong>rem</strong>". This also made <strong>responsiveness easier</strong>, as it was enough to decrease the font to scale the entire layout.</p>
                <p>More specifically, for <strong>large screens</strong> (min-width: 1200px) a <strong>font-size of 33px</strong> was used. The number was chosen for its <strong>symbolic value</strong>: 33 is the number of Christ's years, Jesus performed 33 miracles, 33 litanies of the angels, Dante's 33 cantos in Purgatory and 33 in Paradis and the lunar-moon cycle, when the sun and moon align, repeats every 33 years.</p>
                <p>On <strong>tablets in landscape mode</strong> (max-width: 1200px) the font, and consequently everything else, is reduced by 56.25%. This is to make sure that a rem is equal to <strong>9px</strong>, another symbolic number: 9/16 is in fact equal to <strong>56.25%</strong>. Finally, on <strong>tablets in portrait mode</strong> (max-width: 900px) the font is reduced to <strong>50%</strong>.</p>
                <p>Finally, a <strong>dark brown</strong> was chosen for the color, sampled from an edition of the Gutemberg Bible preserved in the Bavarian State Library.</p>
    <!-- <pre>
    <code class="prettyprint">
    html {
    font-size: 62.5%; 
    }
    @media only screen and (max-width: 75em) {
    html {
        font-size: 56.25%; 
    } 
    }
    @media only screen and (max-width: 56.25em) {
    html {
        font-size: 50%; 
    } 
    }
    body.before_1500 {
    font-family: "schwabacher";
    font-size: 3.3rem; 
    color: #3f3529;
    }
    </code>
    </pre> -->
                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="YzqQJBv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Before_1500-font">
                    <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/YzqQJBv">
                    Before_1500-font</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
            <h4>Justification</h4>
                <p>After the invention of the printing press, the first printed page layout were <strong>modeled</strong> on the <strong>manuscript</strong> layouts. But over time one major difference was introduced - <strong>justified setting</strong>. Moreover, there is a greater use of <strong>white space</strong>, they were no longer as dark and dense as the medieval illuminated manuscripts. Some of this can be attributable to the advance of paper manufacturing technologies which created whiter and lighter papers.</p>
                <p>Furthermore, in incunabula it was a frequent practice to go to head by breaking the word, in order to keep the text justified. This wrapping could happen either through hyphenation or without.<a class="biblioRef" href="#b04">4</a> For our theme, we always preferred to use the solution with a hyphen, for greater readability. It should be noted, however, that the <code class="prettyprint">hyphens: auto</code> rule does not currently work on Chrome, Edge and Opera desktop, but only on Android and iOS. Instead it works normally on all other browsers.<a class="biblioRef" href="#b05">5</a> Anyway, hyphenation is mostly useful on mobile devices, as smaller screens are more prone to breaking words.</p>
    <pre>
    <code class="prettyprint">
    body.before_1500 p {
    text-align: justify;
    word-wrap: break-word;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto; 
    }
    </code>
    </pre>
            <h4>Drop caps</h4>
                <figure id="f02">
                    <img src="img/gutemberg_bible.png" alt="Gutemberg Bible">
                    <figcaption>
                        <p class="num">Figure 2.</p>
                        <p>An exemplar of Gutemberg's Bible in the Bavarian State Library. You can see the alternation of the initials and how much space they take up.</p>
                    </figcaption> 
                </figure>
                <p>The drop caps were also used in incunabula, modeled on manuscripts. However, while in the manuscripts they was always drawn by illuminators, in printed books two cases could occur: either pre-packaged movable types were used or an empty space was left to be filled later by hand by an illuminator.<a class="biblioRef" href="#b06">6</a></p>
                <p>In the case of the Gutemberg Bible kept at the Bavarian State Library, which was taken as an example, the second case occurred and the <strong>drop caps</strong> are <strong>hand drawn</strong>. In particular, the <strong>first paragraph</strong> of a section has a <strong>historiated drop cap</strong>, while the <strong>following paragraphs</strong> simply have a larger font <strong>alternating red and blue</strong> (<a class="figureRef" href="#f02">Figure 2</a>).</p>
                <p>More specifically, the dropcap <strong>protrudes slightly out</strong> of the column, occupies <strong>two lines</strong> and has very <strong>little margin</strong> both at the top and on the right. Finally, the historiated dropcap occupies <strong>six lines</strong>, while the simple one <strong>two</strong>.</p>
                <p>To obtain the historiated dropcap a different font was used, characterized by a <strong>classical floral decoration</strong>, called <strong>Camelot</strong> and found through the <a href="https://www.1001fonts.com/camelotcaps-font.html" title="Link to the Camelot font source" target="_blank">following source.</a><a class="biblioRef" href="#b07">7</a> The style was inspired by the dropcaps used in the <em>Cibaldone incunabulum, ovvero opera utilissima a conservarsi sano</em> by B. Farfengus, 1493 (<a class="figureRef" href="#f03">Figure 3</a>).</p>
                <!-- <pre>
    <code class="prettyprint">
    body.before_1500 > section:not(#references) > p:nth-child(odd)::first-letter,
    body.before_1500 .biblioItem:nth-child(odd) .biblioMarker {
    color: #a8432f;
    font-family: "schwabacher";
    font-size: 9rem;
    line-height: .85;
    margin-left: -.3rem;
    float: left; 
    }
    body.before_1500 > section:not(#references) > p:nth-child(even)::first-letter,
    body.before_1500 .biblioItem:nth-child(even) .biblioMarker {
    color: #1c4d6d;
    font-family: "schwabacher";
    font-size: 9rem;
    line-height: .85;
    margin-left: -.3rem;
    float: left; 
    }
    body.before_1500 > section:not(#references) > p:first-of-type::first-letter {
    color: #1c4d6d;
    font-family: "camelot";
    font-size: 25rem;
    line-height: .9;
    margin-left: -.3rem;
    float: left; 
    }
    </code>
                </pre>    -->
                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="qBZjQZY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Before_1500-dropcaps">
                    <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/qBZjQZY">
                    Before_1500-dropcaps</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
        <h4>Links</h4> 
                <p>As for the links, the two main colors of the theme were used, namely a blue for <code class="prettyprint">a:link</code> and <code class="prettyprint">a:visited</code> and a red for <code class="prettyprint">a:hover</code> and <code class="prettyprint"></code>a:active</code>. Both colors were sampled from the aforementioned Gutemberg edition of the Bible.</p>
                <pre>
    <code class="prettyprint">
    & a:link, 
    & a:visited {
        color: #1c4d6d;
    }

    & a:hover, 
    & a:active {
        color: #a8432f;
    }
    </code>
                </pre> 
        <h4>Headers</h4>
            <p>As for the color of the headers, the copy of Gutemberg's Bible in the Bavarian State Library was used as a reference. In fact, it is possible to view a high definition digitization at the site <a href="https://www.wdl.org/en/item/4102/view/1/1/" title="Gutemberg Bible viewer" target="_blank">https://www.wdl.org/en/item/4102/view/1/1/</a>.<a class="biblioRef" href="#b08">8</a></p>
            <p>As in Gutemberg's Bible, <strong>no space</strong> was left between a title and the <strong>lower paragraph</strong>. However, we have chosen not to respect this rule for paragraphs, for greater readability.</p>
    </section>
    <section>

    </section>
    <section>
        <h3>Components</h3>
            <h4>Figures</h4>
                <figure id="f03">
                    <img src="img/cibaldone.jpg" alt="Recto of first leaf in EPB Incunabula 3.b.24: Cibaldone ovvero opera utilissima a conservarsi sano (Brescia: B. Farfengus, [1493]). Wellcome Images L0016339.">
                    <figcaption>
                        <p class="num">Figure 3.</p>
                        <p>Recto of first leaf in EPB Incunabula 3.b.24: Cibaldone ovvero opera utilissima a conservarsi sano (Brescia: B. Farfengus, [1493]). Wellcome Images L0016339.</p>
                    </figcaption> 
                </figure>
                <p>The images, enclosed within the figure tag, have been decorated with a <strong>border image</strong> with a medieval taste. The starting point for this solution came from <strong>Cibaldone ovvero opera utilissima a conservarsi sano</strong> by B. Farfengus, 1493 (<a class="figureRef" href="#f03">Figure 3</a>).<a class="biblioRef" href="#b09">9</a> A <strong>sepia filter</strong> was also applied, to give them an <strong>antique look</strong>.</p>
                <p>A <strong>free for commercial use</strong> and <strong>no attribution</strong> required <strong>vector</strong> was chosen as the edge for large screens, available at the <a href="https://pixabay.com/vectors/picture-frame-mirror-celtic-empty-29676/" title="Link to the large screen border image" target="_blank">following address</a>.<a class="biblioRef" href="#b10">10</a> As for screens smaller than 900px (tablet in portrait mode), a <strong>thinner</strong> frame was chosen, which recalled the floral motif in a <strong>stylized</strong> way. It was found <a href="https://www.pinclipart.com/maxpin/biTow/" title="Link to the medium screen border image" target="_blank">here</a>.<a class="biblioRef" href="#b11">11</a></p>
                <p>On <strong>large screens</strong> (1200 px) the image and caption are arranged on a <strong>single row</strong>, respecting the margin of the text columns and positioning themselves in the center of the available space. On <strong>medium</strong> and <strong>small screens</strong>, on the other hand, they are arranged in a <strong>column</strong>.</p>
                <p>Regarding the <strong>image width</strong>, in case of <strong>horizontal arrangement</strong> it is equal to the column width (30.35vw) minus the border thickness (10 rem) minus the padding (1 rem), to ensure that it <strong>occupies</strong> exactly the space of <strong>one column</strong>. In case of <strong>vertical arrangement</strong>, on the other hand, its size is equal to the width of the entire textual portion (66.6667vw) minus the left and right edges (20rem up to 1200px, 2rem below) minus the left and right padding (2rem), for the same reasons.</p>
                <p>Finally, the <strong>caption</strong> is organized on a <strong>single textual column</strong> and has a margin with respect to the image equal to the gap between the textual columns (5.5vw) in case of vertical arrangement, equal to half (2.75vw) in case of vertical arrangement, that is the same margin present between the paragraphs.</p>
                <!-- <pre>
                    <code class="prettyprint">
    body.before_1500 figure {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-bottom: 2.75vw;
    margin-top: 2.75vw;
    border-style: solid;
    border-width: 10rem;
    border-image-source: url(img/medieval-frame.svg);
    border-image-slice: 100;
    border-image-outset: 1rem;
    border-image-repeat: repeat; 
    }
    @media only screen and (max-width: 75em) {
    body.before_1500 figure {
        flex-direction: column; 
    } 
    }
    @media only screen and (max-width: 56.25em) {
    body.before_1500 figure {
        border-style: solid;
        border-width: 1rem;
        border-image-source: url(img/border-image.svg);
        border-image-slice: 10;
        border-image-repeat: repeat;
        margin-bottom: 5.5vw; 
    } 
    }
    body.before_1500 figure img {
    width: calc(30.35vw - 11rem);
    -webkit-filter: sepia(50%);
    filter: sepia(50%); 
    }
    @media only screen and (max-width: 75em) {
    body.before_1500 figure img {
        width: calc(66.6667vw - 22rem);
        margin-bottom: 2.75vw; 
    } 
    }
    @media only screen and (max-width: 56.25em) {
    body.before_1500 figure img {
        width: calc(66.6667vw - 4rem); 
    } 
    }
    body.before_1500 figure figcaption p {
    -moz-column-count: 1;
    column-count: 1;
    margin-left: 5.5vw; 
    }
    @media only screen and (max-width: 75em) {
    body.before_1500 figure figcaption p {
        margin-left: 0; 
    } 
    }
                    </code>
                </pre> -->
                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="ExKXOWQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Before_1500-figures">
                    <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/ExKXOWQ">
                    Before_1500-figures</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
            <h4>Tables</h4>
                <p>The table was also decorated using <strong>border images</strong>. The <strong>caption</strong> has been separated from the previous text using the same thick border that surrounds the images, while the stylized version has been used for the table. The situation changes for <strong>screens smaller</strong> than <strong>900px</strong>: the caption border becomes stylized and the table border solid.</p>
                <p>The cells' edges, although very decorative and in harmony with a late medieval style, make reading heavy and difficult. For this reason, a <strong>hover effect</strong> has been implemented, which <strong>highlights the row</strong> with the same blue color mentioned above, while the text takes the background color.</p>
                <p>For <strong>small screens</strong>, that is less than 600 px in width, the table becomes <strong>35% smaller</strong>, to allow easy viewing and aligned with the text column even on the display of a small iPhone 5.</p>
                <!-- <pre>
                    <code class="prettyprint">
    body.before_1500 table {
    font-size: inherit;
    width: 64.6667vw;
    margin: 0 auto; 
    }
    @media only screen and (max-width: 37.5em) {
    body.before_1500 table {
        font-size: 35%; 
    } 
    }
    body.before_1500 table, body.before_1500 th, body.before_1500 td {
    border: 1rem solid transparent;
    border-image-source: url(img/border-image.svg);
    border-image-slice: 10;
    border-image-repeat: repeat;
    text-align: center;
    padding: 1rem; 
    }
    @media only screen and (max-width: 56.25em) {
    body.before_1500 table, body.before_1500 th, body.before_1500 td {
        border: 1px solid black;
        border-image-source: none;
        border-collapse: collapse; 
    } 
    }
    body.before_1500 table tr:hover {
    background-color: #1c4d6d;
    color: #f0e8db; 
    }
    body.before_1500 table caption {
    border-top-style: solid;
    border-top-width: 15rem;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    border-image-source: url(img/medieval-frame.svg);
    border-image-slice: 150;
    border-image-repeat: repeat;
    margin-top: 2.75vw;
    padding: 1rem; 
    }
    @media only screen and (max-width: 56.25em) {
    body.before_1500 table caption {
        border-top-style: solid;
        border-top-width: 1rem;
        border-bottom: 0;
        border-left: 0;
        border-right: 0;
        border-image-source: url(img/border-image.svg);
        border-image-slice: 10;
        border-image-repeat: repeat; 
    } 
    }
    body.before_1500 table caption p {
    -moz-column-count: 1;
    column-count: 1; 
    }
                    </code>
                </pre> -->
                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="ZEWymJJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Before_1500-tables">
                    <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/ZEWymJJ">
                    Before_1500-tables</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
                <h4>Bibliographic references</h4>
                    <p>The bibliographic references have been highlighted using the same style as Wikipedia, as it is known and familiar, i.e. the number as a superscript between square brackets.</p>
                    <p>In case of multiple references, the intermediate separators have been eliminated, as they are replaced by square brackets.</p>
                    <!-- <pre>
                        <code class="prettyprint">
    //CSS
    .biblioRef {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    top: -.5em;

    &::before {
        content: "[";
    }

    &::after {
        content: "]";
    }
    }

    //JS
    $(function(){
    $("p").each(function(index){
        var sepBetweenRef = new RegExp("&lt;/a>.{1}&lt;a")
        if($(this).html().match(sepBetweenRef)){
            var found = $(this).html().match(sepBetweenRef)[0];
            document.body.innerHTML = document.body.innerHTML.replace(found, "&lt;/a>&lt;a");
        }
    })
    });
                    </code>
                </pre> -->
                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="vYGZQeM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Before_1500-biblioRef">
                    <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/vYGZQeM">
                    Before_1500-biblioRef</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
            <h4>Metadata viewer</h4>
                <p>The metadata viewer has been designed to be simultaneously <strong>recognizable</strong> throughout the site and <strong>theme-specific</strong>. A crucial aspect is in fact its recognisability regardless of the chosen theme.</p>
                <p>To achieve this, a <strong>popup menu</strong> has been designed that can be activated via a widget. Its colors and margins change depending on the theme, but everything else remains the same.</p>
                <p>The <strong>menu</strong> consists of <strong>four sections</strong>, which can be activated through <strong>collapsible tabs</strong>: the table of contents, the index of names, the index of places and the index of dates.</p>
                <p>The widget is positioned in the same spot on each device: bottom right at 2.75vw away from the edges, the same margin found for many other elements, such as paragraphs. This way the user is not disoriented and the widget remains more accessible for the thumb for one-handed use on mobile devices.</p>
                <p>The widget integrates seamlessly into the theme using its colors, which change depending on whether it is active or not. Also, to make it more like a virtual button, on hover it raises slightly and the background expands and then vanishes. In this way, the idea is conveyed that by pressing it the background expands further, to become the actual menu.</p>
                <p>The menu is 5.5vw away from the text, the same margin between one section and another. It is 22vw wide, equal to the right margin of the text in golden proportion, minus the margin between the menu itself and the text. On tablets and smartphones it is instead as wide as the width of the device, respecting a margin of 2.75vw from the side and bottom edges.</p>
                <p>In the various tabs, the metadata are arranged in a list, respecting the margins of 2.75vw already encountered, as well as the buttons to sort them.</p>
                <p class="codepen" data-height="818" data-theme-id="dark" data-default-tab="js,result" data-user="arcangelo7" data-slug-hash="zYqWYQv" style="height: 818px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Before_1500-metadata-viewer">
                    <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/zYqWYQv">
                    Before_1500-metadata-viewer</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
    </section>
    <section>
        <h3>Sections</h3>
            <h4>Navigation</h4>
                <p>As a 1450-style navigation bar, something was sought that served the same function at that time. The choice fell on a <strong>bookmark</strong>, the purpose of which is precisely to orient oneself within a work.</p>
                <!-- <pre>
                    <code class="prettyprint">
    &.before_1500 {
    .nav {
        display: flex;
        margin-bottom: 11vw;

        @include respond(tab-port) {
            margin-bottom: 0;
        }
        
        &__bar {
            list-style: none;
            display: flex;
            width: 100%;
            justify-content: space-between;

            @include respond(tab-port) {
                // overflow: hidden;
                position: fixed;
                top: 11.1111vh;
                right: 2rem;
                flex-direction: column;
                align-items: flex-end;
            }
        }

        &__item {
            text-align: center;
            flex: 1;
            padding: 3.3rem 1.65rem;
            position: relative;
            border-top: .33rem solid $color-red;

            @include respond(tab-port) {
                font-size: 50%;
                padding: 1.65rem 0.825rem;
                border-top: none;
                border-right: .33rem solid $color-red;
            }

            a:link, 
            a:visited {
                text-decoration: none;
                text-transform: uppercase;
                color: $color-black;
            } 

            a:hover, 
            a:active {
                color: $color-blue;
            }
            
            &:not(:last-child) {
                margin-right: 3.3rem;

                @include respond(tab-port) {
                    margin-right: 0;
                    margin-bottom: 3.3rem;
                }
            }

            &--active {
                background-color: $color-red;

                &::before, 
                &::after {
                    content: "";
                    position: absolute;
                    border-top: 9.9rem solid $color-red;
                    bottom: -9.9rem;

                    @include respond(tab-port) {
                        border-top: none;
                        border-right: 3.3rem solid $color-red;
                        bottom: initial;
                        left: -3rem;
                    }
                }

                &::before {
                    left: 0;
                    border-right: 9.9rem solid transparent;

                    @include respond(tab-port) {
                        left: -3rem;
                        top: 0;
                        border-right: 3.3rem solid $color-red;
                        border-bottom: 3.3rem solid transparent;
                    }
                }

                &::after {
                    right: 0;
                    border-left: 9.9rem solid transparent;

                    @include respond(tab-port) {
                        right: initial;
                        bottom: 0;
                        border-left: none;
                        border-top: 3.3rem solid transparent;
                    }
                }
            }
        }
    }
    }
                    </code>
                </pre> -->
                <p class="codepen" data-height="800" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="rNewQdp" style="height: 800px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Before_1500-navigation">
                    <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/rNewQdp">
                    Before_1500-navigation</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
            <h4>Cover and Summary</h4>
                <p>It was decided to isolate the first two sections of the article, namely the Cover and the Summary, through the same vector border image used for the images, which becomes the stylized version on screens with a width of less than 900px.</p>
                <p>The <strong>authors</strong> of the article are also surrounded by the stylized border image. A margin equal to half the right margin of the text (5.5vw) separates them from the rest of the content.</p>
                <p>The <strong>labels</strong> on the Cover are highlighted by the <strong>blue color</strong> used for the dropcaps and have a <strong>font-weight</strong> equal to that of a first level title (700).</p>
                <p>To <strong>avoid</strong> the bad effect of <strong>rivers</strong>, it was decided not to justify the text of the Cover, but to <strong>center</strong> it. Many paragraphs are in fact very short, since they consist of short information such as the email or the date of publication and the justification would have produced unsightly white spaces between the lines.</p>
                <p>Finally, to <strong>avoid orphans</strong>, <strong>flyspecks</strong> and <strong>widows</strong>, both the text of the Cover and that of the Summary have been arranged in a <strong>single column</strong> and not in two like the rest of the article.</p>
                <!-- <pre>
                    <code class="prettyprint">
    body.before_1500 #Cover .byline {
    border-style: solid;
    border-width: 1rem;
    border-image-source: url(img/border-image.svg);
    border-image-slice: 10;
    border-image-repeat: repeat;
    margin: 5.5vw 0; 
    }
    body.before_1500 #Cover .label {
    color: #1c4d6d;
    font-weight: 700; 
    }
    body.before_1500 #Cover p {
    text-align: center; 
    }
    body.before_1500 #Cover,
    body.before_1500 #Summary {
    padding: 2.75vw;
    margin-bottom: 5.5vw;
    border-style: solid;
    border-width: 10rem;
    border-image-source: url(img/medieval-frame.svg);
    border-image-slice: 100;
    border-image-outset: 1rem;
    border-image-repeat: repeat; 
    }
    @media only screen and (max-width: 56.25em) {
    body.before_1500 #Cover,
        body.before_1500 #Summary {
            border-style: solid;
            border-width: 1rem;
            border-image-source: url(img/border-image.svg);
            border-image-slice: 10;
            border-image-repeat: repeat; 
    } 
    }
    body.before_1500 #Cover p,
    body.before_1500 #Summary p {
    -moz-column-count: 1;
    column-count: 1; 
    }
                    </code>
                </pre> -->
                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="yLOXQjX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Before_1500-cover&amp;amp;summary">
                    <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/yLOXQjX">
                    Before_1500-cover&amp;summary</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
    </section>
    <section id="References">
        <h2>References</h2>
            <p class="biblioItem" id="b01"><span class="biblioMarker">1. </span>Novin, Guity, <em>A History of Graphic Design, Chapter 58: History of Layout Design and Modern Newspaper & Magazins</em> <a href="http://guity-novin.blogspot.com/2012/04/modern-newspaper-magazine-layouts.html" title="Link to the article by Guity Novin" target="_blank">http://guity-novin.blogspot.com/2012/04/modern-newspaper-magazine-layouts.html</a>.</p>
            <p class="biblioItem" id="b02"><span class="biblioMarker">2. </span><em>Gutenberg Bible</em>, Wikipedia article <a href="https://en.wikipedia.org/wiki/Gutenberg_Bible" title="Link to the Gutemberg Bible Wikipedia article" target="_blank">https://en.wikipedia.org/wiki/Gutenberg_Bible</a>.</p>
            <p class="biblioItem" id="b03"><span class="biblioMarker">3. </span>Alte Schwabacher font family <a href="https://www.1001fonts.com/alte-schwabacher-font.html" title="Link to the Schwabacher font source" target="_blank">https://www.1001fonts.com/alte-schwabacher-font.html</a>.</p>
            <p class="biblioItem" id="b04"><span class="biblioMarker">4. </span>Jeffrey A. Rydberg-Cox (01/03/2009), <em>Changing the Center of Gravity: Transforming Classical Studies Through Cyberinfrastructure</em>; Volume 3 Number 1; University of Missouri-Kansas City <a href="http://www.digitalhumanities.org/dhq/vol/3/1/000027/000027.html" title="Link to the article about conversion of incunabula in digital form" target="blank">http://www.digitalhumanities.org/dhq/vol/3/1/000027/000027.html</a></p>
            <p class="biblioItem" id="b05"><span class="biblioMarker">5. </span>Can I use, hyphen <a href="https://caniuse.com/#search=hyphen" title="Link to the Can I use page about hyphen rule" target="blank">https://caniuse.com/#search=hyphen</a></p>
            <p class="biblioItem" id="b06"><span class="biblioMarker">6. </span>Franz, Laura (04/04/2012), <em>Drop Caps: Historical Use And Current Best Practices With CSS</em> <a href="https://www.smashingmagazine.com/2012/04/drop-caps-historical-use-and-current-best-practices/" title="Link to the article about drop caps for the web" target="blank">https://www.smashingmagazine.com/2012/04/drop-caps-historical-use-and-current-best-practices/</a></p>
            <p class="biblioItem" id="b07"><span class="biblioMarker">7. </span>Camelot font family <a href="https://www.1001fonts.com/camelotcaps-font.html" title="Link to the Camelot font source" target="_blank">https://www.1001fonts.com/camelotcaps-font.html</a>.</p>
            <p class="biblioItem" id="b08"><span class="biblioMarker">8. </span>Gutemberg Bible viewer <a href="https://www.wdl.org/en/item/4102/view/1/1/" title="Gutemberg Bible viewer" target="_blank">https://www.wdl.org/en/item/4102/view/1/1/</a>.</p>
            <p class="biblioItem" id="b09"><span class="biblioMarker">9. </span><em>Incunabula and medicine: a report</em> (12/09/2016), by guest contributor | early medicine, events and visits <a href="http://blog.wellcomelibrary.org/2016/09/incunabula-and-medicine-a-report/" title="Link to the article about Incunabula and medicine: a report" target="_blank">http://blog.wellcomelibrary.org/2016/09/incunabula-and-medicine-a-report/</a>.</p>
            <p class="biblioItem" id="b10"><span class="biblioMarker">10. </span>Thick medieval frame with floral motifs <a href="https://pixabay.com/vectors/picture-frame-mirror-celtic-empty-29676/" title="Link to the big screen border image" target="_blank">https://pixabay.com/vectors/picture-frame-mirror-celtic-empty-29676/</a>.</p>
            <p class="biblioItem" id="b11"><span class="biblioMarker">11. </span>Medieval thin frame with stylized floral motifs <a href="https://www.pinclipart.com/maxpin/biTow/" title="Link to the medium screen border image" target="_blank">https://www.pinclipart.com/maxpin/biTow/</a>.</p>
    </section>
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
`;