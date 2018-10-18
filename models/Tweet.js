//add your Tweet model here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TwitterSchema = new Schema({
  tweet: {
    type: String,
    required: "You must include a tweet"
  },
  username: {
    type: String,
    required: "You must include a username"
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

// this creates the twitter schema from the mongoose model
var twitter = mongoose.model('twitter', TwitterSchema);
module.exports = twitter;