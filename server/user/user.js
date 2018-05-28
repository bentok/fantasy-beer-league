const UserModel = require('./user.model');
const UserCredentials = require('./userCredentials.model');
const bcrypt = require('bcrypt-nodejs');

class User {
  static create (user) {
    const userModel = new UserModel();
    const userCredentials = new UserCredentials();

    Object.assign(userModel, user);
    return userModel.save()
      .catch(error => new Error(error))
      .then((data) => {
        Object.assign(userCredentials, { hash: user.password, user_id: data._id });
        return userCredentials.save()
          .then(result => result)
          .catch(error => new Error(error));
      })
      .then(data => ({
        message: 'User created!',
        body: data,
      }));
  }

  static login (user) {
    return UserModel.findOne({ email: user.email })
      .then(getUserCredentials)
      .then(verifyPassword);

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
