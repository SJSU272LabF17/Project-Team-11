var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var Event = require('../models/event');
var Expertise = require('../models/expertise');
var ObjectId = require('mongodb').ObjectId;


router.get('/display', function(req, res, next) {
    console.log("Welcome to display section!");


        UserReview.find({}, function(err, doc){
            res.render('display', {items: doc});

        });
});

router.get('/addEvent', function(req, res, next) {
    if(req.user) {
        console.log("Welcome to addevent section!");
        Expertise.find({}, function (err, results) {

            var expertiseAll = results;
            var timestamp = Date.now();
            console.log(timestamp);
            console.log(Number(timestamp));


            res.render('addEvent', {expertiseAll: expertiseAll});
        });
    }else{
        res.redirect('/login');
    }


});

router.get('/eventdetail/:id', function(req, res, next) {
    if(req.user) {
        var id = req.params.id;
        Event.find( { "event_id": id }, function(err,doc){

            if(err){
                console.error(error);
            }else {

                    User.find({}, function (err, user) {
                        if (err) {
                            console.error(error);
                        } else {

                            var render_user = [];



                            for(var num_user = 0; num_user < user.length; num_user++) {
                                var flag = 0;
                                for (var num_train = 0; num_train < user[num_user].train.length; num_train++) {
                                    for(var num_exp=0; num_exp < doc[0].requirement.length; num_exp++){

                                    if (doc[0].requirement[num_exp].number != 0 && user[num_user].train[num_train].expertise_id === doc[0].requirement[num_exp].expertise_id) {
                                        flag += flag + 1;
                                    }
                                }
                            }
                            if(flag > 0){
                                    render_user.push(user[num_user]);
                            }

                            }



                            console.log(render_user);
                            res.render('eventdetail', {event: doc, volunteer: render_user, flagsearch: "True"});
                        }
                    });

            }
        });
    }else{
        res.redirect('/login');
    }


});


router.get('/testing', function(req, res, next) {
    var doc = [{
        "_id": {
            "$oid": "5a232e8f6c30342476a435fa"
        },
        "email": "minglei.lu@sjsu.edu",
        "description": "999",
        "venue": "999",
        "date": "12/06/2017",
        "name": "999",
        "event_id": "151225511925",
        "volunteer": [],
        "requirement": [
            {
                "number": 6,
                "expertise_id": "1",
                "expertise_name": "Expertise 1",
                "_id": {
                    "$oid": "5a11e57e5d5ecd662bf35c9b"
                }
            },
            {
                "number": 0,
                "expertise_id": "2",
                "expertise_name": "Expertise 2",
                "_id": {
                    "$oid": "5a11e5e04ceb28732b9d03e2"
                }
            },
            {
                "number": 0,
                "expertise_id": "3",
                "expertise_name": "Expertise 3",
                "_id": {
                    "$oid": "5a11e6158b108b882bed3f5f"
                }
            },
            {
                "number": 0,
                "expertise_id": "4",
                "expertise_name": "Expertise 4",
                "_id": {
                    "$oid": "5a11e6365934908f2bf5ab3e"
                }
            },
            {
                "number": 0,
                "expertise_id": "5",
                "expertise_name": "Expertise 5",
                "_id": {
                    "$oid": "5a1346f8f36d2834153b90dd"
                }
            },
            {
                "number": 0,
                "expertise_id": "6",
                "expertise_name": "Expertise 6",
                "_id": {
                    "$oid": "5a134712f36d2834153b90fc"
                }
            }
        ],
        "__v": 0
    }];

    var user=[{
        "_id": {
            "$oid": "5a014b2db07f2cd5312d8cbc"
        },
        "lastName": "Lu",
        "firstName": "Minglei",
        "email": "minglei.lu@sjsu.edu",
        "password": "$2a$10$buiy2lR2mpujvFk65kVQD.ArMTx2n7M/yOs.X6O1KkMyJuMNrt5yu",
        "username": "minglei",
        "__v": 0,
        "volunteer": [
            {
                "__v": 0,
                "expertise_id": "1",
                "expertise_name": "Expertise 1",
                "_id": "5a11e57e5d5ecd662bf35c9b"
            },
            {
                "__v": 0,
                "expertise_id": "4",
                "expertise_name": "Expertise 4",
                "_id": "5a11e5e04ceb28732b9d03e2"
            },
            {
                "expertise_id": "5",
                "expertise_name": "Expertise 5",
                "_id": "5a1346f8f36d2834153b90dd"
            },
            {
                "expertise_id": "6",
                "expertise_name": "Expertise 6",
                "_id": "5a134712f36d2834153b90fc"
            },
            {
                "__v": 0,
                "expertise_id": "3",
                "expertise_name": "Expertise 3 ",
                "_id": "5a11e6365934908f2bf5ab3e"
            }
        ],
        "train": [
            {
                "__v": 0,
                "expertise_id": "2",
                "expertise_name": "Expertise 2",
                "_id": "5a11e6158b108b882bed3f5f"
            },
            {
                "__v": 0,
                "expertise_id": "3",
                "expertise_name": "Expertise 3 ",
                "_id": "5a11e6365934908f2bf5ab3e"
            },
            {
                "__v": 0,
                "expertise_id": "4",
                "expertise_name": "Expertise 4",
                "_id": "5a11e5e04ceb28732b9d03e2"
            }
        ]
    },
        {
            "_id": {
                "$oid": "5a014b6db07f2cd5312d8cbd"
            },
            "lastName": "Zhai",
            "firstName": "Yiming",
            "email": "yiming.zhai@sjsu.edu",
            "password": "$2a$10$zPBzJtO0ShlZWIpJiTGCoe6eoWXcBzvZiWMgP5JOkli8DY0ghTUta",
            "username": "yiming",
            "__v": 0,
            "volunteer": [
                {
                    "__v": 0,
                    "expertise_id": "2",
                    "expertise_name": "Expertise 2",
                    "_id": "5a11e6158b108b882bed3f5f"
                },
                {
                    "__v": 0,
                    "expertise_id": "3",
                    "expertise_name": "Expertise 3 ",
                    "_id": "5a11e6365934908f2bf5ab3e"
                }
            ],
            "train": [
                {
                    "__v": 0,
                    "expertise_id": "4",
                    "expertise_name": "Expertise 4",
                    "_id": "5a11e5e04ceb28732b9d03e2"
                },
                {
                    "__v": 0,
                    "expertise_id": "2",
                    "expertise_name": "Expertise 2",
                    "_id": "5a11e6158b108b882bed3f5f"
                }
            ]
        }];

    res.render('eventdetail',{event: doc, volunter: user, flagsearch: "True"});


});



