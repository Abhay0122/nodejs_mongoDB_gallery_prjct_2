const mongoose = require("mongoose");

const galleryModel = new mongoose.Schema({
    title: String,
    author: String,
    image: String,
});

const Gallery  = mongoose.model("Gallery", galleryModel);

module.exports = Gallery;
