const Router = require('express')
const router = new Router()
const userRouter=require('./userRouter')
const accountRouter=require('./accountRouter')
const funcRouter=require('./funcRouter')
const trainerRouter=require('./trainerRouter')

router.use('/user',userRouter)
router.use('/func',funcRouter)
router.use('/trainer',trainerRouter)
router.use('/account',accountRouter)

module.exports = router 
