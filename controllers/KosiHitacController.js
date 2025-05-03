// controllers/KosHitacController.js
var methods = {

  // — srpska verzija — 
  KosiHitac1: function(req, res) {
    res.render('pages/ejss_model_KosiHitac/KosiHitac_Intro_1');
  },
  KosiHitac2: function(req, res) {
    res.render('pages/ejss_model_KosiHitac/KosiHitac_Intro_2');
  },
  
  
  KosiHitac: function(req, res) {
   
	const id = parseInt(req.params.id, 10) || 1;
    // ovi pathi se kasnije koriste u view-u za include
    res.path1 = './KosiHitac_Contents';
    res.path2 = (id == 1)
      ? './KosiHitac_Intro_1'
      : './KosiHitac_Intro_2';
	  console.log('id=>'+id);
	 
	console.log('path 1>'+res.path1);
	console.log('path 2>'+res.path2);
console.log('Render attempt:', 'pages/ejss_model_KosiHitac/KosiHitac');
	
   res.render('pages/ejss_model_KosiHitac/KosiHitac', res);
  },
  
  
  
  KosiHitacContents: function(req, res) {
    res.render('pages/ejss_model_KosiHitac/KosiHitac_Contents');
  },
  KosiHitac_Simulation: function(req, res) {
    console.log('Kosi hitac simulation');
	
    // ovi pathi se kasnije koriste u view-u za include
 
	 
	  res.path1 = './KosiHitac_Contents';
   
   
	console.log('path 1>'+res.path1);
	
    res.render('pages/ejss_model_KosiHitac/KosiHitac_Simulation',res);
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
