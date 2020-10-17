var early_20th_doc = `
    <h1>Early 20th Century</h1>
        <section>
            <h3>General idea and purpose</h3>
                <p>The main idea of this theme stemmed from the design of the Bauhaus magazine, a tri-monthly periodical
                    published during the years of Bauhaus flourishing in Europe: the roaring 20s.</p>
                <p>The Bauhaus School, a close relative of De Stijl and the Expressionists, was mostly keen on the
                    usage of few and preferably primary colors, straight thick lines, strict baseline grids and a
                    typography that was bold and loud. In this theme we strive to recreate the atmosphere of the
                    Bauhaus era.</p>
            <h3>Base</h3>
            <h4>The baseline grid</h4>
                <p>The Foundation of this theme is the baseline grid. In digital writing, the characters do not sit on
                    the baseline, as in books. Rather, they float in the middle of it. In this theme, we changed
                    that look using tricks of margins and paddings.</p>
                <p>Every element in the document, including paragraphs, figures, tables, and headings, has
                    elaborate margins, to push down the element below it, and paddings, to push down its own text so
                    that it would land right on the baseline, which itself is a visible, static grid set as the
                    background of the page. In this manner, all the text in a document that does not include
                    unforeseen elements is located on the baseline grid. The line height is static and the font size
                    does not change with slight changes in screen size. However, the tablet and mobile screens are
                    also considered in this design.</p>
            <h4>The columns</h4>
                <p>To align with the design patterns in the Bauhaus Magazine, all sections except the cover and the
                    summary of the article are designed to be in two columns
                    in this theme. This is the case only for desktop devices however, since the two-column view
                    would have been too cramped for the viewer on tablets and mobiles. In case no sections exist in
                    the document, all of the text is divided in two columns.</p>
            <h4>The lines</h4>
                <p>One of the main and boldest features of the Bauhaus Magazine design was the steady and seemingly
                    random existence of thick lines in red and black throughout the pages. The carefree usage of
                    these lines is recreated in our theme to encompass the page in a snake-like way: Going around
                    the first two sections and then running down until the end of the page is a red line, which is
                    accompanied by a black line used to separate the two columns in each section.</p>
        </section>
        <section>
            <h3>Typography</h3>
            <h4>Font family</h4>
                <p>The font family chosen for this theme, Kalos Sans, was decided on because of its defined circular
                    characters, reminding the viewer of the typography of both Art Nouveau and Bauhaus, prominent
                    schools in the early 20th century.
                </p>
            <h4>Font color</h4>
                <p>Three main colors exist in this theme. A Bauhaus-related dark red, a light brown and a light
                    cream that is meant to recreate the paper feel of the Bauhaus Magazine pages.</p>
        </section>
        <section>
            <h3>Components</h3>
                <h4>Figures and tables</h4>
                    <p>In order not to destroy the baseline grid, figures and tables have flexible but predefined
                        heights that change according to the screen size.
                    </p>

        <section>
            <h3>Navbar and footer</h3>
                <p>The navbar and the footer are designed according to bold yet simplistic Bauhaus tradition.
                    Both are simple rectangles set in the center of the screen, with a thick red border and a
                    cream background.</p>
            </section>
        <section>
            <h3>References</h3>
                <p class="biblioItem" id="b01"><span class="biblioMarker">1. </span><em>Bauhaus and Moholy-Nagy's
                    'typofoto'</em>, Guity Novin, <a href="http://guity-novin.blogspot.com/2012/04/modern-newspaper-magazine-layouts.html#Eight" title="Bauhaus and Moholy-Nagy's 'typofoto'" target="_blank">"http://guity-novin.blogspot.com/2012/04/modern-newspaper-magazine-layouts.html#Eight</a>.</p>
                <p class="biblioItem" id="b02"><span class="biblioMarker">2. </span><em>Bauhaus Dessau</em>, <a
                        href="https://www.bauhaus-dessau.de/" target="_blank">https://www.bauhaus-dessau.de/</a>.</p>
                <p class="biblioItem" id="b03"><span class="biblioMarker">3. </span><em>How We Implemented a Baseline
                    Grid Using CSS</em>, Gabriel Gianordoli, <a href="https://open.nytimes.com/how-we-implemented-a-baseline-grid-using-css-cb13cac45201"
                    target="_blank">https://open.nytimes.com/how-we-implemented-a-baseline-grid-using-css
                    -cb13cac45201</a>.
                </p>
        </section>
        <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
`;