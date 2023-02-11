const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const cocktailSchema = new Schema({
    title: String,
    body: String,
});

// Model
const BlogPost = mongoose.model('cocktail', cocktailSchema);

module.exports =  BlogPost;