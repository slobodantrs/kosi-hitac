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
    const data = {
    id: id,
    path1: './KosiHitac_Contents',
    path2: (id === 1)
      ? './KosiHitac_Intro_1'
      : (id === 2)
        ? './KosiHitac_Intro_2'
        : './KosiHitac_Simulation',
    locale: req.locale
  };
	  console.log('id=>'+id);
	  
	 
	console.log('path 1>'+data.path1);
	console.log('path 2>'+data.path2);
console.log('Render attempt:', 'pages/ejss_model_KosiHitac/KosiHitac');
	
   res.render('pages/ejss_model_KosiHitac/KosiHitac', data);
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
  res.render('pages-en/ejss_model_ProjectileMotion/ProjectileMotion_Intro_1');
},
KosHitac2_EN: function(req, res) {
  res.render('pages-en/ejss_model_ProjectileMotion/ProjectileMotion_Intro_2');
},
KosHitac_EN: function(req, res) {
  // parsiraj id iz URL-a, npr. /vertical_throw/:id
  const id = parseInt(req.params.id, 10) || 1;

  // odredi path1 i path2
  const data = {
    id: id,
    path1: './ProjectileMotion_Contents',
    path2: (id === 1)
      ? './ProjectileMotion_Intro_1'
      : (id === 2)
        ? './ProjectileMotion_Intro_2'
        : './ProjectileMotion_Simulation1',
    locale: req.locale
  };

  console.log('ProjectileMotion_EN, id =', id, '→ path2 =', data.path2);
  res.render('pages-en/ejss_model_ProjectileMotion/ProjectileMotion', data);
},

KosHitacContents_EN: function(req, res) {
  res.render('pages-en/ejss_model_ProjectileMotion/ProjectileMotion_Contents');
},
KosHitacSimulacija_EN: function(req, res) {
  res.render('pages-en/ejss_model_ProjectileMotion/ProjectileMotion_Simulation1');
}


};

module.exports = methods;
