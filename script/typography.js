// No sep between biblioRef
$(function(){
    $(document).on("click", ".selector__article", function(){
        $("p").each(function(index){
            var sepBetweenRef = new RegExp("</a>.{1}<a")
            if($(this).html().match(sepBetweenRef)){
                var found = $(this).html().match(sepBetweenRef)[0];
                document.body.innerHTML = document.body.innerHTML.replace(found, "</a><a");
            }
        });
    });
});