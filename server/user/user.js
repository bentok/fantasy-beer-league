const UserModel = require('./user.model');
const UserCredentials = require('./userCredentials.model');
const bcrypt = require('bcrypt-nodejs');

class User {
  static async create (user) {
    const userModel = await new UserModel().save(Object.assign(new UserModel(), user));
    const credentials = await createCredentials(userModel);
    return {
      message: 'User created!',
      body: credentials,
    };

    function createCredentials (data) {
      return Object.assign(
        new UserCredentials(),
        { hash: user.password, user_id: data._id },
      ).save();
    }
  }

  static async login (user) {
    const userModel = await UserModel.findOne({ email: user.email });
    const userCredentials = await getUserCredentials(userModel);
    const verification = await verifyPassword(userCredentials);
    return verification;

    function getUserCredentials (record) {
      return UserCredentials.findOne({ user_id: record._id });
    }

    function verifyPassword (record) {
      return new Promise((resolve, reject) => {
        bcrypt.compare(user.password, record.hash, (error, isMatch) => {
          if (!isMatch) {
            reject(new Error(error));
          }
          resolve({
            message: 'Successful login',
          });
        });
      });
    }
  }
}

module.exports = User;
