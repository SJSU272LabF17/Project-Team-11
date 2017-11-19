var Expertise = require('../models/expertise');
var expertiseListDropDownTrain =[];
var expertiseListDropDownVol =[];


function profile(req,res){
//	console.log("entered profile");
//  Expertise.find({},function(err, results){
//	  console.log("f");
//	  var userDetails ={
//	"firstname": "Divya" ,
//      "email": "admin@sjsu.edu" 
//      
//	  }
//	  res.render('profile.ejs', {user:userDetails });
 // , expertiseList:results
  //})
	
	var user=
		         {
		             "id": "test1",
		             "username": "test1",
		             "password": "test1",
		            "email": "test1@sjsu.edu",
		             "firstName": "Eric",
		            "lastName": "James",
		            "train":
		            	[
		            	{ "expertise_id":1, "expertise_name": "Expertise 1"},
		            	{ "expertise_id":4, "expertise_name": "Expertise 4"}
		            	],
		            "volunteer":
		            		[
				            	{ "expertise_id":2, "expertise_name": "Expertise 2"},
				            	{ "expertise_id":3, "expertise_name": "Expertise 3"}
				            	]
		
		         };
	
	var expertiseAll=[
       
           	{ "expertise_id":1, "expertise_name": "Expertise 1"},
           	{ "expertise_id":2, "expertise_name": "Expertise 2"},
           	{ "expertise_id":3, "expertise_name": "Expertise 3"},
           	{ "expertise_id":4, "expertise_name": "Expertise 4"},
           	{ "expertise_id":5, "expertise_name": "Expertise 5"},
           	{ "expertise_id":6, "expertise_name": "Expertise 6"},
           	{ "expertise_id":7, "expertise_name": "Expertise 7"},
           	{ "expertise_id":8, "expertise_name": "Expertise 8"}
           	
           	
        ];
	
 

	res.render('profile.ejs', {user:user, expertiseAll:expertiseAll });
	}
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



exports.profile=profile;