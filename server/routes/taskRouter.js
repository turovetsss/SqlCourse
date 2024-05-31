const Router = require('express');
const router = new Router();
const taskController = require('../controllers/taskController')

router.post('/', taskController.createTask)
router.get('/', taskController.getTasks)
router.delete('/:id', taskController.deleteTask)
router.put('/', taskController.updateTask)
router.put('/solve', taskController.solveTask)
router.get('/progress/:id', taskController.getProgress)
router.get('/:id', taskController.getTask)

module.exports = router