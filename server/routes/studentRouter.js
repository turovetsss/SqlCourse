const Router = require('express');
const router = new Router();
const StudentsController = require('../controllers/studentsController')
router.post('/', StudentsController.create)
router.post('/sandbox', StudentsController.sandbox)
router.get('/', StudentsController.getAll)
router.put('/', StudentsController.edit)
router.get('/:id', StudentsController.getOne)
router.delete('/:id', StudentsController.delete)

module.exports = router