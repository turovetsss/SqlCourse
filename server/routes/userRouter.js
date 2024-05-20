const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController.js')
const authMiddleware = require('../middleware/authMiddleware.js')

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check);
router.get('/:id', UserController.getOne)
router.get('/', UserController.getAll)
module.exports = router;