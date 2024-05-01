const Router=require('express');
const router=new Router();
const FuncController=require('../controllers/funcController')
router.post('/',FuncController.create)
router.get('/',FuncController.getAll)
router.post('/delete',FuncController.delete)
router.post('/edit', FuncController.edit)
module.exports=router