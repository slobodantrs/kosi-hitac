$(document).ready(function() {

  // 1) Otvaranje/gašenje off-canvas menija i overlay
  $('#navbarSideButton').on('click', function () {
    $('#navbarSide').toggleClass('show');
    $('.overlay').toggle();
  });

  // 2) Klik na overlay zatvara meni
  $('.overlay').on('click', function(){
    $('#navbarSide').removeClass('show');
    $(this).hide();
  });

  // 3) Toggle podmenija
  $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $subMenu = $(this).next('.dropdown-menu');
    var $parentLi = $(this).parent('li');

    if ($parentLi.hasClass('show')) {
      $subMenu.slideUp(200);
      $parentLi.removeClass('show');
    } else {
      // Zatvori ostale otvorene
      $parentLi.siblings('.show').removeClass('show')
               .find('> .dropdown-menu').slideUp(200);

      // Otvori izabrani
      $subMenu.slideDown(200);
      $parentLi.addClass('show');
    }
  });

  // 4) Klik van menija zatvara meni i overlay
  $(document).on('click', function (e) {
    const target = $(e.target);
    if (!target.closest('#navbarSide').length && !target.closest('#navbarSideButton').length) {
      $('#navbarSide').removeClass('show');
      $('.overlay').hide();
    }
  });

});
