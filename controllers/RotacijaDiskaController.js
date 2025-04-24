var methods = {

  // — SRPSKA VERZIJA —
  RotacijaDiska1: function(req, res) {
    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska_Intro_1');
  },

  RotacijaDiska2: function(req, res) {
    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska_Intro_2');
  },
  RotacijaDiska3: function(req, res) {
    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska_Intro_3');
  },

  RotacijaDiska4: function(req, res) {
    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska_Intro_4');
  },


  RotacijaDiska: function(req, res) {
    const id = parseInt(req.params.id, 10) || 1;

    res.path1 = './RotacijaDiska_Contents';
    res.path2 = (id == 1)
      ? './RotacijaDiska_Intro_1'
      : './RotacijaDiska_Intro_2';
    console.log('id => ' + id);
    console.log('path 1 > ' + res.path1);
    console.log('path 2 > ' + res.path2);

    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska', res);
  },

  rotacijaDiskaContents: function(req, res) {
    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska_Contents');
  },
  
  RotacijaDiskaSimulacija: function(req, res) {
    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska_Simulation');
  },


  // — ENGLISH VERSION —
  RotacijaDiska1_EN: function(req, res) {
    res.render('pages-en/ejss_model_DiskRotation/DiskRotation_Intro_1');
  },

  RotacijaDiska2_EN: function(req, res) {
    res.render('pages-en/ejss_model_DiskRotation/DiskRotation_Intro_2');
  },
  RotacijaDiska2_EN: function(req, res) {
    res.render('pages-en/ejss_model_DiskRotation/DiskRotation_Intro_3');
  },

  RotacijaDiska3_EN: function(req, res) {
    res.render('pages-en/ejss_model_DiskRotation/DiskRotation_Intro_4');
  },

  RotacijaDiska_EN: function(req, res) {
    var id = req.params.id;

    res.path1 = './DiskRotation_Contents';
    res.path2 = (id == 1)
      ? './diskRotation_Intro_1'
      : './diskRotation_Intro_2';
    res.id = id;

    res.render('pages-en/ejss_model_DiskRotation/DiskRotation', res);
  },

  RotacijaDiskaContents_EN: function(req, res) {
    res.render('pages-en/ejss_model_DiskRotation/DiskRotation_Contents');
  },

  RotacijaDiskaSimulacija_EN: function(req, res) {
    res.render('pages-en/ejss_model_DiskRotation/DiskRotation_Simulation');
  },
  

};

module.exports = methods;
