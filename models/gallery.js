var mongoose = require('mongoose');

var gallery_schema = new mongoose.Schema({

    title: {
        type: String,
    },

    picture_description: {
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

var gallery = mongoose.model("Gallery", gallery_schema);
module.exports = gallery;