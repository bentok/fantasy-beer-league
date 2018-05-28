const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const UserCredentialsSchema = new Schema({
  hash: String,
  user_id: ObjectId,
});

module.exports = mongoose.model('UserCredentials', UserCredentialsSchema);
