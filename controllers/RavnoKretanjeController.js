// RavnoKretanjeController.js

const methods = {
  // — SRPSKA VERZIJA —
  RavnoKretanje1: function(req, res) {
    console.log("RKC: RavnoKretanje1");
    res.render('pages/ejss_model_RavnoKretanje/RavnoKretanje_Intro_1');
  },

  RavnoKretanje2: function(req, res) {
    console.log("RKC: RavnoKretanje2");
    res.render('pages/ejss_model_RavnoKretanje/RavnoKretanje_Intro_2');
  },

  RavnoKretanje3: function(req, res) {
    console.log("RKC: RavnoKretanje3");
    res.render('pages/ejss_model_RavnoKretanje/RavnoKretanje_Intro_3');
  },
  

  RavnoKretanje: function(req, res) {
    console.log("RKC: RavnoKretanje");
    const id = parseInt(req.params.id, 10) || 1;

    const data = {
    id: id,
    path1: './RavnoKretanje_Contents',
    path2: (id === 1)
      ? './RavnoKretanje_Intro_1'
      : (id === 2)
        ? './RavnoKretanje_Intro_2'
        : './RavnoKretanje_Simulation',
    locale: req.locale
  };

    console.log('id => ' + id);
    console.log('path1 > ' + data.path1);
    console.log('path2 > ' + data.path2);

    res.render('pages/ejss_model_RavnoKretanje/RavnoKretanje', data);
  },

  RavnoKretanjeContents: function(req, res) {
    console.log("RKC: RavnoKretanjeContents");
    res.render('pages/ejss_model_RavnoKretanje/RavnoKretanje_Contents');
  },

  RavnoKretanjeSimulacija: function(req, res) {
    console.log("RKC: RavnoKretanjeSimulacija");
    res.render('pages/ejss_model_RavnoKretanje/RavnoKretanje_Simulation');
  },

  // — ENGLISH VERSION —
  RavnoKretanje1_EN: function(req, res) {
    console.log("RKC: RavnoKretanje1_EN");
    res.render('pages-en/ejss_model_RigidBodyMotion/rigidBodyMotion_Intro_1');
  },

  RavnoKretanje2_EN: function(req, res) {
    console.log("RKC: RavnoKretanje2_EN");
    res.render('pages-en/ejss_model_RigidBodyMotion/RigidBodyMotion_Intro_2');
  },

  RavnoKretanje3_EN: function(req, res) {
    console.log("RKC: RavnoKretanje3_EN");
    res.render('pages-en/ejss_model_RigidBodyMotion/RigidBodyMotion_Intro_3');
  },
 

  RavnoKretanje_EN: function(req, res) {
    console.log("RKC: RavnoKretanje_EN");
    const id = parseInt(req.params.id, 10) || 1;
    

 const data = {
    id: id,
    path1: './RigidBodyMotion_Contents',
    path2: (id === 1)
      ? './RigidBodyMotion_Intro_1'
      : (id === 2)
        ? './RigidBodyMotion_Intro_2'
        : './RigidBodyMotion_Simulation',
    locale: req.locale
  };

    console.log('EN id => ' + id);
    console.log('EN path1 > ' + data.path1);
    console.log('EN path2 > ' + data.path2);

    res.render('pages-en/ejss_model_RigidBodyMotion/RigidBodyMotion', data);
  },

  RavnoKretanjeContents_EN: function(req, res) {
    console.log("RKC: RavnoKretanjeContents_EN");
    res.render('pages-en/ejss_model_RigidBodyMotion/RigidBodyMotion_Contents');
  },

  RavnoKretanjeSimulacija_EN: function(req, res) {
    console.log("RKC: RavnoKretanjeSimulacija_EN");
    res.render('pages-en/ejss_model_RigidBodyMotion/RigidBodyMotion_Simulation');
  }
};

module.exports = methods;
