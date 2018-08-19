const UserCredentials = require('./userCredentials.model');
const UserModel = require('./user.model');
const Auth = require('../auth/auth');
const bcrypt = require('bcrypt-nodejs');

class User {
  static async create (user) {
    try {
      const exists = await UserModel.findOne({ email: user.email });
      if (exists) {
        throw new Error('User already exists for this email.');
      }

      const userModel = await new UserModel(Object.assign(new UserModel(), user)).save();
      const credentials = await createCredentials(userModel);
      return {
        message: 'User created!',
        body: credentials,
      };
    } catch (error) {
      throw new Error(`Error creating user: ${error}`);
    }

    function createCredentials (data) {
      return Object.assign(
        new UserCredentials(),
        { hash: user.password, user_id: data._id },
      ).save();
    }
  }

  static async login (user) {
    const { email, password } = user;
    try {
      const userModel = await UserModel.findOne({ email });
      const userCredentials = await getUserCredentials(userModel);
      const verification = await verifyPassword(userCredentials);
      const token = Auth.authenticate(verification);
      return token;
    } catch (error) {
      throw new Error(error);
    }

    function getUserCredentials (record) {
      return UserCredentials.findOne({ user_id: record._id });
    }

    function verifyPassword (record) {
      return new Promise((resolve, reject) => {
        bcrypt.compare(password, record.hash, (error, isMatch) => {
          if (!isMatch) {
            reject(new Error('Provided password does not match the one on file'));
          }
          resolve({ user: email });
        });
      });
    }
  }
}

module.exports = User;
