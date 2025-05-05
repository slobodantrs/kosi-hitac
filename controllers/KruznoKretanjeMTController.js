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
    locale: req.locale
  };
	  console.log('id=>'+id);
	  
	 
	console.log('path 1>'+data.path1);
	console.log('path 2>'+data.path2);
console.log('Render attempt:', 'pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT');
 
    res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT', res);
  },

  KruznoKretanjeMTContents: function(req, res) {
    res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Contents');
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
    res.id = id;

    // oве путanje користиш у view-у са <% include(path1) %>
    res.path1 = './CircularMotionMT_Contents';
    res.path2 = id === 2
      ? './CircularMotionMT_Intro_2'
      : './CircularMotionMT_Intro_1';

    console.log(`Circular motion EN ctrl ${id}, ${res.path1}, ${res.path2}`);

    // главни EJS шаблон
    res.render('pages-en/ejss_model_CircularMotionMT/CircularMotionMT', res);
  },

  KruznoKretanjeMTContents_EN: function(req, res) {
    // садржај странице (partials)
    res.render('pages-en/ejss_model_CircularMotionMT/CircularMotionMT_Contents');
  },

  KruznoKretanjeMTSim_EN: function(req, res) {
    // страница симулације
    res.render('pages-en/ejss_model_CircularMotionMT/CircularMotionMT_Simulation');
  }

};

module.exports = methods;
