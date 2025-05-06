const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const app = require('./app'); // ili ./index.js ako je tamo app

const hostname = 'https://kosi-hitac.onrender.com/'; // Zameni sa tvojim domenom
const sitemap = new SitemapStream({ hostname });

const writeStream = fs.createWriteStream('./public/sitemap.xml');

// Uzmi sve definisane rute iz Express aplikacije
const routes = [];

app._router.stack.forEach((middleware) => {
  if (middleware.route) {
    // Direktna ruta
    routes.push(middleware.route.path);
  } else if (middleware.name === 'router') {
    // Router unutar drugog fajla
    middleware.handle.stack.forEach((handler) => {
      if (handler.route) {
        routes.push(handler.route.path);
      }
    });
  }
});

// Piši u sitemap
routes.forEach((route) => {
  if (!route.includes(':')) { // preskoči dinamičke rute
    sitemap.write({ url: route, changefreq: 'weekly', priority: 0.7 });
  }
});

sitemap.end();

streamToPromise(sitemap.pipe(writeStream)).then(() =>
  console.log('✅ Sitemap generated from Express routes.')
);
