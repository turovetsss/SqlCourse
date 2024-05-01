const{Func_info}=require('../models/models')
const ApiError = require('../error/ApiError')

class FuncInfoController{
  async create(req,res){
    const {title,description,example} = req.body
    const func = await Func_info.create({title,description,example})
    return res.json(func)
  }
  async getAll(req,res){
    const funcs = await Func_info.findAll()
    return res.json(funcs)
  }
  async getOne(req,res){

  }

}


module.exports = new FuncInfoController()