// controllers/ContactController.js
var methods = {
show = (req, res) => {
  res.render('pages/contact');
},

 // Prikaz engleske verzije
  show_EN: function(req, res) {
    res.render('pages-en/contact', {
      locale: req.locale
    });
  }
};
module.exports = methods;
