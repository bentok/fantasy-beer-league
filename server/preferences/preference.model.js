const mongoose = require('mongoose');

const { Schema } = mongoose;

const PreferencesSchema = new Schema({
  name: String,
  value: String,
  permission: String,
});

module.exports = mongoose.model('Preference', PreferencesSchema);
