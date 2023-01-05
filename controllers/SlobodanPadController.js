var methods={
//Vertikalan hitac
SlobodanPad1: function(req, res) {
	
		res.render('pages/ejss_model_SlobodanPad/slobodanPad_Intro_1');
	
},
SlobodanPad2: function(req, res) {
	
		res.render('pages/ejss_model_SlobodanPad/slobodanPad_Intro_2');
	
},
SlobodanPad: function(req, res) {
	var id=req.params.id;
	res.id=id;

	res.path1='./slobodanPad_Contents';
	res.path2='./slobodanPad_Intro_1';
	if(id==2){
		res.path2='./slobodanPad_Intro_2';
	}	
	else{
		res.path2='./slobodanPad_Intro_1';
	}
		console.log(`Slobodan pad kontroler %d, %s, %s`,id,res.path1,res.path2);
	
	

   res.render('pages/ejss_model_SlobodanPad/slobodanPad',res);

},
SlobodanPadContents: function(req, res) {
	
    res.render('pages/ejss_model_SlobodanPad/slobodanPad_Contents');
},
SlobodanPadSimulacija: function(req, res) {
	
    res.render('pages/ejss_model_SlobodanPad/SlobodanPad_Simulation');
},
}
module.exports=methods;
