const UserModel = require('./user.model');

class User {
  static create (req, res) {
    const user = new UserModel();
    Object.assign(user, req.body);
    user.save().then((data) => {
      res.json({
        message: 'User created!',
        body: data,
      });
    }).catch((error) => {
      res.send(error);
    });
  }

  static find (req, res) {
    UserModel.find().then((data) => {
      res.json(data);
    }).catch((error) => {
      res.send(error);
    });
  }
}

module.exports = User;
