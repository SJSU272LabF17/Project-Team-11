var profile = require('./profile');

function main(req,res){
	console.log("hitting main");
	profile.profile(req,res);
	//res.render('main.ejs', callBack(req,res));
}

function callBack(req,res){
	console.log("waiting1");
	
	console.log("waiting");
}
exports.main=main;