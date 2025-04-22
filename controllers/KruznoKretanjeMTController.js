// controllers/KruznoKretanjeMTController.js
var methods = {

  // — srpska verzija — 
  KruznoKretanjeMT1: function(req, res) {
    res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Intro_1');
  },

  KruznoKretanjeMT2: function(req, res) {
    res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Intro_2');
  },

  KruznoKretanjeMT: function(req, res) {
    var id = req.params.id;
    res.id = = (id == 1);
    res.path1 = './KruznoKretanjeMT_Contents';
    // biramo intro zavisno od id-a
    res.path2 = (id == 2)
      ? './KruznoKretanjeMT_Intro_2'
      : './KruznoKretanjeMT_Intro_1';
    console.log(`Kruž. kretanje kontroler %d, %s, %s`, id, res.path1, res.path2);
    res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT', res);
  },

  KruznoKretanjeMTContents: function(req, res) {
    res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Contents');
  },

  // — ENGLISH VERSION —

  KruznoKretanjeMT1_EN: function(req, res) {
    res.render('pages-en/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Intro_1');
  },

  KruznoKretanjeMT2_EN: function(req, res) {
    res.render('pages-en/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Intro_2');
  },

  KruznoKretanjeMT_EN: function(req, res) {
    var id = req.params.id;
    res.id = id;
    res.path1 = './KruznoKretanjeMT_Contents';   // English partial: kosHitac -> same naming
    res.path2 = (id == 2)
      ? './KruznoKretanjeMT_Intro_2'
      : './KruznoKretanjeMT_Intro_1';
    console.log(`Circular motion EN ctrl %d, %s, %s`, id, res.path1, res.path2);
    res.render('pages-en/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT', res);
  },

  KruznoKretanjeMTContents_EN: function(req, res) {
    res.render('pages-en/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Contents');
  },

  KruznoKretanjeMTSim_EN: function(req, res) {
    res.render('pages-en/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Simulation');
  }

};

module.exports = methods;
