var Expertise = require('../models/expertise');
var User =require('../models/user');
var Event =require('../models/event');
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
	var expertiseAll;
	var user;
	var events;
	var email= "divya@divya.com";
	//var email="admin@sjsu.edu";
//	var user=
//		         {
//		             "id": "divya",
//		             "username": "divya",
//		             "password": "divya",
//		            "email": "divya@divya.com",
//		             "firstName": "divya",
//		            "lastName": "divya",
//		            "train":
//		            	[
//		            	{ "expertise_id":1, "expertise_name": "Expertise 1"},
//		            	{ "expertise_id":4, "expertise_name": "Expertise 4"}
//		            	],
//		            "volunteer":
//		            		[
//				            	{ "expertise_id":2, "expertise_name": "Expertise 2"},
//				            	{ "expertise_id":3, "expertise_name": "Expertise 3"}
//				            	]
//		
//		         };
	
	User.findOne({email:email}, function(err, results){
		user=results;
		//console.log(user+"user");
	
	Expertise.find({}, function(err, results){
		
		expertiseAll=results;
	      //console.log(expertiseAll+"expertiseAll");
		 
	  Event.find({email:email}, function(err, results){
	events=results;
//	var expertiseAll=[
//       
//           	{ "expertise_id":1, "expertise_name": "Expertise 1"},
//           	{ "expertise_id":2, "expertise_name": "Expertise 2"},
//           	{ "expertise_id":3, "expertise_name": "Expertise 3"},
//           	{ "expertise_id":4, "expertise_name": "Expertise 4"},
//           	{ "expertise_id":5, "expertise_name": "Expertise 5"},
//           	{ "expertise_id":6, "expertise_name": "Expertise 6"},
//           	{ "expertise_id":7, "expertise_name": "Expertise 7"},
//           	{ "expertise_id":8, "expertise_name": "Expertise 8"}
//           	
//           	
//        ];
	
 
	     // console.log(user+"user");
	res.render('profile.ejs', {user:user, expertiseAll:expertiseAll, events:events });
	  });
	 });
	 });
	}

// JSON.parse('<%-JSON.stringify(expertiseAll[i])%>'
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

function addExpertiseVolunteer(req,res){
	
		var expertiseToAdd= req.body.selectExpertiseVolunteer;
		
		expertiseToAdd = JSON.parse(expertiseToAdd);
		
		
		// var newUser = new User();
		
		//var expertiseToAdd= {"expertise_id":expertiseId, "expertise_name":expertiseName}
		//expertiseToAdd.expertise_id(expertise_id);
		//expertiseToAdd.expertise_name(expertise_name);
		//console.log(expertiseToAdd);
	//var expertise = {"expertise_id": req.body.fName, "expertise_name": req.body.lName};
		//newUser.findOneAndUpdate({email: req.body.email}, {$push: {volunteer: expertiseToAdd}});
		
		console.log(req.body.email);
		console.log(expertiseToAdd.expertise_id);
		
		User.findOneAndUpdate(
			 //{ email: req.body.email }, 
			 { email: req.body.email , "volunteer.expertise_id": {$ne:expertiseToAdd.expertise_id} }, 
			    { $push: { volunteer: expertiseToAdd } },
			    //{upsert: true}, 
			    function(err, doc){
			        if (err) {console.log(err);}
			        else {console.log("succesfully saved");}
			    });
		profile(req,res);
		
}

function addExpertiseTrain(req,res){
	
	var expertiseToAdd= req.body.selectExpertiseTrain;
	
	expertiseToAdd = JSON.parse(expertiseToAdd);

	//console.log(req.body.email);
	
	User.findOneAndUpdate(
		    { email: req.body.email , 'train.expertise_id': {$ne:expertiseToAdd.expertise_id}}, 
		    { $push: { train: expertiseToAdd } },
		    //{upsert: true},
		    function(err, doc){
		        if (err) {console.log(err);}
		        else {console.log("succesfully saved");}
		    });
	profile(req,res);
	
}


function goToEvent(req,res){
	console.log(req.body.email);
	console.log(req.body.event_id);
	//redirectToEventPage
	
}

exports.profile=profile;
exports.addExpertiseVolunteer=addExpertiseVolunteer;
exports.addExpertiseTrain=addExpertiseTrain;
exports.goToEvent =goToEvent;