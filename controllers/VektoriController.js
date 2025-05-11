// controllers/VektoriController.js
module.exports = {
  // Serbian version
  VektoriAnimacija: (req, res) => {
    res.render('pages/upotrebaP5js/vektori_animacija', {
      locale: req.getLocale()
    });
  },
  // English version
  VektoriAnimacija_EN: (req, res) => {
    res.render('pages-en/usingP5js/vector_animation', {
      locale: req.getLocale()
    });
  }
};
