const router = require('express').Router();
const HomeController = require('../controllers/homeController');
const UserController = require('../controllers/userController');
const PostController = require('../controllers/postController');


router.get('/', HomeController.index);


router.post('/users', UserController.create);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);


router.post('/posts', PostController.create);
router.put('/posts/:id', PostController.update);
router.delete('/posts/:id', PostController.delete);

module.exports = router;
