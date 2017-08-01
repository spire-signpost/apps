/*
  node basic api
  - node.js, express, mongoose, mongodb...
  - user-model.js
  - mongoose model for users
*/

// require mongoose module - not custom mongoose config file
var mongoose = require('mongoose');

// specify model for user
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// module export
module.exports = {
  User // ES6 shortcut for User: User
};
