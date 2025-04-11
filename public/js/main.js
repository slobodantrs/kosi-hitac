$( document ).ready(function() {
  // Open navbarSide when button is clicked
  $('#navbarSideButton').on('click', function() {
    $('#navbarSide').addClass('reveal');
    $('.overlay').show();
  });
  
   // Close navbarSide when the outside of menu is clicked
  $('.overlay').on('click', function(){
    $('#navbarSide').removeClass('reveal');
    $('.overlay').hide();
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
