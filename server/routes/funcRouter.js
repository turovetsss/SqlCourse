const Router=require('express');
const router=new Router();
const FuncController=require('../controllers/funcController')
router.post('/',FuncController.create)
router.get('/', FuncController.getAll)
router.post('/delete',FuncController.delete)
router.get('/:id', FuncController.getOne)

module.exports=router