const Router=require('express');
const router=new Router();
const trainerController=require('../controllers/trainerController')

router.post('/',trainerController.create)
router.get('/',trainerController.getAll)
router.post('/delete',trainerController.delete)

router.get('/:id',)

module.exports=router