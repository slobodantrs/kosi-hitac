$(document).ready(function() {

  // 1) Off‑canvas meni
  $('#navbarSideButton').on('click', function() {
    $('#navbarSide').toggleClass('reveal');
    $('.overlay').toggle();
  });
  $('.overlay').on('click', function(){
    $('#navbarSide').removeClass('reveal');
    $(this).hide();
  });

  // 2) Toggle podmeni na klik
  $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $subMenu = $(this).next('.dropdown-menu');
    var $parentLi = $(this).parent('li');

    if ($parentLi.hasClass('show')) {
        // Ako je već otvoreno, zatvori
        $subMenu.slideUp(200);
        $parentLi.removeClass('show');
    } else {
        // Zatvori sve ostale otvorene
        $parentLi.siblings('.show').removeClass('show')
            .find('> .dropdown-menu').slideUp(200);

        // Otvori izabrani
        $subMenu.slideDown(200);
        $parentLi.addClass('show');
    }
});

$(document).on('click', function (e) {
    // Ako klik nije unutar .dropdown-menu ili .dropdown
    if (!$(e.target).closest('.dropdown-menu, .dropdown').length) {
        $('.dropdown-menu').slideUp(200);
        $('.dropdown').removeClass('show');
        $('.dropdown-menu .show').removeClass('show');
    }
});

});
