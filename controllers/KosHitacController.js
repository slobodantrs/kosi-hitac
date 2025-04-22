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
	const id = parseInt(req.params.id, 10) || 1;
    // ovi pathi se kasnije koriste u view-u za include
 //   res.path1 = './KosHitac_Contents';
 /*   res.path2 = (id == 1)
      ? './KosHitac_Intro_1'
      : './KosHitac_Intro_2';*/
	  console.log('id=>'+id);
	  res.path1 = './vertikalanHitac_Contents';
    res.path2 = (id == 1)
      ? './vertikalanHitac_Intro_1'
      : './vertikalanHitac_Intro_2';
 //   res.id = id;
	console.log('path 1>'+res.path1);
	console.log('path 2>'+res.path2);
	res.render('pages/ejss_model_KosHitac/vertikalanHitac', res);
   // res.render('pages/ejss_model_KosHitac/KosHitac', res);
  },
  
  
  
  kosHitacContents: function(req, res) {
    res.render('pages/ejss_model_KosHitac/kosHitac_Contents');
  },

 // — ENGLISH VERSION —
KosHitac1_EN: function(req, res) {
  res.render('pages-en/ejss_model_ProjectileMotion/projectileMotion_Intro_1');
},
KosHitac2_EN: function(req, res) {
  res.render('pages-en/ejss_model_ProjectileMotion/projectileMotion_Intro_2');
},
KosHitac_EN: function(req, res) {
  var id = req.params.id;
  res.path1 = './projectileMotion_Contents'; // updated partial path
  res.path2 = (id == 1)
    ? './projectileMotion_Intro_1'
    : './projectileMotion_Intro_2';
  res.id = id;
  res.render('pages-en/ejss_model_ProjectileMotion/projectileMotion', res);
},
kosHitacContents_EN: function(req, res) {
  res.render('pages-en/ejss_model_ProjectileMotion/projectileMotion_Contents');
},
KosHitacSimulacija_EN: function(req, res) {
  res.render('pages-en/ejss_model_ProjectileMotion/projectileMotion_Simulation');
}


};

module.exports = methods;
