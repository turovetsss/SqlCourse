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
  funcType: {type: DataTypes.STRING, allowNull: false},
  name: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
  example: {type: DataTypes.STRING, allowNull: false},
})
const Type = sequelize.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
})
const BookModule = sequelize.define('bookmodule', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false,defaultValue:"example2"},
})
const BookArticle = sequelize.define('bookarticle', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  title: {type: DataTypes.STRING, allowNull: false},
})
const BookArticleSet = sequelize.define('bookcarticleset', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false,defaultValue:"example2"},
  description: {type: DataTypes.TEXT('long'), allowNull: false,defaultValue:"example2"},
  imgName: {type: DataTypes.STRING, allowNull: true},
  imgData: {type: DataTypes.TEXT('long'), allowNull: true},
})

const FuncInfo = sequelize.define('func_info', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false,defaultValue:"example2"},
  description: {type: DataTypes.STRING, allowNull: false,defaultValue:"example2"},
})

const Task = sequelize.define('task', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  description: {type: DataTypes.STRING, allowNull: false},
  condition: {type: DataTypes.TEXT('tiny'), allowNull: false},
  solution: {type: DataTypes.TEXT('medium'), allowNull: false}
});

const TaskUser = sequelize.define('taskUser', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  solved: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
  taskId: {type: DataTypes.INTEGER, allowNull: false}
});

const SolvedUserTaskList = sequelize.define('solvedUserTaskList', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  solution: {type: DataTypes.STRING, allowNull: false, defaultValue: "example2"}
});

const Student = sequelize.define('student', {
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  surname: {
      type: DataTypes.STRING,
      allowNull: false
  },
  group: {
      type: DataTypes.STRING,
      allowNull: false
  },
  mark: {
      type: DataTypes.STRING,
      allowNull: false
  },
  birthday: {
      type: DataTypes.DATE,
      allowNull: false
  }
});

User.hasMany(TaskUser)
TaskUser.belongsTo(User);

Task.hasMany(TaskUser);
TaskUser.belongsTo(Task);

TaskUser.hasMany(SolvedUserTaskList, {as: 'userSolvedList'});
SolvedUserTaskList.belongsTo(TaskUser);

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


module.exports={
  User,Func,Account,Type,Task,
  TaskUser,
  SolvedUserTaskList,FuncInfo,BookModule,BookArticle,BookArticleSet,Student, sequelize
}
 