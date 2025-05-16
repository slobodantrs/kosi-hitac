// 1) imports
const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const proxy        = require('express-http-proxy');
const i18n         = require('i18n');
const routes       = require('./routes');
const isProd = (process.env.NODE_ENV === 'production');
const morgan = require('morgan');

// 2) init
const app  = express();
app.enable('case sensitive routing');
const PORT = process.env.PORT || 5000;


// 1) Ovde ubaci COOP/COEP middleware
/*app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});*/

i18n.configure({
  locales: ['sr','en'],
  directory: path.join(__dirname,'locales'),
  defaultLocale: 'sr',
  queryParameter: 'lang',
  cookie: 'lang',
  objectNotation: true,   
  autoReload: true,
  syncFiles: true
});

const fs = require('fs');
//console.log('>>> i18n.getLocales()  =', i18n.getLocales());
//console.log('>>> expecting in:', path.join(__dirname,'locales'));
try {
 // console.log('>>> actual files:', fs.readdirSync(path.join(__dirname,'locales')));
} catch(e) {
 // console.error('!!! cannot read locales dir:', e.message);
}

app.set('env', 'production');
app.set('view engine', 'ejs');

// 4) views
app.set('views', path.join(__dirname, 'views'));

app.use(
  process.env.NODE_ENV === 'production'
    ? morgan('combined')    // samo zahtevi, minimalno
    : morgan('dev')         // detaljni log pri razvoju
);

app.set('view cache', false);
app.locals.pretty = true;     // kad koristiš HTML prettifier



app.use(cookieParser());
app.use(i18n.init);
console.log('SR catalog:', i18n.getCatalog('sr'));
console.log('EN catalog:', i18n.getCatalog('en'));

//  –––––––––––––––––––––––––––––––––––––––––––––––––
// 1) Промена језика преко ?lang=xx и чување у cookies


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
    res.cookie('lang', 'en', { maxAge: 30*24*60*60*1000, httpOnly: true });
    
    req.setLocale('en');
	
  }
  else {
    // OVDE SILOM nameštamo српски
    req.setLocale('sr');
	//console.log('srpski: res.locals.currentPath: '+res.locals.currentPath );
	
  }
  res.locals.locale = req.getLocale();

 // console.log('app.js>> req.getLocale() =', req.getLocale());
 // console.log('app.js>> res.locals.locale =', res.locals.locale);
  next();
});



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
  '/slobodan_pad':                     '/en/free_fall',
  '/slobodan_pad/1':                   '/en/free_fall/1',   // опциони
  '/slobodan_pad/2':                   '/en/free_fall/2',   // опциони
  '/contents_plobodan_pad':            '/en/contents_free_fall',
  '/slobodan_pad_intro_1':              '/en/free_fall_intro_1',
  '/slobodan_pad_2':                    '/en/free_fall_intro_2',
  '/simulacija_slobodan_pad':          '/en/simulation_free_fall',

  // Vertikalan hitac
  '/vertikalan_hitac':                 '/en/vertical_throw',
  '/vertikalan_hitac/1':               '/en/vertical_throw/1',  // опциони
  '/vertikalan_hitac/2':               '/en/vertical_throw/2',  // опциони
  '/contents_vertikalan_hitac':        '/en/contents_vertical_throw',
  '/vertikalan_hitac_intro_1':          '/en/vertical_throw_intro_1',
  '/vertikalan_hitac_intro_2':          '/en/vertical_throw_intro_2',
  '/simulacija_vertikalan_hitac':      '/en/simulation_vertical_throw',

  // Kos hitac (Projectile Motion)
  '/kosi_hitac':                        '/en/projectile_motion',
  '/kosi_hitac/1':                      '/en/projectile_motion/1',  // опциони
  '/kosi_hitac/2':                      '/en/projectile_motion/2',  // опциони
  '/contents_kosi_hitac':               '/en/contents_projectile_motion',
  '/kosi_hitac_intro_1':                 '/en/projectile_motion_intro_1',
  '/kosi_hitac_intro_2':                 '/en/projectile_motion_intro_2',
  '/simulacija_kosi_hitac':             '/en/simulation_projectile_motion',

  // Kružno kretanje mater. tačke (Circular Motion)
  '/kruzno_kretanje':               '/en/circular_motion',
  '/kruzno_kretanje/1':             '/en/circular_motion/1',   // опциони
  '/kruzno_kretanje/2':             '/en/circular_motion/2',   // опциони
  '/contents_kruzno_kretanje':      '/en/contents_circular_motion',
  '/kruzno_kretanje_intro_1':       '/en/circular_motion_intro_1',
  '/kruzno_kretanje_intro_2':       '/en/circular_motion_intro_2',
  '/simulacija_kruzno_kretanje':    '/en/simulation_circular_motion',

  // Rotacija diska
  '/rotacija_diska':                   '/en/disk_rotation',
  '/contents_rotacija_diska':          '/en/contents_disk_rotation',
  '/simulacija_rotacija_diska':        '/en/simulation_disk_rotation',
  '/rotacija_diska_intro_1':           '/en/disk_rotation_intro_1',
  '/rotacija_diska_intro_2':           '/en/disk_rotation_intro_2',
  '/rotacija_diska_intro_3':           '/en/disk_rotation_intro_3',
  '/rotacija_diska_intro_4':           '/en/disk_rotation_intro_4',

  // Ravno kretanje točka (Rigid Body Motion)
  '/ravno_kretanje':               '/en/rigid_body_motion',
  '/contents_ravno_kretanje':      '/en/contents_rigid_body_motion',
  '/simulacija_ravno_kretanje':    '/en/simulation_rigid_body_motion',
  '/ravno_kretanje_intro_1':         '/en/rigid_body_motion_intro_1',
  '/ravno_kretanje_intro_2':       '/en/rigid_body_motion_intro_2',
  '/ravno_kretanje_intro_3':       '/en/rigid_body_motion_intro_3',
  
  // Masa i opruga (Mass and Spring)
  '/masa_i_opruga':                   '/en/mass_and_spring',
  '/masa_i_opruga/1':                 '/en/mass_and_spring/1',  // opciono
  '/masa_i_opruga/2':                 '/en/mass_and_spring/2',  // opciono
  '/contents_masa_i_opruga':          '/en/contents_mass_and_spring',
  '/masa_i_opruga_intro_1':           '/en/mass_and_spring_intro_1',
  '/masa_i_opruga_intro_2':           '/en/mass_and_spring_intro_2',
  '/simulacija_masa_i_opruga':        '/en/simulation_mass_and_spring',
  
  // p5.js → Vector animation
  '/upotreba_p5js/vektori_animacija':            '/en/usage_p5js/vector_animation',
  '/upotreba_p5js/vektori_animacija/:id':        '/en/usage_p5js/vector_animation/:id',
   '/sunce_zemlja_mesec_animacija':      '/en/sun_earth_moon_animation',
  
  
  '/politika_privatnosti':           '/en/privacy',
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
  res.locals.navHref = function(srPath) {
    if (res.locals.locale === 'en') {
      return slugMap[srPath] || '/';
    }
    return srPath;
  };
  //console.log('res.locals.currentPath: '+res.locals.currentPath );
  next();
});




