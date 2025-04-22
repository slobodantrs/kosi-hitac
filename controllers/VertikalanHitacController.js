// controllers/VertikalanHitacController.js

var methods = {
  // **Српски методи** //

  // Уводне странице
  VertikalanHitac1: function(req, res) {
    res.render('pages/ejss_model_VertikalanHitac/vertikalanHitac_Intro_1');
  },
  VertikalanHitac2: function(req, res) {
    res.render('pages/ejss_model_VertikalanHitac/vertikalanHitac_Intro_2');
  },
  
  


  // Главна динамична страница
  VertikalanHitac: function(req, res) {
    var id = req.params.id || 1;  // ako nije dato, uzmi 1
 //   res.id = id;
 /*   res.path1 = './vertikalanHitac_Contents';
    res.path2 = (id == 2)
      ? './vertikalanHitac_Intro_2'
      : './vertikalanHitac_Intro_1';
    console.log(`U Controleru: Vertikalan hitac kontroler ${id}, ${res.path1}, ${res.path2}`);
	console.log(__dirname);
console.log("Render attempt:", 'pages/ejss_model_VertikalanHitac/vertikalanHitac');*/
console.log("Render attempt:", 'pages/ejss_model_KosHitac/KosHitac');
res.path1 = './vertikalanHitac_Contents';
    res.path2 = (id == 2)
      ? './vertikalanHitac_Intro_2'
      : './vertikalanHitac_Intro_1';
  
	console.log('path 1>'+res.path1);
    res.render('pages/ejss_model_KosHitac/KosHitac', res);

  //  res.render('pages/ejss_model_VertikalanHitac/vertikalanHitac', res);
  },

  VertikalanHitacContents: function(req, res) {
    res.render('pages/ejss_model_VertikalanHitac/vertikalanHitac_Contents');
  },

  VertikalanHitac_Simulation: function(req, res) {
    console.log('Vertikalan hitac simulation');
    res.render('pages/ejss_model_VertikalanHitac/vertikalanHitac_Simulation');
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
  var id = req.params.id;
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
  res.render('pages-en/ejss_model_VerticalThrow/verticalThrow_Simulation');
}

};

module.exports = methods;
