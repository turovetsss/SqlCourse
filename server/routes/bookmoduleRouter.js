const Router=require('express');
const router=new Router();
const BookmoduleController=require('../controllers/bookmoduleController')
router.post('/',BookmoduleController.create)
router.get('/', BookmoduleController.getAll)
// router.post('/delete',FuncController.delete)
router.get('/:id', BookmoduleController.getOne)

module.exports=router