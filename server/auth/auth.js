const jwt = require('jsonwebtoken');

/**
 * @class Auth
 * Creates and signs the JWT session object
 */

class Auth {
  /**
   * Sign and return a JWT for a given user
   * @param {Object} user Reference to the user
   */
  static authenticate (user) {
    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '2h' });
  }
}

module.exports = Auth;
