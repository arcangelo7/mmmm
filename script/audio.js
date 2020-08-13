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
            .append("<button class='play__button btn btn--blue btn--animated'>")
        $(".play__button")
            .append("<img class='play__icon' src='img/pipe_organ.svg'>")

        var audio = $("audio")[0];
        var isPlaying = false;
        function togglePlay() {
            if (isPlaying) {
                audio.pause();
                $(".btn--blue").css("background-color", "#1c4d6d");
                $('.btn--blue').toggleClass('changed');
            } else {
                audio.play();
                $(".btn--blue").css("background-color", "#a8432f");
                $('.btn--blue').toggleClass('changed');
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
    }
});