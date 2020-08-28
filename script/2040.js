$(function(){
    if ($(".around_2040").length > 0) {
        // Add nav with eye
        // $(".around_2040").prepend(`
        //     <nav class="nav">
        //         <ul class="nav__bar"> 
        //             <li class="nav__item nav__item--logo visited"><a href="#">mmmm</a></li>
        //             <div class="eye">
        //                 <div class="blade"><div></div></div>  
        //                 <div class="blade"><div></div></div>
        //                 <div class="blade"><div></div></div>  
        //                 <div class="blade"><div></div></div>
        //                 <div class="blade"><div></div></div>  
        //                 <div class="blade"><div></div></div>
        //                 <div class="blade"><div></div></div>  
        //                 <div class="blade"><div></div></div>
        //                 <div class="iris"></div>
        //             </div>
        //             <li class="nav__item"><a href="#">nutella</a></li>
        //         </ul>
        //     </nav>
        // `);
        $(".nav__item--logo").after(`
            <div class="eye">
                <div class="blade"><div></div></div>  
                <div class="blade"><div></div></div>
                <div class="blade"><div></div></div>  
                <div class="blade"><div></div></div>
                <div class="blade"><div></div></div>  
                <div class="blade"><div></div></div>
                <div class="blade"><div></div></div>  
                <div class="blade"><div></div></div>
                <div class="iris"></div>
            </div>
        `);

        // Glitches
        $(".around_2040").find("h1, h2, h3, h4, h5, h6, .nav__item a").each(function() {
            $(this).attr("data-text", $(this).text());
        });


        // Tablet-like device
        function wrapInMain(x) {
            if (x.matches) { // If media query matches
                $(".tablet").children().unwrap();
                $(".around_2040").children(":not(nav)").wrapAll("<div class='container'>");
                $(".container").children(":not(footer)").wrapAll("<div class='tablet'>");
            } else {
                $(".tablet").children().unwrap();
                $(".container").children().unwrap();
                $(".around_2040").children(":not(nav, footer)").wrapAll("<main class='tablet'>");
            }
        }
        
        var x = window.matchMedia("(max-width: 37.5em)")
        wrapInMain(x) // Call listener function at run time
        x.addListener(wrapInMain) // Attach listener function on state changes


        // Scroll into view
        const toFade = document.querySelectorAll('table, p, h1, h2, h3, h4, h5, h6, a');

        // const config = {
        //     rootMargin: '-100px'
        //     // threshold: [0, 0.25, 0.75, 1]
        // };

        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('fade-in')
                    // observer.unobserve(entry.target);
                } else {
                    entry.target.classList.remove('fade-in');
                } 
            });
        });
        
        toFade.forEach(table => {
            observer.observe(table);
        });


        // Eye tracking
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
    }
});


