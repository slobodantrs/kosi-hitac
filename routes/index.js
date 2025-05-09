
   
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
/*
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
*/
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
 router.get('/slobodan_pad', SlobodanPadController.SlobodanPad);
router.get('/slobodan_pad/:id', SlobodanPadController.SlobodanPad);
router.get('/contents_slobodan_pad', SlobodanPadController.SlobodanPadContents);
router.get('/slobodan_pad_intro_1', SlobodanPadController.SlobodanPad1);
router.get('/slobodan_pad_intro_2', SlobodanPadController.SlobodanPad2);
router.get('/simulacija_slobodan_pad',SlobodanPadController.SlobodanPadSimulacija);

//Vertikalan hitac
var VertikalanHitacController = require('../controllers/VertikalanHitacController');
console.log(`VertikalanHitacController u index.js: `+VertikalanHitacController);
 router.get('/vertikalan_hitac', VertikalanHitacController.VertikalanHitac);
router.get('/vertikalan_hitac/:id', VertikalanHitacController.VertikalanHitac);
router.get('/contents_vertikalan_hitac', VertikalanHitacController.VertikalanHitacContents);
router.get('/vertikalan_hitac_intro_1', VertikalanHitacController.VertikalanHitac1);
router.get('/vertikalan_hitac_intro_2', VertikalanHitacController.VertikalanHitac2);
router.get('/simulacija_vertikalan_hitac', VertikalanHitacController.VertikalanHitac_Simulation);


//Kos hitac
var KosiHitacController = require('../controllers/KosiHitacController');
console.log(`KosiHitacController u index.js: `+KosiHitacController);
 router.get('/kosi_hitac', KosiHitacController.KosiHitac);
router.get('/kosi_hitac/:id', KosiHitacController.KosiHitac);
router.get('/contents_kosi_hitac', KosiHitacController.KosiHitacContents);
router.get('/kosi_hitac_intro_1', KosiHitacController.KosiHitac1);
router.get('/kosi_hitac_intro_2', KosiHitacController.KosiHitac2);
router.get('/simulacija_kosi_hitac', KosiHitacController.KosiHitac_Simulation);



//Kružno kretanje
var KruznoKretanjeMTController = require('../controllers/KruznoKretanjeMTController');
console.log(`KruznoKretanjeMTController u index.js: `+KruznoKretanjeMTController);
 router.get('/kruzno_kretanje', KruznoKretanjeMTController.KruznoKretanjeMT);
router.get('/kruzno_kretanje/:id', KruznoKretanjeMTController.KruznoKretanjeMT);
router.get('/contents_kruzno_kretanje_MT', KruznoKretanjeMTController.KruznoKretanjeMTContents);
router.get('/kruzno_kretanje_intro_1', KruznoKretanjeMTController.KruznoKretanjeMT1);
router.get('/kruzno_kretanje_intro_2', KruznoKretanjeMTController.KruznoKretanjeMT2);
router.get('/simulacija_kruzno_kretanje', KruznoKretanjeMTController.KruznoKretanjeMT_Simulation);

// Rotacija diska
var RotacijaDiskaController = require('../controllers/RotacijaDiskaController');
console.log(`RotacijaDiskaController u index.js: `+RotacijaDiskaController);
router.get('/rotacija_diska', RotacijaDiskaController.RotacijaDiska);
router.get('/rotacija_diska/:id', RotacijaDiskaController.RotacijaDiska);
router.get('/contents_rotacija_diska', RotacijaDiskaController.RotacijaDiskaContents);
router.get('/rotacija_diska_intro_1', RotacijaDiskaController.RotacijaDiska1);
router.get('/rotacija_diska_intro_2', RotacijaDiskaController.RotacijaDiska2);
router.get('/rotacija_diska_intro_3', RotacijaDiskaController.RotacijaDiska3);
router.get('/rotacija_diska_Intro_4', RotacijaDiskaController.RotacijaDiska4)
router.get('/simulacija_rotacija_diska', RotacijaDiskaController.RotacijaDiskaSimulacija);


// Ravno kretanje
var RavnoKretanjeController = require('../controllers/RavnoKretanjeController');
console.log(`RavnoKretanjeController u index.js: ` + RavnoKretanjeController);

