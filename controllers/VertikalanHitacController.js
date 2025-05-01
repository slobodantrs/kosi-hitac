// controllers/VertikalanHitacController.js

var methods = {
  // **Српски методи** //

  // Уводне странице
  VertikalanHitac1: function(req, res) {
    res.render('pages/ejss_model_VertikalanHitac/VertikalanHitac_Intro_1');
  },
  VertikalanHitac2: function(req, res) {
    res.render('pages/ejss_model_VertikalanHitac/VertikalanHitac_Intro_2');
  },
  
  


  // Главна динамична страница
  VertikalanHitac: function(req, res) {
   const id = parseInt(req.params.id, 10) || 1;
    // ovi pathi se kasnije koriste u view-u za include
 
	  console.log('Controller VertikalanHitac, id=>'+id);
	  res.path1 = './VertikalanHitac_Contents';
    res.path2 = (id == 1)
      ? './VertikalanHitac_Intro_1'
      : './VertikalanHitac_Intro_2';
    res.id = id;
	  console.log('id=>'+id);
	console.log('path 1>'+res.path1);
	console.log('path 2>'+res.path2);
	
console.log("Render attempt:", 'pages/ejss_model_VertikalanHitac/VertikalanHitac');

   
	
   res.render('pages/ejss_model_VertikalanHitac/VertikalanHitac', res);
  },

  VertikalanHitacContents: function(req, res) {
    res.render('pages/ejss_model_VertikalanHitac/VertikalanHitac_Contents');
  },

  VertikalanHitac_Simulation: function(req, res) {
    console.log('Vertikalan hitac simulation');
	
    // ovi pathi se kasnije koriste u view-u za include
 
	 
	  res.path1 = './VertikalanHitac_Contents';
   
   
	console.log('path 1>'+res.path1);
	
    res.render('pages/ejss_model_VertikalanHitac/VertikalanHitac_Simulation',res);
  },


 // **English methods** //

// Intro pages
VertikalanHitac1_EN: function(req, res) {
  res.render('pages-en/ejss_model_VerticalThrow/verticalThrow_Intro_1');
},
VertikalanHitac2_EN: function(req, res) {
  res.render('pages-en/ejss_model_VerticalThrow/verticalThrow_Intro_2');
},

// Main dynamic page
VertikalanHitac_EN: function(req, res) {
  const id = parseInt(req.params.id, 10) || 1;
  res.id = id;
  res.path1 = './verticalThrow_Contents';
  res.path2 = (id == 2)
    ? './verticalThrow_Intro_2'
    : './verticalThrow_Intro_1';
  console.log(`Vertical throw controller EN ${id}, ${res.path1}, ${res.path2}`);
  res.render('pages-en/ejss_model_VerticalThrow/verticalThrow', res);
},

// Contents page
VertikalanHitacContents_EN: function(req, res) {
  res.render('pages-en/ejss_model_VerticalThrow/verticalThrow_Contents');
},

// Simulation page
VertikalanHitac_Simulation_EN: function(req, res) {
	res.path1 = './vertikalanHitac_Contents';
   
   
	console.log('path 1>'+res.path1);
  res.render('pages-en/ejss_model_VerticalThrow/verticalThrow_Simulation',res);
}

};

module.exports = methods;
