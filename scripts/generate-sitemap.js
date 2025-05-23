// scripts/generate-sitemap.js
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Uzmi listu URL-ova – npr. iz svog slugMap objekta
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
  '/contents_slobodan_pad':            '/en/contents_free_fall',
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
   
  // **OVO SU NOVE OSP STRANE**
  '/uvod_u_osp':                     '/en/osp_introduction',
  '/osp/ide_okruzenje': '/en/osp/ide_environment',
  // OSP pendulum
  '/osp/primer_osp_matematicko_klatno':               '/en/osp/example_osp_mathematics_pendulum',

  
  '/politika_privatnosti':           '/en/privacy',
};



(async () => {
  const hostname = 'https://kosi-hitac.onrender.com';
  const links = [];

  // Dodajemo sve srpske strane
  for (const path of Object.keys(slugMap)) {
    links.push({ url: path, changefreq: 'weekly', priority: path === '/' ? 1.0 : 0.8 });
  }
  // i sve engleske
  for (const enPath of Object.values(slugMap)) {
    links.push({ url: enPath, changefreq: 'weekly', priority: enPath === '/en/' ? 1.0 : 0.8 });
  }

  const stream = new SitemapStream({ hostname });
  const xml = await streamToPromise(Readable.from(links).pipe(stream));

  fs.writeFileSync('./public/sitemap.xml', xml.toString());
  console.log('✅ public/sitemap.xml generisan');
})();
