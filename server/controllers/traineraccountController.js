const{TrainerAccount}=require('../models/models')
const ApiError = require('../error/ApiError')

class TrainerAccountController{
  async create(req,res){
    const {solved,trainerId,accountId} = req.body
    const traineraccount = await TrainerAccount.create({solved,trainerId,accountId})
    return res.json(traineraccount)
  }
  async getAll(req,res){
    const trainers = await TrainerAccount.findAll()
    return res.json(trainers)
  }
  async getOne(req,res){

  }

  async delete(req, res){
    const {id} = req.body//из тела запроса извлекаем имя типа
    const trainer = await TrainerAccount.destroy({where: {id: id}})
    return res.json(trainer)
}

}
module.exports = new TrainerAccountController()