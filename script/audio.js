$(function() {
    if ($(".before_1500").length > 0) {
        $("body").append("<audio>")
        $("audio")
            .append("<source>");
        $("source")
            .attr("src", "music/music_Germany_1450-1480.mp3")
            .attr("type", "audio/mp3");
        $("body").append("<div class='play'>")
        $(".play")
            .append("<button class='play__button btn btn--color btn--animated-up'>")
        $(".play__button")
            .append("<img class='play__icon' src='img/pipe_organ.svg'>")

        var audio = $("audio")[0];
        var isPlaying = false;
        function togglePlay() {
            if (isPlaying) {
                audio.pause();
                $(".play__button").css("background-color", "#1c4d6d");
                $('.play__button').toggleClass('changed');
            } else {
                audio.play();
                $(".play__button").css("background-color", "#a8432f");
                $('.play__button').toggleClass('changed');
            }
        };
        audio.onplaying = function() {
            isPlaying = true;
        };
        audio.onpause = function() {
            isPlaying = false;
        };
        $(".play__button").click(function(){
            togglePlay();
        });
    } else if ($(".around_2040").length > 0) {
        $(".around_2040").append("<audio class='deploy'>");
        $(".deploy")
            .append("<source class='deploy__source'>");
        $(".deploy__source")
            .attr("src", "music/deploy.mp3")
            .attr("type", "audio/mp3")
        
        $(".around_2040").append("<audio class='hover'>");
        $(".hover")
            .append("<source class='hover__source'>");
        $(".hover__source")
            .attr("src", "music/hover.mp3")
            .attr("type", "audio/mp3")

        $(".around_2040").append("<audio class='click'>");
        $(".click")            
            .append("<source class='click__source'>");
        $(".click__source")
            .attr("src", "music/click.mp3")
            .attr("type", "audio/mp3")
        
        $(".deploy")[0].play();

        $("nav a").mouseenter(function() {
            $(".hover")[0].play();
        });

        $("a").click(function() {
            $(".click")[0].play();
        });
    }
});