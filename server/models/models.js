const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  name:{type:DataTypes.STRING,defaultValue:"USER"},
  email:{type:DataTypes.STRING,unique:true,allowNull:false},
  password:{type:DataTypes.STRING,allowNull:false},
  role:{type:DataTypes.STRING,defaultValue:"USER"}
})
const Account = sequelize.define('account',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  trainerSolution:{type:DataTypes.INTEGER,defaultValue: 0}
})
const Func = sequelize.define('func', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  funcType: {type: DataTypes.STRING, unique: true, allowNull: false},
  name: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
  example: {type: DataTypes.STRING, allowNull: false},
})
const Type = sequelize.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
})
const BookModule = sequelize.define('book_module', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false,defaultValue:"example2"},
})
const BookArticle = sequelize.define('bookarticle', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  title: {type: DataTypes.STRING, allowNull: false},
})
const BookArticleSet = sequelize.define('bookcarticle_set', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false,defaultValue:"example2"},
  description: {type: DataTypes.STRING, allowNull: false,defaultValue:"example2"},
  img: {type: DataTypes.STRING, allowNull: false},
})


const Trainer = sequelize.define('trainer',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  description:{type:DataTypes.STRING,allowNull:false},
  solution:{type:DataTypes.STRING,allowNull:false},
  complexity:{type:DataTypes.STRING,allowNull:false},
  solved:{type:DataTypes.STRING},
})
const FuncInfo = sequelize.define('func_info', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false,defaultValue:"example2"},
  description: {type: DataTypes.STRING, allowNull: false,defaultValue:"example2"},
})
User.hasOne(Account)
Account.belongsTo(User);


BookModule.hasMany(BookArticle)
BookArticle.belongsTo(BookModule)

BookArticle.hasMany(BookArticleSet, {as: 'setinfo'});
BookArticleSet.belongsTo(BookArticle)


Type.hasMany(Func)
Func.belongsTo(Type)

Func.hasMany(FuncInfo, {as: 'info'});
FuncInfo.belongsTo(Func)

Account.hasMany(Trainer),
Trainer.belongsTo(Account)

module.exports={
  User,Func,Trainer,Account,Type,FuncInfo,BookModule,BookArticle,BookArticleSet
}
 