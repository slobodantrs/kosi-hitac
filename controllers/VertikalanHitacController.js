var methods={
//Vertikalan hitac
VertikalanHitac1: function(req, res) {
	
		res.render('pages/ejss_model_VertikalanHitac/vertikalanHitac_Intro_1');
	
},
VertikalanHitac2: function(req, res) {
	
		res.render('pages/ejss_model_vertikalanHitac/vertikalanHitac_Intro_2');
	
},
VertikalanHitac: function(req, res) {
	var id=req.params.id;
	res.id=id;

	res.path1='./vertikalanHitac_Contents';
	res.path2='./vertikalanHitac_Intro_1';
	if(id==2){
		res.path2='./vertikalanHitac_Intro_2';
	}	
	else{
		res.path2='./vertikalanHitac_Intro_1';
	}
		console.log(`Vertikalan hitac kontroler %d, %s, %s`,id,res.path1,res.path2);
	
	// res.path1='./KosHitac_Contents';
	// res.path2='./KosHitac_Intro_2';
	// if(id==1){
		// res.path2='./KosHitac_Intro_1';
	// }	
	// else{
		// res.path2='./KosHitac_Intro_2';
	// }
	//res.render('pages/ejss_model_vertikalanHitac/vertikalanHitac_Contents',res);

   res.render('pages/ejss_model_vertikalanHitac/vertikalanHitac',res);

},
VertikalanHitacContents: function(req, res) {
	
    res.render('pages/ejss_model_vertikalanHitac/vertikalanHitac_Contents');
},
VertikalanHitac_Simulation:function(req, res) {
	res.path1='./vertikalanHitac_Contents';
	console.log('Vertikalan hitac kontroler  %s, ',res.path1);
    res.render('pages/ejss_model_vertikalanHitac/vertikalanHitac_Simulation',res);
},
}
module.exports=methods;
