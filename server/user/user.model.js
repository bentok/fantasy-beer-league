const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  nickname: String,
  gender: String,
  preferences: {
    type: Map,
    of: Object,
  },
});

module.exports = mongoose.model('User', UserSchema);
