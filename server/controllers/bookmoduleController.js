const{BookModule}=require('../models/models')
const ApiError = require('../error/ApiError')

class BookmoduleController{
  async create(req,res){
    const {name,description} = req.body
    const bookmodule = await BookModule.create({name,description})
    return res.json(bookmodule)
  }
  async getAll(req,res){
    const bookmodule = await BookModule.findAll()
    return res.json(bookmodule)
  }
  async getOne(req, res) {
    const {id} = req.params
    const bookmodule = await BookModule.findOne(
        {
            where: {id}
          },
    )
    return res.json(bookmodule)
  }
  async delete(req, res){
    const {id} = req.body//из тела запроса извлекаем имя типа
    const bookmodule = await BookModule.destroy({where: {id: id}})
    return res.json(bookmodule)
}

}
module.exports = new BookmoduleController()