// controllers/OSPController.js
methods = {
  Uvod_U_Osp(req, res) {
    res.render('pages/OSP/uvod_u_osp', {
      locale: req.getLocale(),
      title:    res.__('osp.title'),
      metaDesc: res.__('osp.metaDescription')
    });
  },

  Uvod_U_Osp_EN(req, res) {
    res.render('pages-en/OSP/introduction_to_osp', {
      locale: req.getLocale(),
      title:    res.__('osp.title'),
      metaDesc: res.__('osp.metaDescription')
    });
  },
  
  IDE_Okruzenje_Osp(req, res) {
  res.render('pages/OSP/ide_okruzenje_osp', {
    locale: req.getLocale(),
    title: res.__('osp.ide.title'),
    metaDesc: res.__('osp.ide.metaDescription')
  });
},

IDE_Environment_Osp_EN(req, res) {
  res.render('pages-en/OSP/ide_environement_osp', {
    locale: req.getLocale(),
    title: res.__('osp.ide.title'),
    metaDesc: res.__('osp.ide.metaDescription')
  });
  }
};
module.exports = methods;
