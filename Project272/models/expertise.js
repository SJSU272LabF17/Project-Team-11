
var mongoose = require('mongoose');

var Expertise = mongoose.model('Expertise',{
	
	expertise_id :String,
    expertise_name : String
   
	
});

module.exports = Expertise;