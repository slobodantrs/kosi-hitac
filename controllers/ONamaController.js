// controllers/ONamaController.js

var methods = {
  // Serbian “O nama”
  show: function(req, res) {
    res.render('pages/o_nama', {
      locale: req.getLocale(),
      title:  res.__('about.title'),
      metaDesc: res.__('about.meta.description')
    });
  },

  // English “About Us”
  show_EN: function(req, res) {
    res.render('pages-en/about', {
      locale: req.getLocale(),
      title:    res.__('about.title'),
      metaDesc: res.__('about.meta.description')
    });
  }
};

module.exports = methods;
