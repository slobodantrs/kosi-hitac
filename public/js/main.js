$(document).ready(function() {
// — Ponovo renderuj MathJax (i ako si već pozvao typesetPromise u onload-u,
  //   ovo je opcionalno, ali ne škodi):
  
 /* if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise()
      .catch(function (err) {
        console.error("MathJax typeset failed: " + err.message);
      });
  }*/
  

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


  // 3) Klik van menija zatvara meni i overlay
  $(document).on('click', function (e) {
    const target = $(e.target);
    if (!target.closest('#navbarSide').length && !target.closest('#navbarSideButton').length) {
      $('#navbarSide').removeClass('show');
      $('.overlay').hide();
    }
  });

});