app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'testHTML5')));
app.use(express.static(path.join(__dirname,'node_modules')));
app.use(express.static(__dirname));
// ovo kaže: kad klijent requestuje /org/opensourcephysics/* 
// serviraj fajlove iz public/_ejs_library/images/org/opensourcephysics/*
app.use(
  '/org/opensourcephysics',
  express.static(
    path.join(__dirname, 'public', '_ejs_library', 'images', 'org', 'opensourcephysics')
  )
);

// 3) robots.txt
const router = express.Router();
router.get('/robots.txt', (req, res) => {
  res.type('text/plain; charset=UTF-8');
  res.sendFile(path.join(__dirname, 'robots.txt'));
});
app.use(router);



// PREUSMERENJE STARIH URL-ova NA NOVE
// Mora da stoji pre: app.use('/', routes);
app.get('/Kruzno_Kretanje_MT', (req, res) => {
  res.redirect(301, '/kruzno_kretanje');
});
// Ako je indeksirano i sa id, npr. /Kruzno_Kretanje_MT/1
app.get('/Kruzno_Kretanje_MT/:id', (req, res) => {
  const id = req.params.id;
  res.redirect(301, `/kruzno_kretanje/${id}`);
});
app.get('/Rotacija_Diska', (req, res) => {
  res.redirect(301, '/rotacija_diska');
});
// Ako je indeksirano i sa id, npr. /Rotacija_Diska/1
app.get('/Rotacija_Diska/:id', (req, res) => {
  const id = req.params.id;
  res.redirect(301, `/rotacija_diska/${id}`);
});
app.get('/vertikalan_Hitac', (req, res) => {
  res.redirect(301, '/vertikalan_hitac');
});
// Ako je indeksirano i sa id, npr. /vertikalan_Hitac/1
app.get('/vertikalan_Hitac/:id', (req, res) => {
  const id = req.params.id;
  res.redirect(301, `/vertikalan_hitac/${id}`);
});
app.get('/kos_Hitac', (req, res) => {
  res.redirect(301, '/kosi_hitac');
});
// Ako je indeksirano i sa id, npr. /kos_Hitac/1
app.get('/kos_Hitac/:id', (req, res) => {
  const id = req.params.id;
  res.redirect(301, `/kosi_hitac/${id}`);
});
app.get('/RavnoKretanjeTocka', (req, res) => {
  res.redirect(301, '/ravno_kretanje');
});
// Ako je indeksirano i sa id, npr. /RavnoKretanjeTocka/1
app.get('/RavnoKretanjeTocka/:id', (req, res) => {
  const id = req.params.id;
  res.redirect(301, `/ravno_kretanje/${id}`);
});

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



const errorhandler = require('errorhandler');
if (!isProd) {
	app.locals.compileDebug = true;   // ili
    app.set('view options', { debug: true });

  app.use(errorhandler());
  app.set('view cache', false);
  app.locals.pretty = true;
  app.locals.compileDebug = true;
}

// Izvozimo aplikaciju radi sitemap gen.
module.exports = app;

// 7) start
app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`);
});
