const { Comment } = require('../models');

const commentController = {
  // Method to create a new comment
  createComment: async (req, res) => {
    try {
      const { content, postId } = req.body;
      const { userId } = req.session;

      // Create the comment in the database
      const comment = await Comment.create({
        content,
        postId,
        userId,
      });

      res.status(201).json({ comment });
    } catch (error) {
      console.error('Error creating comment:', error);
      res.status(500).json({ error: 'Failed to create comment' });
    }
  },

  // Method to delete a comment
  deleteComment: async (req, res) => {
    try {
      const { commentId } = req.params;

      // Delete the comment from the database
      await Comment.destroy({
        where: {
          id: commentId,
        },
      });

      res.sendStatus(204);
    } catch (error) {
      console.error('Error deleting comment:', error);
      res.status(500).json({ error: 'Failed to delete comment' });
    }
  },
};

module.exports = commentController;
