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
  type: {type: DataTypes.STRING, unique: true, allowNull: false},
  name: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
  script: {type: DataTypes.STRING, allowNull: false},
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

Func.hasMany(FuncInfo, {as: 'info'});
FuncInfo.belongsTo(Func)


Account.hasMany(Trainer),
Trainer.belongsTo(Account)


module.exports={
  User,Func,Trainer,Account,FuncInfo,
}
 