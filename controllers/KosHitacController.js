var methods={
//Kos hitac
KosHitac1: function(req, res) {
	
		res.render('pages/ejss_model_KosHitac/KosHitac_Intro_1');
	
},
KosHitac2: function(req, res) {
	
		res.render('pages/ejss_model_KosHitac/KosHitac_Intro_2');
	
},
KosHitac: function(req, res) {
	var id=req.params.id;
	res.id=id;
	res.path1='./KosHitac_Contents';
	res.path2='./KosHitac_Intro_2';
	if(id==1){
		res.path2='./KosHitac_Intro_1';
	}	
	else{
		res.path2='./KosHitac_Intro_2';
	}
    res.render('pages/ejss_model_KosHitac/KosHitac',res);

},
kosHitacContents: function(req, res) {
	
    res.render('pages/ejss_model_KosHitac/kosHitac_Contents');
},
}
module.exports=methods;
