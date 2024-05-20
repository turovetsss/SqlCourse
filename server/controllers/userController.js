const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJwt = (id, email, role,name) => {
  return jwt.sign(
      {id,name, email, role},
      process.env.SECRET_KEY,
      {expiresIn: '24h'}
  );
}

class UserController {
  async registration(req, res, next) {
      const {email, password, role,name} = req.body;
      if (!email || !password) {
        return next(ApiError.badRequest('Некорректный e-mail или пароль'))
      }

      const candidate = await User.findOne({where: {email}});
      if(candidate) {
        return next(ApiError.badRequest('Пользователь с таким e-mail уже зарегистрирован'))
      }

      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({email,name, role, password: hashPassword});
      const token = generateJwt(user.id,user.name, user.email, user.role);
      return res.json({token});
  }


  async login(req, res, next) {
      const {email, password} = req.body;
      const user = await User.findOne({where: {email}});
      if(!user) {
        return next(ApiError.internal('Пользователь с таким именем не найден'))
      }
      let comparePassword = bcrypt.compareSync(password, user.password);
      if(!comparePassword) {
        return next(ApiError.internal('Указан неверный пароль'))
      }
      const token = generateJwt(user.id,user.email, user.role);
      return res.json({token});
  }

  async getOne(req, res) {
    const id = req.body
    const users = await User.findOne(
        {
            where: id,
        },
    )
      return res.json(users)
      }

async getAll(req,res){
  const users = await User.findAll()
  return res.json(users)
}
  async check(req, res) {
      const token = generateJwt(req.user.id, req.user.name, req.user.email, req.user.role)
      return res.json({token})
  }}


module.exports = new UserController();