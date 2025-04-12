var methods={

Uvod_u_p5js: function(req, res) {
	
	console.log("Uvod_u_p5js");
    res.render('pages/upotrebaP5js/opis_p5js');

},
Animacija_kruznog_kretanja: function(req, res) {
	console.log("Animacija_kruznog_kretanja");
	
	
    res.render('pages/upotrebaP5js/kruzno_kretanje_animacija_p5js');

},
Klizanje_tela_niz_strmu_ravan: function(req, res) {
	console.log("Klizanje_tela_niz_strmu_ravan");
    res.render('pages/upotrebaP5js/klizanje_tela_niz_strmu_ravan_animacija');

},


}
module.exports=methods;
