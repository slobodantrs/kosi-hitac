
$(document).ready(function() {

  // 1) Otvori/zatvori bočnu traku
  $('#navbarSideButton').on('click', function() {
    $('#navbarSide').toggleClass('reveal');
    $('.overlay').toggle();
  });

  // 2) Klik na overlay zatvara bočnu traku
  $('.overlay').on('click', function(){
    $('#navbarSide').removeClass('reveal');
    $(this).hide();
  });

  // 3) Mobile: otvaranje podmenija na klik
  //   sprečavamo default navigaciju i samo toggle-ujemo klasu .show
  $('.navbar-side .dropdown-toggle').on('click', function(e) {
    e.preventDefault();
    var $li = $(this).closest('.dropdown');
    // zatvori sve ostale otvorene podmenije (opciono)
    $li.siblings('.dropdown').removeClass('show');
    // otvori/zatvori ovaj
    $li.toggleClass('show');
  });

});
