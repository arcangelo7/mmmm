var toFade = document.querySelectorAll('table, li, p, h1, h2, h3, h4, h5, h6, a');
var phone = window.matchMedia("(max-width: 37.5em)")

// Tablet-like device
function wrapInMain(phone) {
    if ($(".around_2040").length > 0) {
        if (phone.matches) { // If media query matches
            $(".foot").detach().appendTo(".container");
        } else {
            $(".foot").detach().appendTo(".around_2040");
        }
    }
}

function mouseTracking(e){
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
        iris.css("top", "8px");
    }
    if (parseInt(iris.css("left")) < -6) {
        iris.css("left", "-6px");
    }
    if (parseInt(iris.css("left")) > 6) {
        iris.css("left", "6px");
    }
}

const config = {
    rootMargin: "0px",
    threshold: 0
};

// Scroll into view
var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('fade-in')
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('fade-in');
        } 
    });
}, config);

function manage2040(){
    if ($(".around_2040").length > 0) {
        // Add eye to nav
        if ($(".eye").length == 0) {
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
        }

        // Glitches
        $(".around_2040").find(".nav__item a").each(function() {
            $(this).attr("data-text", $(this).text());
        });

        wrapInMain(phone) // Call listener function at run time
        phone.addListener(wrapInMain) // Attach listener function on state changes

        $(document).on("click", ".selector__article", function(){
            wrapInMain(phone);
            phone.addListener(wrapInMain) // Attach listener function on state changes
        });

        toFade = document.querySelectorAll('table, li, p, h1, h2, h3, h4, h5, h6, a');
        toFade.forEach(element => {
            observer.observe(element);
        });

        $(document).on("click", ".selector__article", function(){
            if ($(".around_2040").length > 0) {
                toFade = document.querySelectorAll('table, li, p, h1, h2, h3, h4, h5, h6, a');
                toFade.forEach(element => {
                    observer.observe(element);
                });
            }
        });

        // const config = {
        //     rootMargin: '-100px'
        //     // threshold: [0, 0.25, 0.75, 1]
        // };

        // Eye tracking
        $(document).mousemove(mouseTracking); 
    }
}

function remove2040(){
    $(".eye").remove();
    phone.removeListener(wrapInMain);
    $(document).off("mousemove", mouseTracking);
    toFade.forEach(element => {
        observer.unobserve(element);
    });
}

$(function(){
    if ($(".around_2040").length > 0) {
        manage2040();
    }
});


