var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var userSchema = new mongoose.Schema({
  handle:    { type: String,  required: true },
  email:     { type: String,  required: true },
  moderator: { type: Boolean, default: false },
  createdAt: { type: Date,    default: Date.now }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
