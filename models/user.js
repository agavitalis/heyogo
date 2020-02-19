import mongoose from 'mongoose';

var user_schema = new mongoose.Schema({

    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },

});

var user = mongoose.model("User", user_schema);
module.exports = user;