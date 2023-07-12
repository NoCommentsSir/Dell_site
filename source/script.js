$(document).ready(function(){
    $(".slider").slick({
        dots: true,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 376,
                settings: {
                    centerMode: false,
                    centerPadding: '10px',
                }
            },
            {
                breakpoint: 1921,
                settings: {
                    centerMode: true,
                    centerPadding: '256px',
                }
            },
        ]
    });
    $("#action").hover(function () {
        $(".drop-down-menu").stop(true, false).slideToggle(400);
        $(".hide-name").stop(true, false).slideToggle(400);
    });
    $('#person').bind("change keyup input click", function() { this.value = this.value.replace(/[^а-яёА-ЯЁ\s\-]/g, ''); });
    $('#number').bind("change keyup input click", function() { this.value = this.value.replace(/[^0-9\+]/g, ''); });
});

// $(document).ready(function(){
//     $("#action").hover(
//     function () {
//         clearTimeout($.data(this,'timer'));
//         $('ul',this).stop(true,true).slideDown(200);
//     },
//     function () {
//         $.data(this,'timer', setTimeout($.proxy(function() {
//         $('ul',this).stop(true,true).slideUp(200);
//         }, this), 100));
//     });
// });