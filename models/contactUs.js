var mongoose = require('mongoose');

var contact_us_schema = new mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    }
    
}, {
    timestamps: true
});

var contact_us = mongoose.model("ContactUs", contact_us_schema);
module.exports = contact_us;