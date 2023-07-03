const { Post } = require('../models');

const PostController = {
  async create(req, res) {
    try {
      const newPost = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
      });

      res.status(201).json(newPost);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create post' });
    }
  },
  async update(req, res) {
    try {
      const [updatedRows] = await Post.update(
        {
          title: req.body.title,
          content: req.body.content,
        },
        {
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        }
      );

      if (updatedRows === 0) {
        res.status(404).json({ error: 'No post found' });
        return;
      }

      res.status(200).json({ message: 'Post updated!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Post did not update' });
    }
  },
  async delete(req, res) {
    try {
      const deletedRows = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });

      if (deletedRows === 0) {
        res.status(404).json({ error: 'No post found' });
        return;
      }

      res.status(200).json({ message: 'Post deleted!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Post not deleted' });
    }
  },
};

module.exports = PostController;
