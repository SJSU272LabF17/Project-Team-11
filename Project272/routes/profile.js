var ejs = require("ejs");
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/project272";

function user(req,res){
    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('user');
        var collExpertise  = mongo.collection('expertise');
      
        var expertiseList= collExpertise.find().toArray(function(err, results){
           
        coll.findOne({firstname: "Divya"},function(err, userDetails){
            if (userDetails) {
         
           	res.render('profile.ejs', {user:userDetails, expertiseList:results });
            } else {
            	res.render('error.ejs');
            }
        });
        });
    });  
}


exports.profile=user;