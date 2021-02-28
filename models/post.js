var mongoose = require('mongoose');

var post_schema = new mongoose.Schema({

    title: {
        type: String,
    },
    content: {
        type: String,
    },
    picture: {
        type: String,
    },
    picture_url: {
        type: String,
    },

}, {
    timestamps: true
});

var post = mongoose.model("Post", post_schema);
module.exports = post;