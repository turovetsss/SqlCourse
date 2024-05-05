const{Func}=require('../models/models')
const ApiError = require('../error/ApiError')
class FuncController{
  async create(req,res){
    const {type,name,description,script,example1Info,example1,example2Info,example2} = req.body
    const func = await Func.create({type,name,description,script,example1Info,example1,example2Info,example2})
    return res.json(func)
  }

  async delete(req, res){
    const {id} = req.body//из тела запроса извлекаем имя типа
    const func = await Func.destroy({where: {id: id}})
    return res.json(func)
}
async edit(req, res){
    const {type,name,description,script,example1Info,example1,example2Info,example2} = req.body;//забираем id и name из запроса
    const func = await Func.update({ type:type, name: name, description:description,script:script,example1Info:example1Info,example1:example1,example2Info:example2Info,example2 :example2 }, { where: { id: id } });
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