$(function(){
    $(".around_2040").find("h1, h2, h3, h4, h5, h6").each(function() {
        $(this).attr("data-text", $(this).text());
    });
});