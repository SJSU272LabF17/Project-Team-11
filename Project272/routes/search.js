var express = require('express');
var router = express.Router();
var Eventinfo = require('../models/event');


router.get('/search', function(req, res, next) {
    var trainers=[
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

    Eventinfo.find({}, function(err, doc){
        res.render('search-test', {event: doc, trainer:trainers});

    });
});

router.get('/search1', function(req, res, next) {
    var trainers=[
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

    Eventinfo.find({}, function(err, doc){
        res.render('search-test1', {event: doc, trainer:trainers});

    });
});


module.exports = router;
