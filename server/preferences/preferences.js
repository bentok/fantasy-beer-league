const PreferenceModel = require('./preference.model');
const User = require('../user/user');

/**
 * @class Preferences
 * Logic for handling preferences
 */

class Preferences {
  /**
   * Get the preferences for an entity
   * @param {Object} params
   * @param {String} params.email Email address from the user request object
   */
  static async get ({ email }) {
    return User.getUserAccount({ email }).preferences;
  }


  /**
   * Update the preferences for an entity
   * @param {Object} params
   * @param {String} params.email Email address from the user request object
   * @param {Object} params.preferences Array of preferences to update
   */
  static async update ({ email, preferences: newPreferences }) {
    try {
      const preferences = await User.getUserAccount({ email }).preferences || new Map();
      newPreferences.forEach(preference => {
        preferences.set(preference.name, new PreferenceModel(preference));
      });
      return User.update({
        email,
        changes: {
          preferences,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Set the preferences for the first time
   * @param {Object} params
   * @param {String} params.email Email address from the user request object
   * @param {Object} params.preferences Array of preferences to update
   */
  static async create ({ email, preferences }) {
    return Preferences.update({ email, preferences });
  }
}

module.exports = Preferences;
