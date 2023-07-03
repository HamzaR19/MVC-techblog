const { User } = require('../models');

const UserController = {
  async create(req, res) {
    try {
      const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
      });

      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.loggedIn = true;

        res.status(201).json(newUser);
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create a user' });
    }
  },
  async login(req, res) {
    try {
      const user = await User.findOne({
        where: { username: req.body.username },
      });

      if (!user) {
        res.status(400).json({ error: 'Incorrect password or username' });
        return;
      }

      const validPassword = user.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ error: 'Incorrect password or username' });
        return;
      }

      req.session.save(() => {
        req.session.user_id = user.id;
        req.session.loggedIn = true;

        res.json({ user, message: 'Logged in!' });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Login Error!' });
    }
  },
  logout(req, res) {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },
};

module.exports = UserController;
