import {makeAutoObservable} from "mobx";

export default class СourseCourse {
  constructor(){
    this._types = []
    this._funcs = []
    this._tasks = []
    this._selectedType = {}
    this._selectedModule = {}
    this._brands = []
    this._items = []
  this._users=[]
  this._bookmodules=[]
  this._bookarticles=[]
  this._taskUsers=[]
    //selectedTypes
    //selectedBarnds

    makeAutoObservable(this)
}
setTaskUsers(taskUsers){
  this._taskUsers = taskUsers
}
get taskUsers() {
  return this._taskUsers
}
setTypes(types) {
  this._types = types
}
get types() {
  return this._types
}
setBookarticles(bookarticles){
  this._bookarticles=bookarticles
}
get bookarticles(){
   return this._bookarticles
}
setBookmodules(bookmodules){
  this._bookmodules = bookmodules
}
get bookmodules(){
  return this._bookmodules
}
setSelectedType(type) {
  this._selectedType = type
}
get selectedType() {
  return this._selectedType
}
setSelectedModule(module) {
  this._selectedModule = module
}
get selectedModule() {
  return this._selectedModule
}


setFuncs(funcs){
    this._funcs = funcs
}
get funcs(){
    return this._funcs
}
setUsers(users){
  this._users = users
}
get users(){
  return this._users
}

setTasks(tasks){
  this._tasks = tasks
}
get tasks(){
  return this._tasks
}





setItems(item){
    this._items = item
}
}