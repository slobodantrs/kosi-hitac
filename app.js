// 1) imports
const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const proxy        = require('express-http-proxy');
const i18n         = require('i18n');
const routes       = require('./routes');
const seo          = require('express-seo');

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

//  –––––––––––––––––––––––––––––––––––––––––––––––––
// Middleware: promena jezika preko ?lang=xx i kolačići
app.use((req, res, next) => {
  // 1) Ako u URL‑u stoji ?lang=sr ili ?lang=en …
  if (req.query.lang) {
    // 2) … sačuvaj ga u kolačić
    res.cookie('lang', req.query.lang, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // npr. 30 dana
      httpOnly: true
    });
    // 3) i odmah namesti locale na req
    req.setLocale(req.query.lang);
  }
  next();
});
//  –––––––––––––––––––––––––––––––––––––––––––––––––
app.use((req, res, next) => {
  res.locals.__     = res.__;
  res.locals.locale = req.getLocale();
  next();
});
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
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
