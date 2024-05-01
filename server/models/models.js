const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  email:{type:DataTypes.STRING,unique:true,allowNull:false},
  password:{type:DataTypes.STRING,allowNull:false},
  role:{type:DataTypes.STRING,defaultValue:"USER"}
})
const Account = sequelize.define('account',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})
const Func = sequelize.define('func',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  type:{type:DataTypes.STRING,allowNull:false,defaultValue:"String"},
  name:{type:DataTypes.STRING,allowNull:false,defaultValue:"Func1"},
  description:{type:DataTypes.STRING,allowNull:false,defaultValue:"opis"},
})
const Func_info = sequelize.define('func_info',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  title:{type:DataTypes.STRING},
  description:{type:DataTypes.STRING},
  example:{type:DataTypes.STRING},
}) 
const Trainer = sequelize.define('trainer',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  description:{type:DataTypes.STRING,allowNull:false},
  solution:{type:DataTypes.STRING,allowNull:false},
  complexity:{type:DataTypes.STRING,allowNull:false},
  solved:{type:DataTypes.STRING},
})

User.hasOne(Account)
Account.belongsTo(User);

Func.hasMany(Func_info)
Func_info.belongsTo(Func)

Account.hasMany(Trainer),
Trainer.belongsTo(Account)


module.exports={
  User,Func,Func_info,Trainer,Account,
}
 