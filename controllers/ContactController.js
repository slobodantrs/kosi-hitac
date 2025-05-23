// controllers/ContactController.js
var methods = {
  // Prikaz srpske verzije
  show: function(req, res) {
    res.render('pages/kontakt', {
      locale: req.locale // prosledi locale ako ti treba u šablonu
    });
  },

  // Prikaz engleske verzije
  show_EN: function(req, res) {
    res.render('pages-en/contact', {
      locale: req.locale
    });
  }
};

module.exports = methods;
