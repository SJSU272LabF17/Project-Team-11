var express = require('express');
var router = express.Router();
var Event = require('../models/event');
var Expertise = require('../models/expertise');
var User = require('../models/user');


router.get('/search', function(req, res, next) {
    if(req.user) {
        var trainers = [
            {
                "id": "test1",
                "username": "test1",
                "password": "test1",
                "email": "test1@sjsu.edu",
                "firstName": "Eric",
                "lastName": "James"

            },
            {
                "id": "test2",
                "username": "test2",
                "password": "test2",
                "email": "test2@sjsu.edu",
                "firstName": "Yiming",
                "lastName": "James"
            },
            {
                "id": "test3",
                "username": "test3",
                "password": "test3",
                "email": "test3@sjsu.edu",
                "firstName": "Zening",
                "lastName": "James"
            },
            {
                "id": "test4",
                "username": "test4",
                "password": "test4",
                "email": "test4@sjsu.edu",
                "firstName": "Chaya",
                "lastName": "James"
            }
        ];
        var trainer_temp = [];
        Expertise.find({}, function (err, results) {


            var expertiseAll = results;

            Event.find({}, function (err, doc) {
                console.log(doc);
                res.render('search', {event: doc, trainer: trainer_temp, user: req.user, expertiseAll: expertiseAll, flagsearch:"False"});

            });
        });
    }else{
        res.redirect('/login');
    }
});

router.post('/search-trainer', function(req, res, next) {
    if(req.user) {
        var expertise = req.body.selectExpertise;

        var temp = [
            {
                "id": "test1",
                "username": "test1",
                "password": "test1",
                "email": "test1@sjsu.edu",
                "firstName": "Eric",
                "lastName": "James"

            },
            {
                "id": "test2",
                "username": "test2",
                "password": "test2",
                "email": "test2@sjsu.edu",
                "firstName": "Yiming",
                "lastName": "James"
            },
            {
                "id": "test3",
                "username": "test3",
                "password": "test3",
                "email": "test3@sjsu.edu",
                "firstName": "Zening",
                "lastName": "James"
            },
            {
                "id": "test4",
                "username": "test4",
                "password": "test4",
                "email": "test4@sjsu.edu",
                "firstName": "Chaya",
                "lastName": "James"
            }
        ];
        var expertise = JSON.parse(expertise);

        User.find({ }, function(err,trainers){
        Expertise.find({}, function (err, results) {
            console.log(trainers);
            console.log('This is expertise field');
            var render_user = [];

            var expertiseAll = results;
            for(var num_user =0; num_user< trainers.length; num_user++){
                for(var num_train = 0; num_train < trainers[num_user].train.length; num_train++){
                    if (trainers[num_user].train[num_train].expertise_id === expertise.expertise_id ){
                        render_user.push(trainers[num_user]);
                    }
                }

            }


            Event.find({}, function (err, doc) {

                res.render('search', {event: doc, trainer: render_user, user: req.user, expertiseAll: expertiseAll, flagsearch: "True",
                expertname: expertise.expertise_name });

            });
        });
    });
    }else{
        res.redirect('/login');
    }
});


module.exports = router;
