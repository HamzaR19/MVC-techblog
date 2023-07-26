const router = require('express').Router();
const HomeController = require('../controllers/homeController');
const UserController = require('../controllers/userController');
const PostController = require('../controllers/postController');

router.get('/dashboard', HomeController.dashboard);
router.get('/', HomeController.index);
router.get('/login', HomeController.login);
router.get('/signup', HomeController.signup);
router.post('/signup', UserController.create)

router.post('/users', UserController.create);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);


router.post('/posts', PostController.create);
router.put('/posts/:id', PostController.update);
router.delete('/posts/:id', PostController.delete);

module.exports = router;
