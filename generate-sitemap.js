const fs = require('fs');
const path = require('path');
const { SitemapStream } = require('sitemap');

// 1) Import express app (kao i ranije)
const app = require('./app');

const hostname = 'https://kosi-hitac.onrender.com';
const sitemap = new SitemapStream({ hostname });
const writeStream = fs.createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));

// 2) Pipe sitemap u fajl
sitemap.pipe(writeStream);

// 3) Zapiši sve rute (kao što si već implementirao)
app._router.stack.forEach(layer => {
  if (layer.route && layer.route.path && !layer.route.path.includes(':')) {
    sitemap.write({ url: layer.route.path, changefreq: 'weekly', priority: 0.7 });
  } else if (layer.name === 'router') {
    layer.handle.stack.forEach(handler => {
      if (handler.route && handler.route.path && !handler.route.path.includes(':')) {
        sitemap.write({ url: handler.route.path, changefreq: 'weekly', priority: 0.7 });
      }
    });
  }
});

// 4) Zatvori sitemap stream
sitemap.end();

// 5) Čekaj da se fajl napiše
writeStream.on('finish', () => {
  console.log('✅ Sitemap generated at public/sitemap.xml');
});
writeStream.on('error', err => {
  console.error('❌ Error writing sitemap:', err);
});
