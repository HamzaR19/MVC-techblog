const { Post, User, Comment } = require('../models');
// const { login } = require('./userController');

const HomeController = {
  async index(req, res) {
    try {
      const posts = await Post.findAll({
        include: {
          model: User,
          attributes: ['username'],
        },
      });

      const formattedPosts = posts.map((post) => post.get({ plain: true }));

      res.render('homepage', {
        posts: formattedPosts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to get posts' });
    }
   

  },
  async login(req, res) {
    
      res.render('login');
   
  },
  async signup(req, res) {
    
      res.render('signup');
    
  },
  async dashboard(req, res) {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Post }],
      });

      const user = userData.get({ plain: true });

      res.render('dashboard', {
        ...user,
        loggedIn: true,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to get user' });
    }
  },
  async Logout(req, res) {
    try {
      if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end()
          res.render('login');
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Logout Error!' });
    }
  }
  

};



module.exports = HomeController;
