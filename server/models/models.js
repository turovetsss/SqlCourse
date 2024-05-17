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
const Func = sequelize.define('func',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  type:{type:DataTypes.STRING,allowNull:false,defaultValue:"String"},
  name:{type:DataTypes.STRING,allowNull:false,defaultValue:"Func1"},
  description:{type:DataTypes.STRING,allowNull:false,defaultValue:"opis"},
 script:{type:DataTypes.STRING,allowNull:false,defaultValue:"script"},
 example1Info:{type:DataTypes.STRING,allowNull:false,defaultValue:"exampleinfo1"},
 example1:{type:DataTypes.STRING,allowNull:false,defaultValue:"example1"},
 example2Info:{type:DataTypes.STRING,allowNull:false,defaultValue:"exampleinfo2"},
 example2:{type:DataTypes.STRING,allowNull:false,defaultValue:"example2"},
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



Account.hasMany(Trainer),
Trainer.belongsTo(Account)


module.exports={
  User,Func,Trainer,Account,
}
 