const Router=require('express');
const router=new Router();
const BookController=require('../controllers/bookController')
router.post('/',BookController.create)
router.get('/', BookController.getAll)
// router.post('/delete',FuncController.delete)
router.get('/:id', BookController.getOne)

module.exports=router