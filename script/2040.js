$(function(){
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
    var $eye = $('.box');
    var eyeX = $eye.offset().left + $eye.width() / 2;
    var eyeY = $eye.offset().top + $eye.height() / 2;
    $('body').on('mousemove', function(event){
      var rad = Math.atan2(event.pageY - eyeY, event.pageX - eyeX);
      var rot = rad * (180 / Math.PI);
      $eye.css('transform', 'rotate(' + rot + 'deg)' )
    })
});


