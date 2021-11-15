const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  foundation: String,
  name: String,
  owner: String,
  staduim: String
});

const team = mongoose.model('Team', teamSchema);

module.exports= team;
