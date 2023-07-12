$(document).ready(function(){
    $("#action").hover(function () {
        if ($(document).width() < 1920) { return; }
        else{
            $(".drop-down-menu").stop(true, false).slideToggle(400);
            $(".hide-name").stop(true, false).slideToggle(400);
        }
    });
});