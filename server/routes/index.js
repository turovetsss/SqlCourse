const Router = require('express')
const router = new Router()
const userRouter=require('./userRouter')
const accountRouter=require('./accountRouter')
const funcRouter=require('./funcRouter')
const trainerRouter=require('./trainerRouter')
const typeRouter=require('./typeRoutes')
const bookmoduleRouter=require('./bookmoduleRouter')
const bookarticleRouter=require('./bookarticleRouter')
const traineraccountRouter=require('./traineraccountRouter')
const studentsRouter=require('./studentRouter')
router.use('/user',userRouter)
router.use('/type',typeRouter)
router.use('/func',funcRouter)
router.use('/bookmodule',bookmoduleRouter)
router.use('/bookarticle',bookarticleRouter)
router.use('/trainer',trainerRouter)
router.use('/traineraccount',traineraccountRouter)
router.use('/account',accountRouter)
router.use('/students', studentsRouter)


module.exports = router 
 