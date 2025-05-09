// controllers/MasaIOprugaController.js
var methods = {

  // — SRPSKA VERZIJA —
  MasaIOpruga1: function(req, res) {
    console.log("MIP: MasaIOpruga1");
    res.render('pages/ejss_model_MasaIOpruga/MasaIOpruga_Intro_1');
  },

  MasaIOpruga2: function(req, res) {
    console.log("MIP: MasaIOpruga2");
    res.render('pages/ejss_model_MasaIOpruga/MasaIOpruga_Intro_2');
  },

  MasaIOpruga: function(req, res) {
    console.log("MIP: MasaIOpruga");
    const id = parseInt(req.params.id, 10) || 1;
    const data = {
      id: id,
      path1: './MasaIOpruga_Contents',
      path2: (id === 1)
        ? './MasaIOpruga_Intro_1'
        : (id === 2)
          ? './MasaIOpruga_Intro_2'
          : './MasaIOpruga_Simulation',
      locale: req.locale
    };
    console.log('id=>' + id);
    console.log('path1>' + data.path1);
    console.log('path2>' + data.path2);
    console.log('Render attempt:', 'pages/ejss_model_MasaIOpruga/MasaIOpruga');
    res.render('pages/ejss_model_MasaIOpruga/MasaIOpruga', data);
  },

  MasaIOprugaContents: function(req, res) {
    console.log("MIP: MasaIOprugaContents");
    res.render('pages/ejss_model_MasaIOpruga/MasaIOpruga_Contents');
  },

  MasaIOpruga_Simulation: function(req, res) {
    console.log('MIP: MasaIOpruga_Simulation');
    res.path1 = './MasaIOpruga_Contents';
    res.render('pages/ejss_model_MasaIOpruga/MasaIOpruga_Simulation', res);
  },

  // — ENGLISH VERSION —
  MasaIOpruga1_EN: function(req, res) {
    console.log("MIP: MasaIOpruga1_EN");
    res.render('pages-en/ejss_model_MassAndSpring/MassAndSpring_Intro_1');
  },

  MasaIOpruga2_EN: function(req, res) {
    console.log("MIP: MasaIOpruga2_EN");
    res.render('pages-en/ejss_model_MassAndSpring/MassAndSpring_Intro_2');
  },

  MasaIOpruga_EN: function(req, res) {
    console.log("MIP: MasaIOpruga_EN");
    const id = parseInt(req.params.id, 10) || 1;
    const data = {
      id: id,
      path1: './MassAndSpring_Contents',
      path2: (id === 1)
        ? './MassAndSpring_Intro_1'
        : (id === 2)
          ? './MassAndSpring_Intro_2'
          : './MassAndSpring_Simulation',
      locale: req.locale
    };
    console.log('EN id=>' + id, 'path1>' + data.path1, 'path2>' + data.path2);
    res.render('pages-en/ejss_model_MassAndSpring/MassAndSpring', data);
  },

  MasaIOprugaContents_EN: function(req, res) {
    console.log("MIP: MasaIOprugaContents_EN");
    res.render('pages-en/ejss_model_MassAndSpring/MassAndSpring_Contents');
  },

  MasaIOpruga_Simulation_EN: function(req, res) {
    console.log('MIP: MasaIOpruga_Simulation_EN');
    res.render('pages-en/ejss_model_MassAndSpring/MassAndSpring_Simulation');
  }
};

module.exports = methods;
