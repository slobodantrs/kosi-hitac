// 1) imports
const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const proxy        = require('express-http-proxy');
const i18n         = require('i18n');
const routes       = require('./routes');


// 2) init
const app  = express();
const PORT = process.env.PORT || 5000;

i18n.configure({
  locales: ['sr','en'],
  directory: path.join(__dirname,'locales'),
  defaultLocale: 'sr',
  queryParameter: 'lang',
  cookie: 'lang',
  autoReload: true,
  syncFiles: true
});

app.use(cookieParser());
app.use(i18n.init);
console.log('SR catalog:', i18n.getCatalog('sr'));
console.log('EN catalog:', i18n.getCatalog('en'));


//  –––––––––––––––––––––––––––––––––––––––––––––––––
// 1) Промена језика преко ?lang=xx и чување у cookies
/*app.use((req, res, next) => {
  if (req.query.lang) {
    res.cookie('lang', req.query.lang, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дана
      httpOnly: true
    });
    req.setLocale(req.query.lang);
  }
  next();
});
*/

app.use((req, res, next) => {
  // POSLE ovog bloka koji čuva lang iz ?lang=xx u kolačić ...
  if (req.query.lang) {// 1) Промена језика преко ?lang=xx и чување у cookies
    res.cookie('lang', req.query.lang, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дана
      httpOnly: true
    });
    req.setLocale(req.query.lang);
  }// Ako URL počinje sa '/en/' ili je tačno '/en'
  else if (req.path === '/en' || req.path.startsWith('/en/')) {
    req.setLocale('en');
   
  }
  else {
    // OVDE SILOM nameštamo српски
    req.setLocale('sr');
  }
 
  next();
});


// 2) Прослеђивање помоћних ф-ја и текућег језика у template
//app.use((req, res, next) => {
//  res.locals.__     = res.__;            // за __('key')
 // res.locals.locale = req.getLocale();   // 'sr' или 'en'
 // next();
//});

// 3) **Додај** ово после претходна два, да би у EJS-у имао currentPath
//app.use((req, res, next) => {
 // res.locals.currentPath = req.originalUrl; // или req.path, како ти одговара
 // next();
//});

// app.js (posle svih `app.use(...)` pre `app.listen(...)`)
console.log('app.js');
const slugMap = {
  // Почетна
  '/':                                 '/en/',
  '/test':                             '/en/test',

  // Masa i opruga
  '/simulacija_Masa_i_Opruga':         '/en/simulation_MassAndSpring',
  '/simulacija_Masa_i_Opruga/MassAndSpring_Intro_1': '/en/simulation_MassAndSpring/Intro_1',
  '/simulacija_Masa_i_Opruga/MassAndSpring_Intro_2': '/en/simulation_MassAndSpring/Intro_2',

  // O EJS
  '/o_ejsu':                           '/en/about-ejs',
  '/o_ejsu_primer':                    '/en/ejs-example',
  '/o_ejsu_primer_napredno':           '/en/ejs-example-advanced',
  '/o_ejsu_primer_napredno_2':         '/en/ejs-example-advanced-2',

  // p5.js
  '/p5js':                             '/en/p5js',
  '/animacija_kruznog_kretanja':       '/en/circular-motion',
  '/klizanje_tela_niz_strmu_ravan':    '/en/inclined-plane-slide',

  // Slobodan pad
  '/slobodan_Pad':                     '/en/free-fall',
  '/slobodan_Pad/1':                   '/en/free-fall/1',   // опциони
  '/slobodan_Pad/2':                   '/en/free-fall/2',   // опциони
  '/contents_Slobodan_Pad':            '/en/contents_free_fall',
  '/SlobodanPad_Intro_1':              '/en/free_fall_intro_1',
  '/SlobodanPad_2':                    '/en/free_fall_intro_2',
  '/simulacija_Slobodan_Pad':          '/en/simulation_free_fall',

  // Vertikalan hitac
  '/vertikalan_Hitac':                 '/en/vertical_throw',
  '/vertikalan_Hitac/1':               '/en/vertical_throw/1',  // опциони
  '/vertikalan_Hitac/2':               '/en/vertical_throw/2',  // опциони
  '/contents_Vertikalan_Hitac':        '/en/contents_vertical_throw',
  '/VertikalanHitac_Intro_1':          '/en/vertical_throw_intro_1',
  '/VertikalanHitac_Intro_2':          '/en/vertical_throw_intro_2',
  '/simulacija_Vertikalan_Hitac':      '/en/simulation_vertical_throw',

  // Kos hitac (Projectile Motion)
  '/kos_Hitac':                        '/en/projectile_motion',
  '/kos_Hitac/1':                      '/en/projectile_motion/1',  // опциони
  '/kos_Hitac/2':                      '/en/projectile_motion/2',  // опциони
  '/contents_Kos_Hitac':               '/en/contents_projectile_motion',
  '/KosHitac_Intro_1':                 '/en/projectile_motion_intro_1',
  '/KosHitac_Intro_2':                 '/en/projectile_motion_intro_2',
  '/simulacija_Kos_Hitac':             '/en/simulation_projectile_motion',

  // Kružno kretanje mater. tačke (Circular Motion)
  '/Kruzno_Kretanje_MT':               '/en/circular_motion',
  '/Kruzno_Kretanje_MT/1':             '/en/circular_motion/1',   // опциони
  '/Kruzno_Kretanje_MT/2':             '/en/circular_motion/2',   // опциони
  '/contents_Kruzno_Kretanje_MT':      '/en/contents_circular_motion',
  '/Kruzno_Kretanje_MT_Intro_1':       '/en/circular_motion_intro_1',
  '/Kruzno_Kretanje_MT_Intro_2':       '/en/circular_motion_intro_2',
  '/simulacija_Kruzno_Kretanje_MT':    '/en/simulation_circular_motion',

  // Rotacija diska
  '/Rotacija_Diska':                   '/en/disk_rotation',
  '/contents_Rotacija_Diska':          '/en/contents_disk_rotation',
  '/simulacija_Rotacija_Diska':        '/en/simulation_disk_rotation',
  '/Rotacija_Diska_Intro_1':           '/en/disk_rotation_intro_1',
  '/Rotacija_Diska_Intro_2':           '/en/disk_rotation_intro_2',
  '/Rotacija_Diska_Intro_3':           '/en/disk_rotation_intro_3',
  '/Rotacija_Diska_Intro_4':           '/en/disk_rotation_intro_4',

  // Ravno kretanje točka (Rigid Body Motion)
  '/RavnoKretanjeTocka':               '/en/rigid_body_motion',
  '/contents_RavnoKretanjeTocka':      '/en/contents_rigid_body_motion',
  '/simulacija_RavnoKretanjeTocka':    '/en/simulation_rigid_body_motion',
  '/RavnoKretanjeTocka_Intro':         '/en/rigid_body_motion_intro',
  '/RavnoKretanjeTocka_Intro_1':       '/en/rigid_body_motion_intro_1',
  '/RavnoKretanjeTocka_Intro_2':       '/en/rigid_body_motion_intro_2'
};


