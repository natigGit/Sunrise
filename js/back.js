$(document).on("click", ".back_btn", function(e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 800);
});