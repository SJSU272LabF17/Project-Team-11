var express = require('express');
var router = express.Router();
var UserReview = require('../models/test');
var Event = require('../models/event');
var Expertise = require('../models/expertise');


router.get('/display', function(req, res, next) {
    console.log("Welcome to display section!");


        UserReview.find({}, function(err, doc){
            res.render('display', {items: doc});

        });
});

router.get('/addevent', function(req, res, next) {
    console.log("Welcome to addevent section!");
    Expertise.find({}, function (err, results) {

        var expertiseAll = results;


        res.render('addEvent', {expertiseAll: expertiseAll});
    });


});

router.post('/addnewEvent',function(req,res){
    console.log("Things is activated.");
    console.log(req.user);
    console.log(req.body);
    Expertise.find({expertise_name: req.body.expertiseid}, function(err, doc){

        var render_data = {
            email: req.user.email,
            description: req.body.description,
            venue: req.body.eventaddress,
            date: req.body.eventdate,
            name: req.body.eventname,
            volunteer: [],
            requirement: doc,
        };
        render_data.requirement[0]['number']=req.body.number;
        console.log(render_data);
        var eventInstance = new Event(render_data);
        eventInstance.save(function(error){
            if(error){
                console.error(error);
            }else{
                res.redirect('addevent');
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
