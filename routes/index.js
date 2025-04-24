
   
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

 
 // p5js 
var P5jsController = require('../controllers/P5JSController');
 router.get('/p5js', P5jsController.Uvod_u_p5js);
 router.get('/animacija_kruznog_kretanja', P5jsController.Animacija_kruznog_kretanja);
 router.get('/klizanje_tela_niz_strmu_ravan', P5jsController.Klizanje_tela_niz_strmu_ravan);
 
 
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
console.log(`VertikalanHitacController u index.js: `+VertikalanHitacController);
 router.get('/vertikalan_Hitac', VertikalanHitacController.VertikalanHitac);
router.get('/vertikalan_Hitac/:id', VertikalanHitacController.VertikalanHitac);
router.get('/contents_Vertikalan_Hitac', VertikalanHitacController.VertikalanHitacContents);
router.get('/VertikalanHitac_Intro_1', VertikalanHitacController.VertikalanHitac1);
router.get('/VertikalanHitac_Intro_2', VertikalanHitacController.VertikalanHitac2);
router.get('/simulacija_Vertikalan_Hitac', VertikalanHitacController.VertikalanHitac_Simulation);


//Kos hitac
var KosHitacController = require('../controllers/KosHitacController');
console.log(`KosHitacController u index.js: `+KosHitacController);
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

//Kružno kretanje
var KruznoKretanjeMTController = require('../controllers/KruznoKretanjeMTController');
console.log(`KruznoKretanjeMTController u index.js: `+KruznoKretanjeMTController);
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

// Rotacija diska
var RotacijaDiskaController = require('../controllers/RotacijaDiskaController');
console.log(`RotacijaDiskaController u index.js: `+RotacijaDiskaController);
router.get('/rotacija_diska', RotacijaDiskaController.RotacijaDiska);
router.get('/rotacija_diska/:id', RotacijaDiskaController.RotacijaDiska);
router.get('/contents_rotacija_diska', RotacijaDiskaController.RotacijaDiskaContents);
router.get('/RotacijaDiska_Intro_1', RotacijaDiskaController.RotacijaDiska1);
router.get('/RotacijaDiska_Intro_2', RotacijaDiskaController.RotacijaDiska2);
router.get('/RotacijaDiska_Intro_3', RotacijaDiskaController.RotacijaDiska3);
router.get('/RotacijaDiska_Intro_4', RotacijaDiskaController.RotacijaDiska4)
router.get('/simulacija_Rotacija_Diska', RotacijaDiskaController.RotacijaDiskaSimulacija);


//Rotacija diska
/*
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
*/
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
console.log('RavnoKretanjeTocka_Intro_2');

router.get('/en', function(req, res) {
	
	res.render('pages-en/index');
    
});
// English - Mass and Spring
router.get('/en/simulation_MassAndSpring', function(req, res) {
    res.render('pages-en/ejss_model_MassAndSpring/MassAndSpring_Simulation');
});
router.get('/en/simulation_MassAndSpring/Intro_1', function(req, res) {
    res.render('pages-en/ejss_model_MassAndSpring/MassAndSpring_Intro_1');
});
router.get('/en/simulation_MassAndSpring/Intro_2', function(req, res) {
    res.render('pages-en/ejss_model_MassAndSpring/MassAndSpring_Intro_2');
});
console.log('Registering EN route handler:', P5jsController.Animacija_kruznog_kretanja_EN);
router.get('/en/p5js', P5jsController.Uvod_u_p5js_EN);
 router.get('en/animacija_kruznog_kretanja', P5jsController.Animacija_kruznog_kretanja_EN);
 router.get('en/klizanje_tela_niz_strmu_ravan', P5jsController.Klizanje_tela_niz_strmu_ravan_EN);
 
 console.log('Registering EN route handler:', OpsteController.O_Ejsu_EN);
 router.get('/en/o_ejsu', OpsteController.O_Ejsu_EN);
 router.get('/en/o_ejsu_primer', OpsteController.O_Ejsu_primer_EN);
 router.get('/en/o_ejsu_primer_napredno', OpsteController.O_Ejsu_primer_napredno_EN);
 router.get('/en/o_ejsu_primer_napredno_2', OpsteController.O_Ejsu_primer_napredno_2_EN);
 
 // p5js animations
 console.log('Registering EN route handler:', P5jsController.Uvod_u_p5js_EN);
