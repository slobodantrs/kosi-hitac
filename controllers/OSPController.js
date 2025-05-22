// controllers/OSPController.js
methods = {
  Uvod_U_Osp(req, res) {
	  console.log('Render attempt:', 'pages/OSP/uvod_u_osp');
    res.render('pages/OSP/uvod_u_osp', {
      locale: req.getLocale(),
      title:    res.__('osp.title'),
      metaDesc: res.__('osp.metaDescription')
    });
  },

  Uvod_U_Osp_EN(req, res) {
	  console.log('Render attempt:', 'pages-en/OSP/introduction_to_osp');
    res.render('pages-en/OSP/introduction_to_osp', {
      locale: req.getLocale(),
      title:    res.__('osp.title'),
      metaDesc: res.__('osp.metaDescription')
    });
  },
  
  IDE_Okruzenje_Osp(req, res) {
	  console.log('Render attempt:', 'pages/OSP/ide_okruzenje_osp');
  res.render('pages/OSP/ide_okruzenje_osp', {
    locale: req.getLocale(),
    title: res.__('osp.ide.title'),
    metaDesc: res.__('osp.ide.metaDescription')
  });
},

IDE_Environment_Osp_EN(req, res) {
	console.log('Render attempt:', 'pages-en/OSP/ide_environement_osp');
  res.render('pages-en/OSP/ide_environement_osp', {
    locale: req.getLocale(),
    title: res.__('osp.ide.title'),
    metaDesc: res.__('osp.ide.metaDescription')
  });
  },

  // **New Pendulum Pages**
  Klatno_Primer_Osp(req, res) {
    console.log('Render attempt:', 'pages/ODE/primer_osp_matematicko_klatno');
    res.render('pages/ODE/primer_osp_matematicko_klatno', {
      locale: req.getLocale(),
      title:    res.__('osp.pendulum.title'),
      metaDesc: res.__('osp.pendulum.metaDescription')
    });
  },

  Pendulum_Example_Osp_EN(req, res) {
    console.log('Render attempt:', 'pages-en/ODE/example_osp_mathematics_pendulum');
    res.render('pages-en/ODE/example_osp_mathematics_pendulum', {
      locale: req.getLocale(),
      title:    res.__('osp.pendulum.title'),
      metaDesc: res.__('osp.pendulum.metaDescription')
    });
  },
};
module.exports = methods;
