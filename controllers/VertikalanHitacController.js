// controllers/VertikalanHitacController.js

var methods = {
  // **Српски методи** //

  // Уводне странице
  VertikalanHitac1: function(req, res) {
    res.render('pages/ejss_model_VertikalniHitac/VertikalanHitac_Intro_1');
  },
  VertikalanHitac2: function(req, res) {
    res.render('pages/ejss_model_VertikalniHitac/VertikalanHitac_Intro_2');
  },
  
  

  

  // Главна динамична страница
  VertikalanHitac: function(req, res) {
   const id = parseInt(req.params.id, 10) || 1;
const data = {
  id: id,
  path1: './VertikalanHitac_Contents',
  path2: (id == 1) ? './VertikalanHitac_Intro_1' : './VertikalanHitac_Intro_2',
  locale: req.locale // ili uzmi iz req.locale ako koristiš i18n
};

console.log('Render attempt:', 'pages/ejss_model_VertikalniHitac/VertikalanHitac');
res.render('pages/ejss_model_VertikalniHitac/VertikalanHitac', data);

  },

  VertikalanHitacContents: function(req, res) {
    res.render('pages/ejss_model_VertikalniHitac/VertikalanHitac_Contents');
  },

  VertikalanHitac_Simulation: function(req, res) {
    console.log('Vertikalni hitac simulation');
	
    // ovi pathi se kasnije koriste u view-u za include
 
	 
	  res.path1 = './VertikalanHitac_Contents';
   
   
	console.log('path 1>'+res.path1);
	
    res.render('pages/ejss_model_VertikalniHitac/VertikalanHitac_Simulation',res);
  },


 // **English methods** //

// Intro pages
VertikalanHitac1_EN: function(req, res) {
  res.render('pages-en/ejss_model_VerticalThrow/VerticalThrow_Intro_1');
},
VertikalanHitac2_EN: function(req, res) {
  res.render('pages-en/ejss_model_VerticalThrow/VerticalThrow_Intro_2');
},

// Main dynamic page
VertikalanHitac_EN: function(req, res) {
  const id = parseInt(req.params.id, 10) || 1;
  
	
	const data = {
  id: id,
  path1: './VerticalThrow_Contents',
  path2: (id == 1) ? './VerticalThrow_Intro_1' : './VerticalThrow_Intro_2',
  locale: req.locale // ili uzmi iz req.locale ako koristiš i18n
};

  console.log(`Vertical throw controller EN ${id}, ${data.path1}, ${data.path2}`);
  res.render('pages-en/ejss_model_VerticalThrow/VerticalProjectile', data);
},

// Contents page
VertikalanHitacContents_EN: function(req, res) {
	console.log(`VertikalanHitacContents_EN`);
  res.render('pages-en/ejss_model_VerticalThrow/VerticalThrow_Contents');
},

// Simulation page
VertikalanHitac_Simulation_EN: function(req, res) {
	res.path1 = './VertikalanHitac_Contents';
   
   
	console.log('path 1>'+res.path1);
  res.render('pages-en/ejss_model_VerticalThrow/VerticalThrow_Simulation',res);
}

};

module.exports = methods;
