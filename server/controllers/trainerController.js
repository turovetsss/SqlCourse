const{Trainer}=require('../models/models')
const ApiError = require('../error/ApiError')

class TrainerController{
  async create(req,res){
    const {description,solution} = req.body
    const func = await Trainer.create({description,solution})
    return res.json(func)
  }
  async getAll(req,res){
    const trainers = await Trainer.findAll()
    return res.json(trainers)
  }
  async getOne(req,res){

  }

  async delete(req, res){
    const {id} = req.body//из тела запроса извлекаем имя типа
    const trainer = await Trainer.destroy({where: {id: id}})
    return res.json(trainer)
}

}
module.exports = new TrainerController()