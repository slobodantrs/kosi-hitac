// controllers/SlobodanPadController.js

var methods = {
  // **Српски методи** //

  SlobodanPad1: function(req, res) {
    res.render('pages/ejss_model_SlobodanPad/slobodanPad_Intro_1');
  },
  SlobodanPad2: function(req, res) {
    res.render('pages/ejss_model_SlobodanPad/slobodanPad_Intro_2');
  },
  SlobodanPad: function(req, res) {
    var id = req.params.id;
    res.id = id;
    res.path1 = './slobodanPad_Contents';
    res.path2 = (id == 2) ? './slobodanPad_Intro_2' : './slobodanPad_Intro_1';
    console.log(`Slobodan pad kontroler ${id}, ${res.path1}, ${res.path2}`);
    res.render('pages/ejss_model_SlobodanPad/slobodanPad', res);
  },
  SlobodanPadContents: function(req, res) {
    res.render('pages/ejss_model_SlobodanPad/slobodanPad_Contents');
  },
  SlobodanPadSimulacija: function(req, res) {
    res.render('pages/ejss_model_SlobodanPad/SlobodanPad_Simulation');
  },

  // **English methods** //

  // Free Fall Intro pages
  SlobodanPad1_EN: function(req, res) {
    res.render('pages-en/ejss_model_SlobodanPad/freeFall_Intro_1');
  },
  SlobodanPad2_EN: function(req, res) {
    res.render('pages-en/ejss_model_SlobodanPad/freeFall_Intro_2');
  },

  // Free Fall main page (dynamic)
  SlobodanPad_EN: function(req, res) {
    var id = req.params.id;
    res.id = id;
    // u engleskom content folderu smo nazvali fajlove freeFall_...
    res.path1 = './freeFall_Contents';
    res.path2 = (id == 2) ? './freeFall_Intro_2' : './freeFall_Intro_1';
    console.log(`Free fall controller EN ${id}, ${res.path1}, ${res.path2}`);
    res.render('pages-en/ejss_model_SlobodanPad/freeFall', res);
  },

  // Free Fall contents
  SlobodanPadContents_EN: function(req, res) {
    res.render('pages-en/ejss_model_SlobodanPad/freeFall_Contents');
  },
  // Free Fall simulation
  SlobodanPadSimulacija_EN: function(req, res) {
    res.render('pages-en/ejss_model_SlobodanPad/FreeFall_Simulation');
  }
};

module.exports = methods;

