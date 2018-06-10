const mongoose = require('mongoose');

const { Schema } = mongoose;

const PreferencesSchema = new Schema({
  startPage: String,
  emailUpdates: Boolean,
  profileImage: String, // Account avatar or team logo
});

module.exports = mongoose.model('Preferences', PreferencesSchema);
