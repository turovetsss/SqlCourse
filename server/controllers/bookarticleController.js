const uuid = require('uuid')
const path = require('path');
const{BookArticle}=require('../models/models')
const{BookArticleSet}=require('../models/models')
const{BookModule}=require('../models/models')

const ApiError = require('../error/ApiError')
class BookarticleController{
  async create(req, res, next) {
    try {
        let {name, title, book_moduleId,setinfo} = req.body
        const bookarticle = await BookArticle.create({name, book_moduleId, title});

        if (setinfo) {
            info = JSON.parse(info)
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            info.forEach(i =>
                BookArticleSet.create({
                    title: i.title,
                    description: i.description,
                    img : i.img,
                    bookarticleId: bookarticle.id
                })
            )
        }

        return res.json(bookarticle)
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
  const bookarticle = await BookArticle.findOne(
      {
          where: {id},
          include: [{model: BookArticleSet, as: 'setinfo'}]
      },
  )
  return res.json(bookarticle)
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
      const bookarticle = await BookArticle.findAll()
      return res.json(bookarticle)
        }

}
module.exports = new BookarticleController()