// i obrnuto za vraćanje na srpski
const slugMapInverse = Object.entries(slugMap)
  .reduce((inv, [sr, en]) => (inv[en] = sr, inv), {});
  
app.use((req, res, next) => {
  res.locals.__             = res.__;
  res.locals.locale         = req.getLocale();
  res.locals.currentPath    = req.originalUrl;   
  res.locals.slugMap        = slugMap;
  res.locals.slugMapInverse = slugMapInverse;
  next();
});




app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'testHTML5')));
app.use(express.static(path.join(__dirname,'node_modules')));
app.use(express.static(__dirname));

// 3) robots.txt
const router = express.Router();
router.get('/robots.txt', (req, res) => {
  res.type('text/plain; charset=UTF-8');
  res.sendFile(path.join(__dirname, 'robots.txt'));
});
app.use(router);

// 4) views
app.set('views', [
  path.join(__dirname,'views'),
  path.join(__dirname,'views/partials')
]);
app.set('view engine', 'ejs');
app.use('/', routes);

// 5) analytics proxy
function getIpFromReq(req) {
  let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  return ip.split(',')[0].trim();
}
app.use("/analytics", proxy("www.google-analytics.com", {
  proxyReqPathResolver: req =>
    req.url + (req.url.includes("?") ? "&" : "?") +
    "uip=" + encodeURIComponent(getIpFromReq(req))
}));

// 6) SEO
// 1) Прихватање повратне вредности приликом инициализације
const seo = require('express-seo')(app);

// 2) Сада 'seo' има методе setConfig и setDefaults
seo.setConfig({ langs: ["en","fr","sr-rs"] });
seo.setDefaults({
  html: "<a href='https://www.facebook.com/svetprogramiranja'>Prati nas na Facebook‑u</a>",
  title: "Kosi Hitac – Interaktivne simulacije iz fizike",
  description: {
    en: "Explore interactive physics simulations built with EJS and p5.js.",
    sr: "Interaktivne simulacije iz fizike kreirane pomoću EJS i p5.js."
  },
  image: "https://kosi-hitac.onrender.com/images/preview-kosi-hitac.png"
});

// 7) start
app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`);
});
