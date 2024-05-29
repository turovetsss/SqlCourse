const Router=require('express');
const router=new Router();
const TrainerAccountController=require('../controllers/traineraccountController')
router.post('/',TrainerAccountController.create)
router.get('/', TrainerAccountController.getAll)
// router.post('/delete',FuncController.delete)
router.get('/:id', TrainerAccountController.getOne)

module.exports=router