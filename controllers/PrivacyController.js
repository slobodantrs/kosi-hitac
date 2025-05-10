// controllers/PrivacyController.js
module.exports = {
  privacy: function(req, res) {
    res.render('pages/privacy');            // path до вашем EJS фајлу
  },
  privacy_EN: function(req, res) {
    res.render('pages-en/privacy');
  }
};
