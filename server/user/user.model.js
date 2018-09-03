const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  nickname: String,
  secondaryEmail: String,
  gender: String,
});

module.exports = mongoose.model('User', UserSchema);
