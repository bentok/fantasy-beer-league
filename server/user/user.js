const UserCredentials = require('./userCredentials.model');
const UserModel = require('./user.model');
const Auth = require('../auth/auth');
const bcrypt = require('bcrypt-nodejs');

/**
 * @class User
 * Logic for updating a user
 */

class User {
  /**
   * Create a new user and create their credentials in two separate documents
   * @param {Object} user User object
   */
  static async create (user) {
    try {
      const exists = await UserModel.findOne({ email: user.email });
      if (exists) {
        throw new Error('User already exists for this email.');
      }

      const userModel = await new UserModel(Object.assign(new UserModel(), user)).save();
      await createCredentials(userModel);
      return {
        message: 'User created!',
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

  /**
   * Login a user and verify their credentials
   * @param {Object} user User object
   */
  static async login (user) {
    const { email, password } = user;
    try {
      const userModel = await UserModel.findOne({ email });
      const userCredentials = await getUserCredentials(userModel);
      const verification = await verifyPassword(userCredentials);
      const token = Auth.authenticate(verification);
      return { token };
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
          resolve({ email });
        });
      });
    }
  }

  /**
   * Get details of a user's account
   * @param {Object} params
   * @param {String} params.email Email address for user
   */
  static async getUserAccount ({ email }) {
    try {
      const userAccount = await UserModel.findOne({ email });
      if (userAccount === null) {
        throw new Error(`User with email ${email} was not found`);
      }
      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update the details of a user's account
   * @param {Object} params
   * @param {String} params.email Email address for user
   * @param {Object} params.changes Oject containing the changes to the user's info
   */
  static async update ({ email, changes }) {
    try {
      const account = await User.getUserAccount({ email });
      const updatedAccount = await Object.assign(account, changes).save();
      return {
        message: 'Model updated',
        updatedAccount,
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
