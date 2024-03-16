
   
const express = require('express');
const router = express.Router();


 // index page 
 router.get('/', function(req, res) {
	console.log(`Correct!!!!!`);
	res.render('pages/index');
    //res.render('pages/ejss_model_MassAndSpring/MassAndSpring_Simulation.xhtml');
});

// index page of test
 router.get('/test', function(req, res) {
	console.log(`Correct!!!!!`);
	res.render('pages/testHTML5/index');
    //res.render('pages/ejss_model_MassAndSpring/MassAndSpring_Simulation.xhtml');
});

router.get('/simulacija_Masa_i_Opruga', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_MassAndSpring/MassAndSpring_Simulation');
});
router.get('/simulacija_Masa_i_Opruga/MassAndSpring_Intro_1', function(req, res) {
	console.log(`simulacija_Masa_i_Opruga/MassAndSpring_Intro_1!!!!!`);
	
    res.render('pages/ejss_model_MassAndSpring/MassAndSpring_Intro_1');
});
router.get('/simulacija_Masa_i_Opruga/MassAndSpring_Intro_2', function(req, res) {
	console.log(`Correct!!!!!`);
	
    res.render('pages/ejss_model_MassAndSpring/MassAndSpring_Intro_2');
});

// about page 
var OpsteController = require('../controllers/OpsteController');
 router.get('/o_ejsu', OpsteController.O_Ejsu);
 router.get('/o_ejsu_primer', OpsteController.O_Ejsu_primer);
 router.get('/o_ejsu_primer_napredno', OpsteController.O_Ejsu_primer_napredno);
 router.get('/o_ejsu_primer_napredno_2', OpsteController.O_Ejsu_primer_napredno_2);
 
 //Slobodan pad
var SlobodanPadController = require('../controllers/SlobodanPadController');
 router.get('/slobodan_Pad', SlobodanPadController.SlobodanPad);
router.get('/slobodan_Pad/:id', SlobodanPadController.SlobodanPad);
router.get('/contents_Slobodan_Pad', SlobodanPadController.SlobodanPadContents);
router.get('/SlobodanPad_Intro_1', SlobodanPadController.SlobodanPad1);
router.get('/SlobodanPad_2', SlobodanPadController.SlobodanPad2);
router.get('/simulacija_Slobodan_Pad',SlobodanPadController.SlobodanPadSimulacija);

//Vertikalan hitac
var VertikalanHitacController = require('../controllers/VertikalanHitacController');
 router.get('/vertikalan_Hitac', VertikalanHitacController.VertikalanHitac);
router.get('/vertikalan_Hitac/:id', VertikalanHitacController.VertikalanHitac);
router.get('/contents_Vertikalan_Hitac', VertikalanHitacController.VertikalanHitacContents);
router.get('/VertikalanHitac_Intro_1', VertikalanHitacController.VertikalanHitac1);
router.get('/VertikalanHitac_Intro_2', VertikalanHitacController.VertikalanHitac2);
router.get('/simulacija_Vertikalan_Hitac', VertikalanHitacController.VertikalanHitac_Simulation);
/*router.get('/simulacija_Vertikalan_Hitac', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_vertikalanHitac/vertikalanHitac_Simulation');
});*/

//Kos hitac
var KosHitacController = require('../controllers/KosHitacController');
 router.get('/kos_Hitac', KosHitacController.KosHitac);
router.get('/kos_Hitac/:id', KosHitacController.KosHitac);
router.get('/contents_Kos_Hitac', KosHitacController.kosHitacContents);
router.get('/KosHitac_Intro_1', KosHitacController.KosHitac1);
router.get('/KosHitac_Intro_2', KosHitacController.KosHitac2);

router.get('/simulacija_Kos_Hitac', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_KosHitac/KosHitac_Simulation');
});

//Kružno kretanje materijalne tačke
/*router.get('/Kruzno_Kretanje_MT', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT');
});
router.get('/contents_Kruzno_Kretanje_MT', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_KruznoKretanjeMT/Kruzno_Kretanje_MT_Contents');
});
router.get('/Kruzno_Kretanje_MT_Intro_1', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Intro_1');
});*/


var KruznoKretanjeMTController = require('../controllers/KruznoKretanjeMTController');
 router.get('/Kruzno_Kretanje_MT', KruznoKretanjeMTController.KruznoKretanjeMT);
router.get('/Kruzno_Kretanje_MT/:id', KruznoKretanjeMTController.KruznoKretanjeMT);
router.get('/contents_Kruzno_Kretanje_MT', KruznoKretanjeMTController.KruznoKretanjeMTContents);
router.get('/Kruzno_Kretanje_MT_Intro_1', KruznoKretanjeMTController.KruznoKretanjeMT1);
router.get('/Kruzno_Kretanje_MT_Intro_2', KruznoKretanjeMTController.KruznoKretanjeMT2);

router.get('/simulacija_Kruzno_Kretanje_MT', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Simulation');
});


//Rotacija diska
router.get('/Rotacija_Diska', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska');
});
router.get('/contents_Rotacija_Diska', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska_Contents');
});
router.get('/simulacija_Rotacija_Diska', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska_Simulation');
});
router.get('/Rotacija_Diska_Intro_1', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska_Intro_1');
});
router.get('/Rotacija_Diska_Intro_2', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska_Intro_2');
});
router.get('/Rotacija_Diska_Intro_3', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska_Intro_3');
});
router.get('/Rotacija_Diska_Intro_4', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_RotacijaDiska/RotacijaDiska_Intro_4');
});

//Ravno kretanje tocka
router.get('/RavnoKretanjeTocka', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_RavnoKretanjeTocka/RavnoKretanjeTocka');
});
router.get('/contents_RavnoKretanjeTocka', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_RavnoKretanjeTocka/RavnoKretanjeTocka_Contents');
});
router.get('/simulacija_RavnoKretanjeTocka', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_RavnoKretanjeTocka/RavnoKretanjeTocka_Simulation');
});
router.get('/RavnoKretanjeTocka_Intro', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_RavnoKretanjeTocka/RavnoKretanjeTocka_Intro');
});
router.get('/RavnoKretanjeTocka_Intro_1', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_RavnoKretanjeTocka/RavnoKretanjeTocka_Intro_1');
});
router.get('/RavnoKretanjeTocka_Intro_2', function(req, res) {
	console.log(`Correct!!!!!`);
	//res.render('pages/simulacija');
    res.render('pages/ejss_model_RavnoKretanjeTocka/RavnoKretanjeTocka_Intro_2');
});
const path = require('path');
const options = {
  root: path.join(__dirname, '/static'),
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
  }
};
router.get('/robots.txt', (req, res) => (
  res.status(200).sendFile('robots.txt', options)
));
router.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: /");
});
router.get('/sitemap.xml', function(req, res) {
res.sendFile('sitemap.xml');
});



module.exports = router;

  
   





