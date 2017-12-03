var express = require('express');
var router = express.Router();
var Eventinfo = require('../models/event');
var Expertise = require('../models/expertise');
var User = require('../models/user');


route.post('/addnewEvent',function(req,res){
    console.log("Things is activated.");
    console.log(req.user);
});