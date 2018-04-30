$(document).ready(function(){
    $(".img").hover(function(){
        $(this).css("Image","width: 100%");
    }, function(){
        $(this).css("Image", "width: 50%");
    });
});