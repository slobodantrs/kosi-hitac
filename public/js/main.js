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
  $('.navbar-side .dropdown-toggle').on('click', function(e) {
    e.preventDefault();
    var $li = $(this).closest('li.nav-item');
    // zatvori sve ostale otvorene
    $li.siblings('.show').removeClass('show')
       .find('> .dropdown-menu').slideUp(200);
    // otvori/ zatvori ovaj
    $li.toggleClass('show');
    $li.find('> .dropdown-menu').slideToggle(200);
  });

});