router.get('/ravno_kretanje', RavnoKretanjeController.RavnoKretanje);
router.get('/ravno_kretanje/:id', RavnoKretanjeController.RavnoKretanje);
router.get('/contents_ravno_kretanje', RavnoKretanjeController.RavnoKretanjeContents);
router.get('/ravno_kretanje_intro_1', RavnoKretanjeController.RavnoKretanje1);
router.get('/ravno_kretanje_intro_2', RavnoKretanjeController.RavnoKretanje2);
router.get('/ravno_kretanje_intro_3', RavnoKretanjeController.RavnoKretanje3);

router.get('/simulacija_ravno_kretanje', RavnoKretanjeController.RavnoKretanjeSimulacija);

// routes/index.js

// Masa i opruga
var MasaIOprugaController = require('../controllers/MasaIOprugaController');
console.log(`MasaIOprugaController u index.js: `, MasaIOprugaController);

// Intro pages
router.get('/masa_i_opruga_intro_1', MasaIOprugaController.MasaIOpruga1);
router.get('/masa_i_opruga_intro_2', MasaIOprugaController.MasaIOpruga2);

// Main dynamic page (optionally with id)
router.get('/masa_i_opruga', MasaIOprugaController.MasaIOpruga);
router.get('/masa_i_opruga/:id', MasaIOprugaController.MasaIOpruga);

// Contents partial
router.get('/contents_masa_i_opruga', MasaIOprugaController.MasaIOprugaContents);

// Simulation page
router.get('/simulacija_masa_i_opruga', MasaIOprugaController.MasaIOpruga_Simulation);


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
console.log('Registering EN route handler:', KosiHitacController.KosHitac_EN);
router.get('/en/projectile_motion',                            KosiHitacController.KosHitac_EN);
router.get('/en/projectile_motion/:id',                        KosiHitacController.KosHitac_EN);
router.get('/en/contents_projectile_motion',                   KosiHitacController.KosHitacContents_EN);
router.get('/en/projectile_motion_intro_1',                    KosiHitacController.KosHitac1_EN);
router.get('/en/projectile_motion_intro_2',                    KosiHitacController.KosHitac2_EN);
router.get('/en/simulation_projectile_motion',                 KosiHitacController.KosHitacSimulacija_EN);

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



// English routes for Circular Motion
router.get('/en/circular_motion', KruznoKretanjeMTController.KruznoKretanjeMT_EN);
router.get('/en/circular_motion/:id', KruznoKretanjeMTController.KruznoKretanjeMT_EN);
router.get('/en/contents_circular_motion', KruznoKretanjeMTController.KruznoKretanjeMTContents_EN);
router.get('/en/circular_motion_intro_1', KruznoKretanjeMTController.KruznoKretanjeMT1_EN);
router.get('/en/circular_motion_intro_2', KruznoKretanjeMTController.KruznoKretanjeMT2_EN);
router.get('/en/simulation_circular_motion', KruznoKretanjeMTController.KruznoKretanjeMT_Simulation_EN);

// ——— ENGLISH VERSION ———
// Prefiksujemo sa /en/rigid_body_motion
router.get('/en/rigid_body_motion',          RavnoKretanjeController.RavnoKretanje_EN);
router.get('/en/rigid_body_motion/:id',      RavnoKretanjeController.RavnoKretanje_EN);
router.get('/en/contents_rigid_body_motion', RavnoKretanjeController.RavnoKretanjeContents_EN);
router.get('/en/rigid_body_motion_intro_1',  RavnoKretanjeController.RavnoKretanje1_EN);
router.get('/en/rigid_body_motion_intro_2',  RavnoKretanjeController.RavnoKretanje2_EN);
router.get('/en/rigid_body_motion_intro_3',  RavnoKretanjeController.RavnoKretanje3_EN);

router.get('/en/simulation_rigid_body_motion', RavnoKretanjeController.RavnoKretanjeSimulacija_EN);

//Mass and spring English
// Intro pages
router.get('/en/mass_and_spring_intro_1', MasaIOprugaController.MasaIOpruga1_EN);
router.get('/en/mass_and_spring_intro_2', MasaIOprugaController.MasaIOpruga2_EN);

// Main dynamic page (optionally with id)
router.get('/en/simulation_mass_and_spring', MasaIOprugaController.MasaIOpruga_EN);
router.get('/en/simulation_mass_and_spring/:id', MasaIOprugaController.MasaIOpruga_EN);

// Contents partial
router.get('/en/contents_mass_and_spring', MasaIOprugaController.MasaIOprugaContents_EN);

// Simulation page
router.get('/en/simulation_mass_and_spring', MasaIOprugaController.MasaIOpruga_Simulation_EN);

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

  
   





