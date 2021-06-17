$(document).ready(function() {
    ////CHOSEN: adds a blue selection border around the chosen themes////
    $(".choice").on('mouseenter', function () {
        $('.choice').removeClass('chosen');
        $(this).addClass('chosen');
    });
/*    $(".choice").on('click', function () {
        $('.choice').removeClass('chosen selected');
        $(this).addClass('selected');
    });
*/
    $(".choice-bg").on('mouseenter', function () {
        $('.choice-bg').removeClass('chosen');
        $(this).addClass('chosen');
    });

    //////////////////COLOR CHOICES FOR THE MENUS////////////////////
    $("#choice-blue").on('mouseenter', function () {
        $('#preview-main-menu').removeClass('blue red yellow default-main-menu');
        $('#preview-main-menu').addClass('blue');
    });
    
    $("#choice-red").on('mouseenter', function () {
        $('#preview-main-menu').removeClass('blue red yellow default-main-menu');
        $('#preview-main-menu').addClass('red');
    });
    
    $("#choice-yellow").on('mouseenter', function () {
        $('#preview-main-menu').removeClass('blue red yellow default-main-menu');
        $('#preview-main-menu').addClass('yellow');
    });

    //////////////////COLOR CHOICES FOR THE BACKGROUND ////////////////////
    $("#choice-bg-1").on('mouseenter', function () {
        $('#preview-area').removeClass('bg-1 bg-2 bg-3 default-bg');
        $('#preview-area').addClass('bg-1');
    });
    
    $("#choice-bg-2").on('mouseenter', function () {
        $('#preview-area').removeClass('bg-1 bg-2 bg-3 default-bg');
        $('#preview-area').addClass('bg-2');
    });
    
    $("#choice-bg-3").on('mouseenter', function () {
        $('#preview-area').removeClass('bg-1 bg-2 bg-3 default-bg');
        $('#preview-area').addClass('bg-3');
    });
});