var mongoose = require('mongoose');

var product_schema = new mongoose.Schema({

    product_name: {
        type: String,
    },
    product_description: {
        type: String,
    },
    picture: {
        type: String,
    },
    picture_url: {
        type: String,
    },

});

var product = mongoose.model("Product", product_schema);
module.exports = product;