// controllers/SlobodanPadController.js

var methods = {
  // **Српски методи** //

  SlobodanPad1: function(req, res) {
	  console.log("SPC: SlobodanPadContents");
    res.render('pages/ejss_model_SlobodanPad/SlobodanPad_Intro_1');
  },
  SlobodanPad2: function(req, res) {
    res.render('pages/ejss_model_SlobodanPad/SlobodanPad_Intro_2');
  },
  SlobodanPad: function(req, res) {
    var id = parseInt(req.params.id, 10) || 1;
    res.id = id;
	console.log("SPC: SlobodanPad"+id);
    res.path1 = './slobodanPad_Contents';
    res.path2 = (id == 2) ? './slobodanPad_Intro_2' : './SlobodanPad_Intro_1';
    console.log(`Slobodan pad kontroler ${id}, ${res.path1}, ${res.path2}`);
    res.render('pages/ejss_model_SlobodanPad/SlobodanPad', {
    id: res.id,
    path1: res.path1,
    path2: res.path2,
    pageDescription: res.__('meta.slobodan_pad.description'),
    pageKeywords: res.__('meta.slobodan_pad.keywords')
  });
  },
  SlobodanPadContents: function(req, res) {
	   console.log("SPC: SlobodanPadContents");
    res.render('pages/ejss_model_SlobodanPad/SlobodanPad_Contents');
  },
  SlobodanPadSimulacija: function(req, res) {
	  console.log("SPC: SlobodanPadSimulacija");
    res.render('pages/ejss_model_SlobodanPad/SlobodanPad_Simulation');
  },

  // **English methods** //

  // Free Fall Intro pages
  SlobodanPad1_EN: function(req, res) {
	 
    res.render('pages-en/ejss_model_FreeFall/FreeFall_Intro_1');
  },

  SlobodanPad2_EN: function(req, res) {
    res.render('pages-en/ejss_model_FreeFall/FreeFall_Intro_2');
  },

  // Free Fall main page (dynamic)
  SlobodanPad_EN: function(req, res) {
    const id = parseInt(req.params.id, 10) || 1;
    res.id = id;
	console.log("SPC: SlobodanPad_EN"+id);
    res.path1 = './freeFall_Contents';
    res.path2 = (id === 2)
      ? './freeFall_Intro_2'
      : './freeFall_Intro_1';
    console.log(`Free fall controller EN ${id}, ${res.path1}, ${res.path2}`);
    res.render('pages-en/ejss_model_FreeFall/FreeFall', {
    id: res.id,
    path1: res.path1,
    path2: res.path2,
    pageDescription: res.__('meta.free_fall.description'),
    pageKeywords: res.__('meta.free_fall.keywords')
  });
  },

  // Free Fall contents
  SlobodanPadContents_EN: function(req, res) {
    res.render('pages-en/ejss_model_FreeFall/FreeFall_Contents');
  },

  // Free Fall simulation
  SlobodanPadSimulacija_EN: function(req, res) {
	  console.log("SPC: SlobodanPadSimulacija_EN");
    res.render('pages-en/ejss_model_FreeFall/FreeFall_Simulation');
  }
};

module.exports = methods;

