const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const UserCredentialsSchema = new Schema({
  hash: String,
  user_id: ObjectId,
});


UserCredentialsSchema.pre('save', function (next) {
  const credentials = this;

  if (!credentials.isModified('hash')) {
    return next();
  }

  bcrypt.hash(credentials.hash, null, null, (error, hash) => {
    if (error) {
      return next(error);
    }

    credentials.hash = hash;
    next();
  });
});

module.exports = mongoose.model('UserCredentials', UserCredentialsSchema);
