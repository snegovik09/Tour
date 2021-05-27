$(document).ready(function() {
    $('.main_btna').on('click', function() {
        $('.overlay').animate({
            opacity: 'toggle'
            }, 600);
        $('.modal').slideDown('slow');
    });
    $('.close').on('click', function() {
        $('.overlay').animate({opacite: 'toggle'}, 600);
        $('.modal').slideUp('slow');
    });
});