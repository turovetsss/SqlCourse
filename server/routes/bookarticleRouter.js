const Router=require('express');
const router=new Router();
const BookarticleController=require('../controllers/bookarticleController')
router.post('/',BookarticleController.create)
router.get('/', BookarticleController.getAll)
router.post('/delete',BookarticleController.delete)
router.get('/:id', BookarticleController.getOne)

module.exports=router