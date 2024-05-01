const{Func}=require('../models/models')
const ApiError = require('../error/ApiError')
class FuncController{
  async create(req,res){
    const {type,name,description} = req.body
    const func = await Func.create({type,name,description})
    return res.json(func)
  }

  async delete(req, res){
    const {id} = req.body//из тела запроса извлекаем имя типа
    const func = await Func.destroy({where: {id: id}})
    return res.json(func)
}
async edit(req, res){
    const {type,name,description} = req.body;//забираем id и name из запроса
    const func = await Func.update({ type:type, name: name, description:description }, { where: { id: id } });
    return res.json(func);
}

  async getAll(req,res){
    const funcs = await Func.findAll()
    return res.json(funcs)
  }
  async getOne(req,res){

  }

}
module.exports = new FuncController()