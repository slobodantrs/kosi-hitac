const express = require('express');
const path    = require('path');
const router  = express.Router();

// Kontroleri
const OpsteController         = require('../controllers/OpsteController');
const P5jsController          = require('../controllers/P5JSController');
const SlobodanPadController   = require('../controllers/SlobodanPadController');
const VertikalanHitacController = require('../controllers/VertikalanHitacController');
// ... ostali kontrolleri ...

// INDEX
router.get('/', (req, res) => {
  console.log('GET /');
  res.render('pages/index');
});
router.get('/test', (req, res) => {
  console.log('GET /test');
  res.render('pages/testHTML5/index');
});

// EJS
router.get('/o_ejsu',               OpsteController.O_Ejsu);
router.get('/o_ejsu_primer',        OpsteController.O_Ejsu_primer);
router.get('/o_ejsu_primer_napredno', OpsteController.O_Ejsu_primer_napredno);
// ...

// P5JS
router.get('/p5js',                      P5jsController.Uvod_u_p5js);
router.get('/animacija_kruznog_kretanja', P5jsController.Animacija_kruznog_kretanja);
router.get('/klizanje_tela_niz_strmu_ravan', P5jsController.Klizanje_tela_niz_strmu_ravan);

// Simulacije
router.get('/simulacija_Masa_i_Opruga',          SlobodanPadController.SlobodanPadSimulacija);
// ...

// robots.txt (jedan handler)
router.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /");
});

// sitemap.xml
router.get('/sitemap.xml', (req, res) => {
  res.sendFile('sitemap.xml', { root: path.join(__dirname, '../static') });
});

module.exports = router;
