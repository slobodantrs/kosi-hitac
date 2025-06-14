// controllers/OpsteController.js
var methods = {
  // --- Srpski verzije ---

  O_Ejsu: function(req, res) {
    // Priprema podataka za šablon
    const data = {
      locale: req.locale, 
      pageDescription: res.__('meta.o_ejsu.description'),
      pageKeywords:    res.__('meta.o_ejsu.keywords')
    };
    console.log('Render attempt: pages/upotrebaEJS-a/opis_easy_java_simulation, locale=', req.locale);
    res.render('pages/upotrebaEJS-a/opis_easy_java_simulation', data);
  },

  O_Ejsu_primer: function(req, res) {
    const data = {
      locale: req.locale,
      pageDescription: res.__('meta.o_ejsu_primer.description'),
      pageKeywords:    res.__('meta.o_ejsu_primer.keywords')
    };
    console.log('Render attempt: pages/upotrebaEJS-a/primer_easy_java_simulation, locale=', req.locale);
    res.render('pages/upotrebaEJS-a/primer_easy_java_simulation', data);
  },

  O_Ejsu_primer_napredno: function(req, res) {
    const data = {
      locale: req.locale,
      pageDescription: res.__('meta.o_ejsu_primer_napredno.description'),
      pageKeywords:    res.__('meta.o_ejsu_primer_napredno.keywords')
    };
    console.log('Render attempt: pages/upotrebaEJS-a/primer_easy_java_simulation_napredno, locale=', req.locale);
    res.render('pages/upotrebaEJS-a/primer_easy_java_simulation_napredno', data);
  },

  O_Ejsu_primer_napredno_2: function(req, res) {
    const data = {
      locale: req.locale,
      pageDescription: res.__('meta.o_ejsu_primer_napredno_2.description'),
      pageKeywords:    res.__('meta.o_ejsu_primer_napredno_2.keywords')
    };
    console.log('Render attempt: pages/upotrebaEJS-a/primer_easy_java_simulation_napredno_2, locale=', req.locale);
    res.render('pages/upotrebaEJS-a/primer_easy_java_simulation_napredno_2', data);
  },

  O_Ejsu_opis: function(req, res) {
    const data = {
      locale: req.locale,
      pageDescription: res.__('meta.o_p5js.description'),
      pageKeywords:    res.__('meta.o_p5js.keywords')
    };
    console.log('Render attempt: pages/upotrebaEJS-a/opis_p5js, locale=', req.locale);
    res.render('pages/upotrebaEJS-a/opis_p5js', data);
  },

  // --- English verzije ---

  O_Ejsu_EN: function(req, res) {
    const data = {
      locale: req.locale,
      pageDescription: res.__('meta.about_ejs.description'),
      pageKeywords:    res.__('meta.about_ejs.keywords')
    };
    console.log('Render attempt: pages-en/about-ejs/description_easy_java_simulation, locale=', req.locale);
    res.render('pages-en/about-ejs/description_easy_java_simulation', data);
  },

  O_Ejsu_primer_EN: function(req, res) {
    const data = {
      locale: req.locale,
      pageDescription: res.__('meta.about_ejs_example.description'),
      pageKeywords:    res.__('meta.about_ejs_example.keywords')
    };
    console.log('Render attempt: pages-en/about-ejs/example_easy_java_simulation, locale=', req.locale);
    res.render('pages-en/about-ejs/example_easy_java_simulation', data);
  },

  O_Ejsu_primer_napredno_EN: function(req, res) {
    const data = {
      locale: req.locale,
      pageDescription: res.__('meta.about_ejs_example_advanced.description'),
      pageKeywords:    res.__('meta.about_ejs_example_advanced.keywords')
    };
    console.log('Render attempt: pages-en/about-ejs/example_easy_java_simulation_advanced, locale=', req.locale);
    res.render('pages-en/about-ejs/example_easy_java_simulation_advanced', data);
  },

  O_Ejsu_primer_napredno_2_EN: function(req, res) {
    const data = {
      locale: req.locale,
      pageDescription: res.__('meta.about_ejs_example_advanced_2.description'),
      pageKeywords:    res.__('meta.about_ejs_example_advanced_2.keywords')
    };
    console.log('Render attempt: pages-en/about-ejs/example_easy_java_simulation_advanced_2, locale=', req.locale);
    res.render('pages-en/about-ejs/example_easy_java_simulation_advanced_2', data);
  }

};

module.exports = methods;
