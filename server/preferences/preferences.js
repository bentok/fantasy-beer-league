const PreferencesModel = require('./preferences.model');

class Preferences {
  constructor () {
    this.startPage = 'dashboard';
    this.emailUpdates = true;
    this.profileImage = 'team'; // Account avatar or team logo
  }

  static async fetch (user) {
    return PreferencesModel.findOne({ user_id: user._id });
  }

  static async update () {
    return 'Update preferences';
  }
}

module.exports = Preferences;
