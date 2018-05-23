const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserCredentialsSchema   = new Schema({
  hash: String,
  user_id: ObjectId,
});

module.exports = mongoose.model('UserCredentials', UserCredentialsSchema);