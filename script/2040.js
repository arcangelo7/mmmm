$(function(){
    // Glitches
    $(".around_2040").find("h1, h2, h3, h4, h5, h6, .nav__item a").each(function() {
        $(this).attr("data-text", $(this).text());
    });


    // Tablet-like device
    $(".around_2040").children(":not(nav, footer)").wrapAll("<main>");
});


