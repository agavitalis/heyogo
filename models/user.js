var mongoose = require('mongoose');

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
    userType: {
		type: String,
		enum : ["user","admin","sales"],
		default: "user"
	},

}, {
    timestamps: true
});

var user = mongoose.model("User", user_schema);
module.exports = user;