router.get('/en/p5js', P5jsController.Uvod_u_p5js_EN);
router.get('/en/circular-motion', P5jsController.Animacija_kruznog_kretanja_EN);
router.get('/en/inclined-plane-slide', P5jsController.Klizanje_tela_niz_strmu_ravan_EN);

// О EJS
console.log('Registering EN route handler:', OpsteController.O_Ejsu_EN);
router.get('/en/about-ejs',           OpsteController.O_Ejsu_EN);
router.get('/en/ejs-example',         OpsteController.O_Ejsu_primer_EN);
router.get('/en/ejs-example-advanced',    OpsteController.O_Ejsu_primer_napredno_EN);
router.get('/en/ejs-example-advanced-2',  OpsteController.O_Ejsu_primer_napredno_2_EN);


// English - Free Fall
console.log('Registering EN route handler:', SlobodanPadController.SlobodanPad_EN);
router.get('/en/free_fall', SlobodanPadController.SlobodanPad_EN);
router.get('/en/free_fall/:id', SlobodanPadController.SlobodanPad_EN);
router.get('/en/contents_free_fall', SlobodanPadController.SlobodanPadContents_EN);
router.get('/en/free_fall_intro_1', SlobodanPadController.SlobodanPad1_EN);
router.get('/en/free_fall_intro_2', SlobodanPadController.SlobodanPad2_EN);
router.get('/en/simulation_free_fall', SlobodanPadController.SlobodanPadSimulacija_EN);

// English - Vertical Throw
console.log('Registering EN route handler:', VertikalanHitacController.VertikalanHitac_EN);
router.get('/en/vertical_throw', VertikalanHitacController.VertikalanHitac_EN);
router.get('/en/vertical_throw/:id', VertikalanHitacController.VertikalanHitac_EN);
router.get('/en/contents_vertical_throw', VertikalanHitacController.VertikalanHitacContents_EN);
router.get('/en/vertical_throw_intro_1', VertikalanHitacController.VertikalanHitac1_EN);
router.get('/en/vertical_throw_intro_2', VertikalanHitacController.VertikalanHitac2_EN);
router.get('/en/simulation_vertical_throw', VertikalanHitacController.VertikalanHitac_Simulation_EN);

// English - Projectile Motion (Kosi hitac)
console.log('Registering EN route handler:', KosHitacController.KosHitac_EN);
router.get('/en/projectile_motion',                            KosHitacController.KosHitac_EN);
router.get('/en/projectile_motion/:id',                        KosHitacController.KosHitac_EN);
router.get('/en/contents_projectile_motion',                   KosHitacController.kosHitacContents_EN);
router.get('/en/projectile_motion_intro_1',                    KosHitacController.KosHitac1_EN);
router.get('/en/projectile_motion_intro_2',                    KosHitacController.KosHitac2_EN);
router.get('/en/simulation_projectile_motion',                 KosHitacController.KosHitacSimulacija_EN);

// English - Disk Rotation
console.log('Registering EN route handler for Disk Rotation:', RotacijaDiskaController.RotacijaDiska_EN);
router.get('/en/disk_rotation',                              RotacijaDiskaController.RotacijaDiska_EN);
router.get('/en/disk_rotation/:id',                          RotacijaDiskaController.RotacijaDiska_EN);
router.get('/en/contents_disk_rotation',                     RotacijaDiskaController.RotacijaDiskaContents_EN);
router.get('/en/disk_rotation_intro_1',                      RotacijaDiskaController.RotacijaDiska1_EN);
router.get('/en/disk_rotation_intro_2',                      RotacijaDiskaController.RotacijaDiska2_EN);
router.get('/en/disk_rotation_intro_3',                      RotacijaDiskaController.RotacijaDiska3_EN);
router.get('/en/disk_rotation_intro_4',                      RotacijaDiskaController.RotacijaDiska4_EN);
router.get('/en/simulation_disk_rotation',                   RotacijaDiskaController.RotacijaDiskaSimulacija_EN);



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

  
   





