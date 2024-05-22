const{Func}=require('../models/models')
const{FuncInfo}=require('../models/models')

const ApiError = require('../error/ApiError')
class FuncController{
  async create(req, res, next) {
    try {
        let {funcType, name, description,typeId, example, info} = req.body
        const func = await Func.create({funcType, name,typeId, description, example});

        if (info) {
            info = JSON.parse(info)
            info.forEach(i =>
                FuncInfo.create({
                    title: i.title,
                    description: i.description,
                    funcId: func.id
                })
            )
        }

        return res.json(func)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }

}
async edit(req, res){
    const {type,name,description,script,example1Info,example1,example2Info,example2} = req.body;//забираем id и name из запроса
    const func = await Func.update({ type:type, name: name, description:description,script:script,example1Info:example1Info,example1:example1,example2Info:example2Info,example2 :example2 }, { where: { id: id } });
    return res.json(func);
}

async getOne(req, res) {
  const {id} = req.params
  const func = await Func.findOne(
      {
          where: {id},
          include: [{model: FuncInfo, as: 'info'}]
      },
  )
  return res.json(func)
}
// async getAll(req, res) {
//    let {typedId} = req.query
//    let funcs;
//    if (!typedId) {
//            funcs = await Func.findAndCountAll()
//  }
//    if (typedId) {
//        funcs= await Func.findAndCountAll({where:{typedId}})
//    }
//    return res.json(funcs)
//  }
 async getAll(req,res){
      const funcs = await Func.findAll()
      return res.json(funcs)
        }

}
module.exports = new FuncController()