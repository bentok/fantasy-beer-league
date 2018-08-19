const jwt = require('jsonwebtoken');

class Auth {
  static authenticate (user) {
    return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '2h' });
  }
}

module.exports = Auth;
