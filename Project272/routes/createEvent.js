var Expertise = require('../models/expertise');
var Event = require('../models/event');
var profile = require('./profile');
var expertiseReq=[];
var expertiseAll;
var numberInList=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//TODO
var email;
//var email="divya@divya.com";
var name;
var date;
var venue;
var description;

function createEvent(req,res){
    if(req.isAuthenticated()){

        //retainDetails(req,res);
        email=req.user.email;
        Expertise.find({}, function(err, results){
            expertiseAll=results;
            console.log("hitting createEvent"+email);
            //res.render('createEvent.ejs',{expertiseAll:expertiseAll, numberInList:numberInList,expertiseReq:expertiseReq});
            renderPage(req,res);
        });
    }
    else{
        res.redirect("/login");
    }
}


function deleteVolFromEvent(req,res){
    //retainDetails(req,res);
    var deleteExpertise=req.body.deleteExpertise;
    deleteExpertise = JSON.parse(deleteExpertise);
    var expertise_id = deleteExpertise.expertise_id;
    var expertise_name =deleteExpertise.expertise_name;
    //var expertise=
    expertiseAll.push({expertise_id:expertise_id,expertise_name:expertise_name});

    for(var i=0;i<expertiseReq.length;i++){
        if (expertiseReq[i].expertise_id == expertise_id) {

            expertiseReq.splice(i, 1);

        }
    }
    //res.render('createEvent.ejs',{expertiseAll:expertiseAll, numberInList:numberInList,expertiseReq:expertiseReq});
    renderPage(req,res);
}

function addVolunteerNeed(req,res){
    console.log("hitting add V0l");
    //retainDetails(req,res);
    var selectVolunteerNeed=req.body.selectVolunteerNeed;
    selectVolunteerNeed = JSON.parse(selectVolunteerNeed);
    var expertise_id = selectVolunteerNeed.expertise_id;
    var expertise_name =selectVolunteerNeed.expertise_name;
    var expertise_number = req.body.selectVolunteerNumber;
    for(var i=0;i<expertiseAll.length;i++){
        if (expertiseAll[i].expertise_id == expertise_id) {

            expertiseAll.splice(i, 1);

        }
    }


    var expertiseReq1= {"expertise_id":expertise_id,"expertise_name":expertise_name,"number":expertise_number};
    expertiseReq.push(expertiseReq1);
    //console.log(expertiseReq+"expertiseReq");
    renderPage(req,res);
    //res.render('createEvent.ejs',{expertiseAll:expertiseAll, numberInList:numberInList,expertiseReq:expertiseReq});

}

function addEvent(req,res) {
    if (req.isAuthenticated()) {
        console.log("adding event");
        name = req.body.name;
        date = req.body.date;
        venue = req.body.venue;
        description = req.body.description;
        console.log(name + "name", date + "date", venue + "venue")

        var requirement = expertiseReq;
        //email: String,

        console.log(name + "name", "date" + date,
            "venue" + venue,
            "description" + description,
            "email" + email,
            "requirement" + requirement);

        var event = new Event();
        event.name = name;
        event.date = date;
        event.venue = venue;
        event.description = description;
        event.email = email;
        event.requirement = requirement;


        event.save();
        profile.profile(req, res);

    }
    else{
        res.redirect('/login');
    }
}

function retainDetails(req,res){
    name=req.body.name;
    date=req.body.date;
    venue=req.body.venue;
    description=req.body.description;
    console.log(name+"name",date+"date",venue+"venue")
}

function renderPage(req,res){
    res.render('mainCopy.ejs',{expertiseAll:expertiseAll, numberInList:numberInList,expertiseReq:expertiseReq, name:name, date:date, venue:venue, description:description});

}


exports.createEvent=createEvent;
exports.addVolunteerNeed=addVolunteerNeed;
exports.deleteVolFromEvent=deleteVolFromEvent;
exports.addEvent=addEvent;
exports.retainDetails=retainDetails;

