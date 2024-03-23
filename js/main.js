$(document).ready(function(){
    $('.graph li').click(function(){
        $(this).toggleClass('active');
        $('.graph li').not(this).removeClass('active');
    });
});