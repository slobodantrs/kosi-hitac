// controllers/KosHitacController.js
var methods = {

  // — srpska verzija — 
  KosHitac1: function(req, res) {
    res.render('pages/ejss_model_KosHitac/KosHitac_Intro_1');
  },
  KosHitac2: function(req, res) {
    res.render('pages/ejss_model_KosHitac/KosHitac_Intro_2');
  },
  KosHitac: function(req, res) {
    var id = req.params.id;
    // ovi pathi se kasnije koriste u view-u za include
    res.path1 = './kosHitac_Contents';
    res.path2 = (id == 1)
      ? './KosHitac_Intro_1'
      : './KosHitac_Intro_2';
    res.id = id;
    res.render('pages/ejss_model_KosHitac/KosHitac', res);
  },
  kosHitacContents: function(req, res) {
    res.render('pages/ejss_model_KosHitac/kosHitac_Contents');
  },

  // — ENGLISH VERSION —
  KosHitac1_EN: function(req, res) {
    res.render('pages-en/ejss_model_KosHitac/KosHitac_Intro_1');
  },
  KosHitac2_EN: function(req, res) {
    res.render('pages-en/ejss_model_KosHitac/KosHitac_Intro_2');
  },
  KosHitac_EN: function(req, res) {
    var id = req.params.id;
    res.path1 = './kosHitac_Contents';       // English partial: pages-en/ejss_model_KosHitac/kosHitac_Contents.ejs
    res.path2 = (id == 1)
      ? './KosHitac_Intro_1'
      : './KosHitac_Intro_2';               // English intros: same filenames under pages-en
    res.id = id;
    res.render('pages-en/ejss_model_KosHitac/KosHitac', res);
  },
  kosHitacContents_EN: function(req, res) {
    res.render('pages-en/ejss_model_KosHitac/kosHitac_Contents');
  },
  KosHitacSimulacija_EN: function(req, res) {
    res.render('pages-en/ejss_model_KosHitac/KosHitac_Simulation');
  }

};

module.exports = methods;
