var methods = {

  Uvod_u_p5js: function(req, res) {
	  
    console.log("Uvod_u_p5js");
    res.render('pages/upotrebaP5js/opis_p5js');
  },

  Uvod_u_p5js_EN: function(req, res) {
  console.log("Uvod_u_p5js_EN");
  res.render('pages-en/usingP5js/description_p5js');
},


  Animacija_kruznog_kretanja: function(req, res) {
    console.log("Animacija_kruznog_kretanja");
    res.render('pages/upotrebaP5js/kruzno_kretanje_animacija_p5js');
  },

 Animacija_kruznog_kretanja_EN: function(req, res) {
  console.log("Animacija_kruznog_kretanja_en");
  console.log('app.js>> req.getLocale() =', req.getLocale());
  console.log('Kontroler P5js>> res.locals.locale =', res.locals.locale);
  res.render('pages-en/usingP5js/circular_motion_animation_p5js');
},

Klizanje_tela_niz_strmu_ravan: function(req, res) {
  console.log("Klizanje_tela_niz_strmu_ravan");
  res.render('pages/upotrebaP5js/klizanje_tela_niz_strmu_ravan_animacija');
},

Klizanje_tela_niz_strmu_ravan_EN: function(req, res) {
  console.log("Klizanje_tela_niz_strmu_ravan_en");
  res.render('pages-en/usingP5js/sliding_down_inclined_plane_animation');
},

// — SRPSKI —
Animacija_sunce_zemlja_mesec: function(req, res) {
  // ovde nema id varijante, ali možeš dodati ako želiš fragmentiranje
  res.render('pages/upotrebaP5js/sunce_zemlja_mesec_animacija', {
    // podesite odgovarajuće nazive fajlova i podatke 
    pageTitle: 'Animacija Sunce–Zemlja–Mesec',
    locale: req.locale
  });
},

// — ENGLISH —
Animacija_sunce_zemlja_mesec_EN: function(req, res) {
  res.render('pages-en/usingP5js/sun_earth_moon_animation', {
    pageTitle: 'Sun–Earth–Moon Animation',
    locale: req.locale
  });
},


};

module.exports = methods;
