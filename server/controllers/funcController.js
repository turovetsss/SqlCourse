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
async update(req, res, next) {
  try {
    const { id } = req.params; 
    let { funcType, name, description, typeId, example, info } = req.body;

    const updatedFunc = await Func.update({ funcType, name, typeId, description, example }, {
      where: { id: id } 
    });

    if (info) {
      info = JSON.parse(info);

      await FuncInfo.destroy({ where: { funcId: id } }); 

      // Добавляем новую информацию
      await Promise.all(info.map(i => 
        FuncInfo.create({
          title: i.title,
          description: i.description,
          funcId: id 
        })
      ));
    }

    return res.json(updatedFunc);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
}
async delete(req, res){
  const {id} = req.body
  const func = await Func.destroy(
    {
      where: {id:id},
     },
 )
  return res.json(func)
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
 async getAll(req,res){
      const funcs = await Func.findAll()
      return res.json(funcs)
        }

}
module.exports = new FuncController()