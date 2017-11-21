var mongoose = require('mongoose');

var Test = mongoose.model('test',{
    name: String,
    content: String

});

module.exports = Test;