// scripts/generate-sitemap.js
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Uzmi listu URL-ova – npr. iz svog slugMap objekta
const slugMap = {
  '/': '/en/',
  '/o_ejsu': '/en/about-ejs',
  /* … sve ostale rute … */
};

(async () => {
  // hostname mora biti sa protokolom i domenom
  const hostname = 'https://kosi-hitac.onrender.com'; 
  const links = Object.keys(slugMap).map(path => ({
    url: path,
    changefreq: 'weekly',
    priority: path === '/' ? 1.0 : 0.8
  }));
  // Ako želiš i engleske varijante, možeš ih takođe ubaciti:
  Object.values(slugMap).forEach(enPath => {
    links.push({ url: enPath, changefreq: 'weekly', priority: 0.8 });
  });

  const stream = new SitemapStream({ hostname });
  const xml = await streamToPromise(Readable.from(links).pipe(stream));

  fs.writeFileSync('./public/sitemap.xml', xml.toString());
  console.log('✅ sitemap.xml generisan');
})();
