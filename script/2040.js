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
});


