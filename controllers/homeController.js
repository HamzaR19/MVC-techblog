const { Post, User } = require('../models');

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
      res.status(500).json({ error: 'Failed to retrieve posts' });
    }
  },
};

module.exports = HomeController;