router.post('/addnewEvent',function(req,res){
    console.log("Things is activated.");
    console.log(req.user);
    console.log(req.body);
    console.log(req.body.number0);
    console.log(req.body.number1);
    console.log(req.body.number2);
    console.log(req.body.number3);
    console.log(req.body.number4);
    console.log(req.body.number5);
    var expertise_num = [Number(req.body.number0),Number(req.body.number1),
        Number(req.body.number2),Number(req.body.number3),Number(req.body.number4),
        Number(req.body.number5)];
    var timestamp = Number(Date.now());
    Expertise.find({}, function(err, doc){

        var render_data = {
            email: req.user.email,
            description: req.body.description,
            venue: req.body.eventaddress,
            date: req.body.eventdate,
            name: req.body.eventname,
            volunteer: [],
            requirement: doc,
            event_id: timestamp,
            time: req.body.eventtime

        };



        console.log(render_data);
        var eventInstance = new Event(render_data);
        for(x=0; x<expertise_num.length; x++){
            if(isNaN(expertise_num[x])){
                expertise_num[x] = 0;
            }
            eventInstance.requirement[x]['number'] = expertise_num[x];
        }
        console.log(eventInstance);
        eventInstance.save(function(error){
            if(error){
                console.error(error);
            }else{
                var url_temp = 'eventdetail/' + timestamp;
                res.redirect(url_temp);
            }
        });
    });


});

router.get('/pro', function(req, res, next) {
    console.log("Welcome to addevent section!");



    res.render('profile-test', {});


});

router.get('/insert', function(req, res, next) {
  var item = {
    name: "test_for_expertise",
    content: "Hope it appears somewhere"
  };

  var data = new UserReview(item);
  data.save();

  res.redirect('/display');
});

// router.post('/update', function(req, res, next) {
//   var id = req.body.id;
//
//   UserReview.findById(id, function(err, doc) {
//     if (err) {
//       console.error('error, no entry found');
//     }
//     doc.name = req.body.name;
//     doc.content = req.body.content;
//     doc.save();
//   })
//   res.redirect('/display');
// });
//
// router.post('/delete', function(req, res, next) {
//     //console.log(JSON.stringify(req));
//     var id = req.body.id;
//     UserReview.findByIdAndRemove(id).exec();
//     res.redirect('/display');
// });

module.exports = router;
