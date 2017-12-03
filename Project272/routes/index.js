var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	return next();
};

module.exports = function(passport){

	/* GET login page. */
    router.get('/', isAuthenticated, function(req, res){

    	if(req.isAuthenticated()){
    		console.log(req.user.firstName);

            res.render('homepage', { user: req.user });
		}
		else{
    		var blank = {
    			firstName: 'True'
			}
    		res.render('homepage', {user: blank});
		}


    });

    router.get('/login', isAuthenticated,function(req, res) {
        // Display the Login page with any flash message, if any

        if(req.isAuthenticated()){
            res.redirect('/');
        }
        else{
            res.render('index', { message: req.flash('message') });
        }

    });

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash : true
	}));

	/* GET Registration Page */
	router.get('/signup', function(req, res){
        if(req.isAuthenticated()){
        	res.redirect('/');
        }
        else{
            res.render('register',{message: req.flash('message')});
        }


	});

	/* Handle Registration POST */
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash : true  
	}));

	/* GET Home Page */
	router.get('/home', isAuthenticated, function(req, res){
        if(req.isAuthenticated()){
            res.render('home', { user: req.user });
        }
        else{
            res.redirect('/login');
        }


	});

	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});



	return router;
}





