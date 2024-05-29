const{TrainerAccount}=require('../models/models')
const {TraineeList}=require('../models/models')
const ApiError = require('../error/ApiError')

class TrainerAccountController{
  async create(req,res){
    const {solved,trainerId,traineelist} = req.body
    const traineraccount = await TrainerAccount.create({solved,trainerId});
    if (traineelist) {
      let traineelist = JSON.parse(traineelist)
      traineelist.forEach(i =>
        TraineeList.create({
              solution: i.solution,
              traineraccountId: traineraccount.id
          })
      )
  }
   return res.json(traineraccount)
  }
  async getAll(req,res){
    const trainers = await TrainerAccount.findAll()
    return res.json(trainers)
  }
  async getOne(req,res){
  }

  async delete(req, res){
    const {id} = req.body
    const trainer = await TrainerAccount.destroy({where: {id: id}})
    return res.json(trainer)
}

}
module.exports = new TrainerAccountController()