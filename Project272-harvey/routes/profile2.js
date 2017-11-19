var Expertise = require('../models/expertise');

function profile(req,res){
	console.log("entered profile");
  //Expertise.find({},function(err, results){
	 // console.log("f");
	  var userDetails ={
	"firstname": "Divya" ,
      "email": "admin@sjsu.edu" 
      
	  }
	  res.render('profile.ejs', {user:userDetails });
  //, expertiseList:results
  //})
  
//    mongo.connect(mongoURL, function(){
//        console.log('Connected to mongo at: ' + mongoURL);
//        var coll = mongo.collection('user');
//        var collExpertise  = mongo.collection('expertise');
//      
//        var expertiseList= collExpertise.find().toArray(function(err, results){
//           
//        coll.findOne({firstname: "Divya"},function(err, userDetails){
//            if (userDetails) {
//         
//           	res.render('profile.ejs', {user:userDetails, expertiseList:results });
//            } else {
//            	res.render('error.ejs');
//            }
//        });
//        });
//    });  
}


exports.profile=profile;