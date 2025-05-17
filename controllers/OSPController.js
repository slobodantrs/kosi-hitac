// controllers/OSPController.js
module.exports = {
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
  }
};
module.exports = methods;
