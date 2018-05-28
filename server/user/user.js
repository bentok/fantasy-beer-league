const UserModel = require('./user.model');
const UserCredentials = require('./userCredentials.model');

class User {
  static create (userBody) {
    const user = new UserModel();
    const userCredentials = new UserCredentials();

    Object.assign(user, userBody);
    return user.save()
      .catch(error => new Error(error))
      .then((data) => {
        Object.assign(userCredentials, { hash: userBody.password, user_id: data._id });
        return userCredentials.save()
          .then(result => result)
          .catch(error => new Error(error));
      })
      .then(data => ({
        message: 'User created!',
        body: data,
      }));
  }

  static find () {
    return UserModel.find().then(data => data)
      .catch(error => new Error(error));
  }
}

module.exports = User;
