var methods={
//Vertikalan hitac
KruznoKretanjeMT1: function(req, res) {
	
		res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Intro_1');
	
},
KruznoKretanjeMT2: function(req, res) {
	
		res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Intro_2');
	
},
KruznoKretanjeMT: function(req, res) {
	var id=req.params.id;
	res.id=id;

	res.path1='./KruznoKretanjeMT_Contents';
	res.path2='./KruznoKretanjeMT_Intro_1';
	if(id==2){
		res.path2='./KruznoKretanjeMT_Intro_2';
	}	
	else{
		res.path2='./KruznoKretanjeMT_Intro_1';
	}
		console.log(`Kruzno kretanje kontroler %d, %s, %s`,id,res.path1,res.path2);
	
	// res.path1='./KosHitac_Contents';
	// res.path2='./KosHitac_Intro_2';
	// if(id==1){
		// res.path2='./KosHitac_Intro_1';
	// }	
	// else{
		// res.path2='./KosHitac_Intro_2';
	// }
	//res.render('pages/ejss_model_vertikalanHitac/vertikalanHitac_Contents',res);

   res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT',res);

},
KruznoKretanjeMTContents: function(req, res) {
	
    res.render('pages/ejss_model_KruznoKretanjeMT/KruznoKretanjeMT_Contents');
},
}
module.exports=methods;
