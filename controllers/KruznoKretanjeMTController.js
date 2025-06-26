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
    const id = parseInt(req.params.id, 10) || 1;
    // ovi pathi se kasnije koriste u view-u za include
    const data = {
    id: id,
    path1: './KruznoKretanjeMT_Contents',
    path2: (id === 1)
      ? './KruznoKretanjeMT_Intro_1'
      : (id === 2)
        ? './KruznoKretanjeMT_Intro_2'
        : './KruznoKretanjeMT_Simulation',
    locale: req.locale,	
	pageDescription: res.__('meta.kruzno_kretanje.description'),
      pageKeywords:    res.__('meta.kruzno_kretanje.keywords')
  };
	  console.log('id=>'+id);
	  
	 
	console.log('path 1>'+data.path1);
	console.log('path 2>'+data.path2);
console.log('Render attempt:', 'pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT');
 
    res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT', data);
  },

  KruznoKretanjeMTContents: function(req, res) {
    res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Contents');
  },
   KruznoKretanjeMT_Simulation: function(req, res) {
    console.log('KruznoKretanjeMT_Simulation simulation');
	
    // ovi pathi se kasnije koriste u view-u za include
 
	 
	  res.path1 = './KruznoKretanjeMT_Contents';
   
   

	
    res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Simulation',res);
  },
  

   // — ENGLISH VERSION —
  KruznoKretanjeMT1_EN: function(req, res) {
    // страница Intro 1
    res.render('pages-en/ejss_model_CircularMotionMT/CircularMotionMT_Intro_1');
  },

  KruznoKretanjeMT2_EN: function(req, res) {
    // страница Intro 2
    res.render('pages-en/ejss_model_CircularMotionMT/CircularMotionMT_Intro_2');
  },

  KruznoKretanjeMT_EN: function(req, res) {
    // основна динамичка страница
    const id = parseInt(req.params.id, 10) || 1;  // ако није prosleђено, узми 1
    const data = {
    id: id,
    path1: './CircularMotionMT_Contents',
    path2: (id === 1)
      ? './CircularMotionMT_Intro_1'
      : (id === 2)
        ? './CircularMotionMT_Intro_2'
        : './CircularMotionMT_Simulation',
    locale: req.locale,
	pageDescription: res.__('meta.circular_motion.description'),
      pageKeywords:    res.__('meta.circular_motion.keywords')
  };

    console.log(`Circular motion EN ctrl ${id}, ${data.path1}, ${data.path2}`);

    // главни EJS шаблон
    res.render('pages-en/ejss_model_CircularMotionMT/CircularMotionMT', data);
  },

  KruznoKretanjeMTContents_EN: function(req, res) {
    // садржај странице (partials)
    res.render('pages-en/ejss_model_CircularMotionMT/CircularMotionMT_Contents');
  },

  KruznoKretanjeMT_Simulation_EN: function(req, res) {
    // страница симулације
    res.render('pages-en/ejss_model_CircularMotionMT/CircularMotionMT_Simulation');
  }

};

module.exports = methods;
