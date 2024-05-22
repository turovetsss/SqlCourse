const{Book}=require('../models/models')
const ApiError = require('../error/ApiError')

class BookController{
  async create(req,res){
    const {description,solution,complexity,solved} = req.body
    const func = await Trainer.create({description,solution,complexity,solved})
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
module.exports = new BookController()