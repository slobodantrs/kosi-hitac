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
  EJS_intro_EN: function(req, res) {
    // Uvod u Easy Java Simulation
    res.render('pages-en/upotrebaEJS-a/description_easy_java_simulation');
  },

  EJS_example_EN: function(req, res) {
    // Basic example of EJSS application
    res.render('pages-en/upotrebaEJS-a/example_easy_java_simulation');
  },

  EJS_example_advanced_EN: function(req, res) {
    // Advanced EJSS application tutorial
    res.render('pages-en/upotrebaEJS-a/example_easy_java_simulation_advanced');
  },

  EJS_example_advanced2_EN: function(req, res) {
    // Further advanced EJSS tutorial
    res.render('pages-en/upotrebaEJS-a/example_easy_java_simulation_advanced_2');
  },

  EJS_p5js_intro_EN: function(req, res) {
    // Introduction to p5.js in EJS context
    res.render('pages-en/upotrebaEJS-a/description_p5js');
  }
};

module.exports = methods;