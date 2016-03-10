var mongoose = require("mongoose"),
    debug    = require('debug')('app:models');

var commentSchema = new mongoose.Schema({
  author:       {
                  type: mongoose.Schema.Types.ObjectId,
                  ref:  "User"
                },
  authorHandle: String,
  body:         { type: String, require: true },
  createdAt:    { type: Date,   default: Date.now },
  comments:     [this]
});

var postSchema = new mongoose.Schema({
  author:       {
                  type: mongoose.Schema.Types.ObjectId,
                  ref:  "User"
                },
  authorHandle: String,
  title:        { type: String, required: true },
  body:         { type: String, required: true },
  upvotes:      { type: Number, default: 0 },
  createdAt:    { type: Date,   default: Date.now },
  comments:     [commentSchema]
});

var blabSchema = new mongoose.Schema({
  name:          { type: String, required: true },
  creator:       {
                   type: mongoose.Schema.Types.ObjectId,
                   ref:  "User"
                 },
  creatorHandle: String,
  createdAt:     { type: Date, default: Date.now },
  posts:         [postSchema]
});

var Blab = mongoose.model("Blab", blabSchema);

module.exports = Blab;
