var mongoose = require('mongoose');

module.exports = mongoose.model('Event',{
    event_id: String,
    name: String,
    email: String,
    date: String,
    time: String,
    venue: String,
    description: String,
    requirement:[{
        expertise_id: String,
        expertise_name: String,
        number: Number
    }],
    volunteer:[String]
});
