const Router = require('express')
const router = new Router()
const userRouter=require('./userRouter')
const accountRouter=require('./accountRouter')
const funcRouter=require('./funcRouter')
const trainerRouter=require('./trainerRouter')
const typeRouter=require('./typeRouter')

router.use('/user',userRouter)
router.use('/type',typeRouter)
router.use('/func',funcRouter)
router.use('/trainer',trainerRouter)
router.use('/account',accountRouter)

module.exports = router 
