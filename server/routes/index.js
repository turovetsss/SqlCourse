const Router = require('express')
const router = new Router()
const userRouter=require('./userRouter')
const accountRouter=require('./accountRouter')
const funcRouter=require('./funcRouter')
const trainerRouter=require('./trainerRouter')
const funcInfoRouter=require('./funcinfoRouter')

router.use('/user',userRouter)
router.use('/func',funcRouter)
router.use('/func_info',funcInfoRouter)
router.use('/trainer',trainerRouter)
router.use('/account',accountRouter)

module.exports = router 
