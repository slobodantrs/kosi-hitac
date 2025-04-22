// controllers/OpsteController.js
var methods = {
  // --- Srpski ---
  O_Ejsu: function(req, res) {
    res.render('pages/upotrebaEJS-a/opis_easy_java_simulation');
  },

  O_Ejsu_primer: function(req, res) {
    res.render('pages/upotrebaEJS-a/primer_easy_java_simulation');
  },

  O_Ejsu_primer_napredno: function(req, res) {
    res.render('pages/upotrebaEJS-a/primer_easy_java_simulation_napredno');
  },

  O_Ejsu_primer_napredno_2: function(req, res) {
    res.render('pages/upotrebaEJS-a/primer_easy_java_simulation_napredno_2');
  },

  O_Ejsu_opis: function(req, res) {
    res.render('pages/upotrebaEJS-a/opis_p5js');
  },

  // --- English ---
  O_Ejsu_EN: function(req, res) {
    res.render('pages-en/upotrebaEJS-a/opis_easy_java_simulation');
  },
  O_Ejsu_primer_EN: function(req, res) {
    res.render('pages-en/upotrebaEJS-a/example_easy_java_simulation');
  },

  O_Ejsu_primer_napredno_EN: function(req, res) {
    res.render('pages-en/upotrebaEJS-a/example_easy_java_simulation_advanced');
  },

  O_Ejsu_primer_napredno_2_EN: function(req, res) {
    res.render('pages-en/upotrebaEJS-a/example_easy_java_simulation_advanced_2');
  },

  O_Ejsu_opis_EN: function(req, res) {
    res.render('pages-en/upotrebaEJS-a/description_p5js');
  }
};

module.exports = methods;