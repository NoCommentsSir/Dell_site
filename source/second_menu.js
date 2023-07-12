$(document).ready(function(){
    $("#action2").click(function () {
        if ($(document).width() > 378) { return; }
        else if($('#parent-change').children('#change').length > 0){
            $("#change").remove();
            $("#parent-change").append( "<i class='fa fa-times' id='change2' aria-hidden='true'></i>" );
        }
        else if($('#parent-change').children('#change2').length > 0){
            $("#change2").remove();
            $("#parent-change").append( "<i class='fa fa-bars' id='change' aria-hidden='true'></i>" );
        }
        $(".drop-mobile-menu").stop(true, false).slideToggle(400);
    });
});
