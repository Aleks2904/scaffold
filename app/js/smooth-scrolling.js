$('a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 150
    }, 400);
    return false;
});