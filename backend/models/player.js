const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: String,
  age: Number,
  nbr: Number,
  post: String
});

const player = mongoose.model('Player', playerSchema);

module.exports= player;
