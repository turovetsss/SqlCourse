const Router=require('express');
const router=new Router();
const FuncinfoController=require('../controllers/funcinfoController')
router.post('/',FuncinfoController.create)
router.get('/',FuncinfoController.getAll)
router.get('/:id',)
module.exports=router