var around_2040_doc = `
    <h2>Around 2040</h2>
    <section>
        <h3>General idea and purpose</h3>
            <p>We imagined a future of <strong>sci-fi</strong> and <strong>cyberpunk</strong> themed publishing, inspired by a wide range of films, TV series and video games of this genre, such as <em>Blade Runner</em> (1982), <em>Tron Legacy</em> (2010), <em>Black Mirror</em> (2011-2019), <em>Deus Ex: Human Revolution</em> ( 2011) and <em>Deus Ex: Makind divided</em> (2016), <em>Detroit: Become Human</em> (2017) and <em>Altered Carbon</em> (2018-2020).</p>
            <p>Against a background of <strong>interconnected circuits</strong>, the foreground text is contained in a box that simulates a mobile device. As early as June 2020, in fact, 50.88% of all internet traffic passes through smartphones, followed in second place by the desktop (46.39%) and in third place by tablets (2.74%).<a class="biblioRef" href="#b01">1</a> It is therefore legitimate to foresee an increasingly <strong>mobile-first future</strong>, in which websites are developed first for mobile and then for desktop.</p>
            <p>The tones are the dark and gloomy ones of a cyberpunk megalopolis, but the dark theme also alludes to the increasingly massive presence of screens in people's lives. So, on the one hand it is a metaphor of the "<strong>black mirror</strong>", on the other it is a real <strong>dark mode</strong> in order not to tire the eyes oppressed by too many stresses.</p>
        <h3>Base</h3>
        <h4>Margins</h4>
            <p>The goal is to create a <strong>tablet-like surface</strong> in the center of the screen. The inspiration comes from the magazines featured in the <em>Detroit: Become Human</em> (2017) video game, which are completely <strong>borderless</strong> and almost <strong>immaterial</strong> tablets.</p> 
            <p>To position the textual portion in the center, <strong>multiples of 24</strong> were used, since the theme must reflect the design of a hypothetical 2040. The text was therefore assigned a width of 72vw (24 * 3) and a top and bottom margin of 24vh. In addition, there is a <strong>24px margin</strong> between the headings and <strong>paragraphs</strong>.</p>
            <p>24 is a symbolic number for other reasons as well. The post-capitalist future will in fact be increasingly materialistic, a world where time is money: <strong>24 hours</strong> are in fact the day and pure gold is <strong>24 carat</strong>.</p>
            <!-- <pre>
                <code class="prettyprint">
    body.around_2040 {
    width: 72vw;
    margin: 24vh auto; 

    p, h1, h2, h3, h4, h5, h6 {
    margin: 2.4rem 0;
    }
    }
                </code>
            </pre> -->
            <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="jOqLrNE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Around_2020-margins">
                <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/jOqLrNE">
                Around_2020-margins</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        <h4>Background</h4>
            <figure id="f01">
                <img src="img/blade_runner_poster.png" alt="Blade Runner poster">
                <p class="num">Figure 1.</p>
                <p>City streets of LA, as pictured in the 1982 film Blade Runner.</p>
            </figure>
            <p>For the background color, a dark and opaque shade of blue was selected that recalled the <strong>sunless sky</strong> in the 1982 film <strong>Blade Runner</strong>.</p>
            <p>From a poster (<a class="figureRef" href="#f01">Figure 1</a>), the relevant color was then sampled and renamed Blade Runner fog.</p>
            <p>On this dark blue stands an <strong>intertwining</strong> of <strong>luminous circuits</strong>, an evident symbol of an increasingly <strong>technological</strong> and <strong>interconnected future</strong>.</p>
            <p>The design is also a reference to the typical iconography of the <strong>Tron Legacy</strong> film, with its <strong>streets</strong> and its <strong>luminous suits</strong>. The color was in fact sampled from the <a class="figureRef" href="#f02">following image</a>.</p>
            <p>To create the background and animation, we opted for an already animated <strong>vector</strong> image, which was not created from scratch but remodeled starting from a CodePen project by Noora Pirttilahti.<a class="biblioRef" href="#b02">2</a> Instead of the original Javascript function, the resulting svg image was taken and the style was integrated and modified directly within the file.</p>
            <figure id="f02">
                <img src="img/tron_legacy.jpg" alt="Tron Legacy poster">
                <p class="num">Figure 2.</p>
                <p>Sam and the isomorphic algorithm (ISO) during an arena battle.</p>
            </figure>
            <!-- <pre>    
                <code class="prettyprint">
    body.around_2040 {
    background-color: #02161a; 
    background-image: url(img/circuit.svg);
    background-position: center;
    background-size: 144%; // 24 * 11
    background-repeat: no-repeat;
    }

    // Inside the .svg file
    .line {
    animation: line-anim 1s ease-in-out infinite alternate;
    stroke: #8af3ff;
    stroke-width: .024rem;
    }

    svg {
    stroke-linejoin: round;
    stroke-linecap: round;
    }

    .endpoint {
    opacity: 0;
    fill: #8af3ff;
    }

    .dot {
    stroke-width: 2.4;
    stroke: #8af3ff;
    }
                </code>
            </pre> -->
            <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="poyrbJg" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Around_2040-background">
                <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/poyrbJg">
                Around_2040-background</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        <h4>Scrollbar and selection</h4>
            <p>For the scrollbar, a solution was chosen that recalled a <strong>yellow LED strip</strong>. The selected color is bright yellow, but not too much, to avoid glare effects.</p>
            <p>The same color was also used for the selection, while the text takes on the background color.</p>
            <!-- <pre>
                <code class="prettyprint">
    body.around_2040 ::-moz-selection {
    color: #02161a;
    background-color: #fae127; 
    }
    body.around_2040 ::selection {
    color: #02161a;
    background-color: #fae127; 
    }
    body.around_2040::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
    background-color: #02161a; 
    }
    body.around_2040::-webkit-scrollbar-thumb {
    border: 1px solid #fae127; 
    }
                </code>
            </pre> -->
            <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="rNezLvY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Around_2040-scrollbar&amp;amp;selection">
                <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/rNezLvY">
                Around_2040-scrollbar&amp;selection</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
    </section>
    <section>
        <h3>Typography</h3>
        <h4>Font family</h4>
            <p>Electrolize, designed by Valery Zaveryaev, was chosen as the main font. The style was inspired by the letters of a Russian commuter train and has a <strong>square techno design</strong>.<a class="biblioRef" href="#b03">3</a></p>
            <p>For the <strong>titles</strong> of each level a different font was used, namely the one created by Disney for the logo of the film <em>Tron Legacy</em>, 2010.<a class="biblioRef" href="#b04">4</a></p>
            <!-- <pre>
                <code class="prettyprint">
    @font-face {
    font-family: 'tron';
    src: url("fonts/tr2n-webfont.woff2") format("woff2"), url("fonts/tr2n-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal; 
    }
    @font-face {
    font-family: 'electrolize';
    src: url("fonts/electrolize-regular-webfont.woff2") format("woff2"), url("fonts/electrolize-regular-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal; 
    }
    body.around_2040 {
    font-family: "electrolize", sans-serif;
    font-size: 2.4rem;
    color: #cccccc; 
    }
    body.around_2040 h1,
    body.around_2040 h2,
    body.around_2040 h3,
    body.around_2040 h4,
    body.around_2040 h5,
    body.around_2040 h6 {
    font-family: "tron";
    position: relative; 
    }
                </code>
            </pre> -->
            <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="wvGqWxK" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Around_2040-font-family">
                <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/wvGqWxK">
                Around_2040-font-family</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        <h4>Font-size & color</h4>
            <p>As for the margins, a number was chosen for the font-size that recalled the <strong>date 2040</strong>. Therefore the font for wide screens (min-width: 1200px) is <strong>24px</strong>.</p>
            <p>For the color of the text, on the other hand, a <strong>light gray</strong> was chosen that would not create too much contrast with the background and would give the <strong>feeling of fog</strong>.</p>
        <h4>Headers</h4>
            <p>In a self-respecting cyberpunk theme, <strong>glitches</strong> cannot be missing. The impression we want to convey is that of looking at text displayed on a <strong>monitor</strong> that has been <strong>dropped</strong> to the ground too many times and <strong>pixel alignment</strong> is <strong>disabled</strong>.</p>
            <p>To do this, we were inspired by the entirely CSS solution developed by Lucas Bebber<a class="biblioRef" href="#b05">5</a>, which however has been modified to obtain a less invasive effect.</p>
            <!-- <pre>
                <code class="prettyprint">
    @keyframes glitch-anim-1 {
    $steps: 20;
    @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
        $top: random(100);
        $bottom: random(101 - $top);
        clip-path: inset(#{$top}% 0 #{$bottom}% 0);
    }
    }
    }
    @keyframes glitch-anim-2 {
    $steps: 20;
    @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
        $top: random(100);
        $bottom: random(101 - $top);
        clip-path: inset(#{$top}% 0 #{$bottom}% 0);
    }
    }
    }
    & h1, 
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
    position: relative;

    &::before,
    &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color-blade-runner-fog;
    }
    &:before{
    left: .2rem;
    animation: glitch-anim-1 2s infinite linear alternate-reverse;
    background-color: $color-blade-runner-fog;
    }
    &:after {
    left: -.2rem;
    animation: glitch-anim-2 2s infinite linear alternate-reverse;
    background-color: $color-blade-runner-fog;
    }
    }
                </code>
            </pre> -->
            <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="ZEWJOwa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Around_2040-glitches">
                <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/ZEWJOwa">
                Around_2040-glitches</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
            <h4>Links</h4>
                <p>For the links we have chosen the same blue LED color used for the circuits in the background, precisely because they are <strong>connections</strong>. For the <strong>hover</strong> effect, instead, we have selected an intermediate shade between the blue of the link and the gray of the text, a <strong>blue / gray</strong>, therefore.</p>
                <!-- <pre>
                    <code class="prettyprint">
    body.around_2040 a:link,
    body.around_2040 a:visited {
    color: #8af3ff;
    text-decoration: none; 
    }
    body.around_2040 a:hover,
    body.around_2040 a:active {
    color: #aff3f6; 
    }
                    </code>
                </pre> -->
                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="rNezLEv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Around_2040-links">
                    <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/rNezLEv">
                    Around_2040-links</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
    </section>
    <section>
        <h3>Components</h3>
            <h4>Figures and tables</h4>
                <p>In order not to overload an already loaded page with further effects and visual stimuli, the images and tables were decorated with a <strong>minimal outline shadow</strong>. Its values reflect the symbolic number 24, with a horizontal and vertical width of 2.4px and a blur of 2.4px in the same color as the text.</p>
                <!-- <pre>
                    <code class="prettyprint">
    &.around_2040 {
    figure {
    display: flex;
    flex-direction: column;
    justify-items: center;
    margin: 2.4rem auto;
    box-shadow: .24rem .24rem .24rem $color-grey-smoke;

    & img {
        width: 100%;
        height: auto;
    }
    }
    table {
    font-size: 1.8rem;
    margin: 2.4rem auto;
    box-shadow: .24rem .24rem .24rem white;

    & th, td {       
        text-align: center;
        padding: .72rem;
    }

    & tr:hover {
        background-color: $color-grey-smoke;
        color: black;
    }
    }
    }                           
                    </code>
                </pre> -->
                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="arcangelo7" data-slug-hash="OJNjRRb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="OJNjRRb">
                    <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/OJNjRRb">
                    OJNjRRb</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
            <h4>Big Brother</h4>
                <p>I envisioned a future in which only some individuals can read, while others are forced into manual assignments with limited and strongly indoctrinated education.</p>
                <p>The literary points of reference for this imagery were Aldous Huxley's <em>Brave New World</em> (1932) and Margaret Atwood's <em>The Handmaid's Tale</em> (1985). It is interesting to note that the first book is set in the Ford year 632, that is 632 years after the model T's production in 1908, then the 2540, a date that recalls our 2040.</p>
                <p>In Aldous Huxley's book, only so-called <em>alpha</em> and <em>beta</em> individuals can read, while <em>gamma delta</em> and <em>epsilon</em> cannot, while in Margaret Atwood's book only men can read, while women can only look at images. For this reason, the <strong>text</strong> appears <strong>blurred</strong> at first and only after being checked who you are by a facial recognition system the text become visible. Finally, it should be noted that the <strong>images</strong> are <strong>always visible</strong>.</p>
                <!-- <pre>
                    <code class="prettyprint">
    // CSS
    .fade-in {
    animation: fade-in .7s ease-out;
    }

    @keyframes fade-in {
    0% {
    -webkit-filter: blur(24px);
    -moz-filter: blur(24px);
    -o-filter: blur(24px);
    -ms-filter: blur(24px);      
    }
    100% {
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px);
    -ms-filter: blur(0px);      
    }
    }

    // Javascript<a class="biblioRef" href="#b06">6</a>
    const toFade = document.querySelectorAll('table, p, h1, h2, h3, h4, h5, h6, a');

    observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fade-in')
    } else {
        entry.target.classList.remove('fade-in');
    } 
    });
    });

    toFade.forEach(table => {
    observer.observe(table);
    });
                    </code>
                </pre> -->
                <p>This <strong>facial recognition system</strong> is symbolized by the <strong>tracking eye</strong>, clearly taken from the <strong>Big Brother</strong> of <em>1984</em> by George Orwell (1949). The eye follows the cursor, to control what you are looking at. If you click, it gets annoyed, because clicking is the act of reaching a link, then of changing the page, then of evading his gaze.</p>
                <!-- <pre>
                    <code class="prettyprint">
    // CSS
    .eye{
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 100%;
    position: relative;
    overflow: hidden;
    // border: .24rem solid $color-grey-smoke;
    background: $color-blade-runner-fog;
    z-index: -3;
    }
    .iris{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    background-image: radial-gradient(ellipse, 
    #fff 0%,
    #fff 15%,
    $color-led-azure 20%,
    $color-blade-runner-fog 60%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: -2;
    border-radius: 100%;
    transition: background-size .2s;
    }
    .blade{
    width: 100%;
    height: 100%;
    border-radius: 100%;
    overflow: hidden;
    position: absolute;
    }
    .blade > div{
    width: 80%;
    height: 120%;
    border-radius: 100%;
    background: $color-blade-runner-fog;
    position: absolute;
    top:0;
    left:-29%;
    box-shadow: inset 0 0 2.4rem 0 rgba($color-grey-smoke, .8),
            0 0 0 .024rem rgba($color-led-azure, .8);
    overflow: hidden;
    position: absolute;
    transition: all 0.2s;
    }
    html:hover .blade > div{
    left:-55%;
    }
    html:active .iris{
    background-size: 50%;
    }
    html:active .blade > div{
    left:-65%;
    }
    html:active .blade:nth-child(4) > div{
    left:-50%;
    }
    html:active .blade:nth-child(8) > div{
    left:-40%;
    }
    .blade:nth-child(1){
    transform: rotate(50deg);
    }
    .blade:nth-child(2){
    transform: rotate(5deg);  
    }
    .blade:nth-child(3){
    transform: rotate(-40deg);  
    }
    .blade:nth-child(4){
    transform: rotate(-85deg);
    }
    .blade:nth-child(5){
    transform: rotate(-130deg);  
    }
    .blade:nth-child(6){
    transform: rotate(-175deg);  
    }
    .blade:nth-child(7){
    transform: rotate(-220deg);  
    }
    .blade:nth-child(8){
    transform: rotate(-265deg);
    }


    // Javascript
    $(document).mousemove(function(e){
    var eye = $('.eye');
    var eyeX = (eye.offset().left + eye.width() / 2);
    var eyeY = (eye.offset().top + eye.height() / 2);
    var eyeXPercent = Math.round(eyeX / $(this).width() * 100)
    var eyeYPercent = Math.round(eyeY / $(this).width() * 100)
    var xPos = e.pageX; 
    var yPos = e.pageY;
    var mouseXPercent = Math.round(xPos / $(this).width() * 100);
    var mouseYPercent = Math.round(yPos / $(this).height() * 100);

    $('.iris').css('top',mouseYPercent - eyeYPercent);
    $('.iris').css('left',mouseXPercent - eyeXPercent);

    var iris = $(".iris");
    if (parseInt(iris.css("top")) > 8) {
    iris.css("top", "8");
    }
    if (parseInt(iris.css("left")) < -6) {
    iris.css("left", "-6");
    }
    if (parseInt(iris.css("left")) > 6) {
    iris.css("left", "6");
    }
    }); 
                    </code>
                </pre> -->
                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="LYNjRjP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Around_2040-big-brother">
                    <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/LYNjRjP">
                    Around_2040-big-brother</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
            <h4>Metadata viewer</h4>
                <p>The metadata viewer has been designed to be simultaneously <strong>recognizable</strong> throughout the site and <strong>theme-specific</strong>. A crucial aspect is in fact its recognisability regardless of the chosen theme.</p>
                <p>To achieve this, a <strong>popup menu</strong> has been designed that can be activated via a widget. Its colors and margins change depending on the theme, but everything else remains the same.</p>
                <p>The <strong>menu</strong> consists of <strong>four sections</strong>, which can be activated through <strong>collapsible tabs</strong>: the table of contents, the index of names, the index of places and the index of dates.</p>
                <p>The widget is positioned differently depending on the device. On the desktop it is placed at the top right, at 2.4rem away from the edges, the same margin that has been encountered for many other elements, such as paragraphs. On a tablet, on the other hand, it is placed at the bottom right, respecting the same margins, to be more accessible by the thumb for one-handed use.</p>
                <p>The widget integrates seamlessly into the theme using its colors, which change depending on whether it is active or not. Also, to make it more like a virtual button, on hover it raises slightly and the background expands and then vanishes. In this way, the idea is conveyed that by pressing it the background expands further, to become the actual menu.</p>
                <p>In the various tabs, the metadata are arranged in a list, respecting the margins of 2.4rem already encountered, as well as the buttons to sort them.</p>
                <p class="codepen" data-height="760" data-theme-id="dark" data-default-tab="js,result" data-user="arcangelo7" data-slug-hash="zYqWvKX" style="height: 760px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Around_2040-metadata-viewer">
                    <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/zYqWvKX">
                    Around_2040-metadata-viewer</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
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
    </section>
    <section>
        <h3>Sections</h3>
            <h2>Navbar and footer</h2>
                <p>The navbar and footer play the role of frame for this <strong>sci-fi dashboard</strong>. On <strong>large screens</strong> (max-width: 1200px) they are in fact in a fixed position above and below the actual article.</p>
                <p>Their frame task is underlined by the <strong>line</strong> that is not straight, but <strong>angular</strong> and recessed at the level of the central box-tablet, which also allows for gaining more space.</p>
                <p>The same <strong>led yellow color</strong> used for the scrollbar and for the highlighting was then used to decorate the inclination of the two clipped sections and as a link separator in the navigation bar.</p>
                <p>On <strong>smartphones</strong> (max-width: 600px) the navigation bar is always visible at the top, while the footer disappears and can be reached after reading the entire article.</p>
                <!-- <pre>
                    <code class="prettyprint">
    body {
    &.around_2040 {
    .nav {
        font-family: "tron";
        @include glow;
        @include black-mirror;
        width: 100%;
        padding: 1.2rem 0 2.4rem 0;
        display: flex;
        justify-content: center;
        position: relative;

        animation: 1s ease-out 0s 1 moveInTop;


        --margin-hor: calc((100% - 72rem) / 2);
        clip-path: polygon(0 100%, calc(var(--margin-hor) - 1rem) 100%, var(--margin-hor) 77%, calc(var(--margin-hor) + 72rem) 77%, calc(var(--margin-hor) + 72rem + 1rem) 100%, 100% 100%, 100% 0, 0 0); 

        &::after {
            content: "//";
            @include slash;     
            bottom: -.6rem;
            left: calc(var(--margin-hor) - 2.4rem);
        }

        &::before {
            content: "\\\\";
            @include slash; 
            bottom: -.6rem;
            left: calc(var(--margin-hor) + 72rem + .2rem);
        }

        @include respond(phone) {
            clip-path: polygon(0 100%, 3% 100%, 4% 85%, 96% 85%, 97% 100%, 100% 100%, 100% 0, 0 0); 

            &::after {
                content: "//";
                @include slash;     
                bottom: -.6rem;
                left: 0;
            }

            &::before {
                content: "\\\\";
                @include slash; 
                bottom: -.6rem;
                left: 96%;
            }
        }

        &__bar {
            width: 72rem;
            list-style: none;
            display: flex;
            
            @include respond(phone) {
                flex-wrap: wrap;
                justify-content: center;
            }
        }

        &__item {
            -webkit-touch-callout: none; 
            -webkit-user-select: none; 
            user-select: none;

            a:link, 
            a:visited {
                text-decoration: none;
                color: $color-grey-smoke;
            }

            a:hover, 
            a:active {
                position: relative;
                @include glitch;
            }

            &:not(:first-child):not(:last-child):after {
                content: "|";
                margin: 0 2.4rem;
                color: $color-led-yellow;
                transform: translateY(-10%);

                @include respond(phone) {
                    margin: 0 4.8vw;
                }
            }

            &--logo {
                flex: 1;

                @include respond(phone) {
                    text-align: center;
                    flex: 0 1 100%;
                    margin-bottom: 2.4vw;
                }
            }
        }
    }
    }
    }
                    </code>
                </pre> -->
                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="arcangelo7" data-slug-hash="gOrxwdW" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Around_2040-navigation&amp;amp;footer">
                    <span>See the Pen <a href="https://codepen.io/arcangelo7/pen/gOrxwdW">
                    Around_2040-navigation&amp;footer</a> by Arcangelo (<a href="https://codepen.io/arcangelo7">@arcangelo7</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
        </section>
    <section>
        <h3>Audio effects</h3>
            <p>To make the experience even more <strong>immersive</strong> with regards to the sci-fi and cyberpunk atmosphere, we have chosen to apply some sound feedback to some elements of the page.</p>
            <p>Upon loading, the <strong>navbar</strong> and <strong>footer</strong> appear from top to bottom and bottom to top respectively with a <strong>deploy sound</strong>.</p>
            <p>Electro sound badges are also produced when the mouse passes <strong>over</strong> the <strong>links</strong> in the navigation bar and <strong>clicks</strong> on any link.</p>
            <p>All sounds are <strong>free licensed</strong> from the <a href="https://www.soundsnap.com/" title="Soundsnap.com" target="_blank">Soundsnap.com website</a>.<a class="biblioRef" href="#b06">6</a></p>
    </section>
    <section id="References">
        <h3>References</h3>
            <p class="biblioItem" id="b01"><span class="biblioMarker">1. </span><em>Desktop vs Mobile vs Tablet Market Share Worldwide</em> (July 2019 - July 2020), Statcounter GlobalStats <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet" title="Desktop vs Mobile vs Tablet Market Share Worldwide chart" target="_blank">https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet</a>.</p>
            <p class="biblioItem" id="b02"><span class="biblioMarker">2. </span>Noora Pirttilahti (06/02/2018), <em>Sci-fi</em> CodePen <a href="https://codepen.io/noorapirttilahti/pen/GQjjwj" title="Desktop vs Mobile vs Tablet Market Share Worldwide chart" target="_blank">https://codepen.io/noorapirttilahti/pen/GQjjwj</a>.</p>
            <p class="biblioItem" id="b03"><span class="biblioMarker">3. </span>Electrolize font <a href="https://fonts.google.com/specimen/Electrolize" title="Electrolize font" target="_blank">https://fonts.google.com/specimen/Electrolize</a>.</p>
            <p class="biblioItem" id="b04"><span class="biblioMarker">4. </span>Tron Legacy font <a href="https://www.dafont.com/tr2n.font" title="Tron Legacy font" target="_blank">https://www.dafont.com/tr2n.font</a>.</p>
            <p class="biblioItem" id="b05"><span class="biblioMarker">5. </span>Coyler, Chris (21/08/2019). <em>Glitch Effect on Text / Images / SVG</em> <a href="https://css-tricks.com/glitch-effect-text-images-svg/" title="Glitch Effect on Text / Images / SVG article by Chris Coyier" target="_blank">https://css-tricks.com/glitch-effect-text-images-svg/</a>.</p>
            <p class="biblioItem" id="b06"><span class="biblioMarker">6. </span>Soundsnap.com <a href="https://www.soundsnap.com/" title="Soundsnap.com" target="_blank">https://www.soundsnap.com/</a>.</p>
            <p class="biblioItem" id="b06"><span class="biblioMarker">6. </span>Alligator.io (21/12/2017), <em>Using the Intersection Observer API to Trigger Animations and Transitions</em> <a href="https://alligator.io/js/intersection-observer/" title="Using the Intersection Observer API to Trigger Animations and Transitions article" target="_blank">https://alligator.io/js/intersection-observer/</a>.</p>
    </section>
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
`;