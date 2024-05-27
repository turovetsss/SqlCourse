const uuid = require('uuid')
const {BookArticle} = require('../models/models')
const {BookArticleSet} = require('../models/models')
const {BookModule} = require('../models/models')

const fs = require('fs');

const ApiError = require('../error/ApiError')

class BookarticleController {
  async create(req, res, next) {
    try {
        let { name, title, bookmoduleId, setinfo } = req.body;

        const bookArticle = await BookArticle.create({ name, bookmoduleId, title });

        if (setinfo) {
          setinfo = JSON.parse(setinfo);
          const bookArticleSets = [];
        
      
for (let i = 0; i < setinfo.length; i++) {
    const imgName = uuid.v4() + ".jpg";
    const imgData = setinfo[i]; // Assuming setinfo contains the image data as Blob
    
    const imgDataAsBase64 = imgData.toString('base64');
    
        const bookArticleSet = await BookArticleSet.create({
               title: i.title,
              description: i.description,
               imgName,
                imgData: imgDataAsBase64,
        bookarticleId: bookArticle.id
       });
      bookArticleSets.push(bookArticleSet);
            }

       const createdSets = await Promise.all(bookArticleSets);

        return res.json({ bookArticle, bookArticleSets: createdSets });
        }


        return res.json(bookArticle);
    } catch (e) {
        next(ApiError.badRequest(e.message));
    }
}
    async edit(req, res) {
        const {type, name, description, script, example1Info, example1, example2Info, example2} = req.body;//забираем id и name из запроса
        const func = await Func.update({
            type: type,
            name: name,
            description: description,
            script: script,
            example1Info: example1Info,
            example1: example1,
            example2Info: example2Info,
            example2: example2
        }, {where: {id: id}});
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
    async getAll(req, res) {
        const bookarticle = await BookArticle.findAll()
        return res.json(bookarticle)
    }

}

module.exports = new BookarticleController()