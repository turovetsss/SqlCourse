import {makeAutoObservable} from "mobx";

export default class СourseCourse {
  constructor(){
    this._types = []
    this._funcs = []
    this._trainers = []
    this._selectedType = {}
    this._selectedModule = {}
    this._brands = []
    this._items = []
  this._users=[]
  this._bookmodules=[]
  this._bookarticles=[]
    //selectedTypes
    //selectedBarnds

    makeAutoObservable(this)
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

setTrainers(trainers){
  this._trainers = trainers 
}
get trainers(){
  return this._trainers
}





setItems(item){
    this._items = item
}
}