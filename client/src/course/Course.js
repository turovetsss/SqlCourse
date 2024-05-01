import {makeAutoObservable} from "mobx";

export default class СourseCourse {
  constructor(){
    this._funcs = []
    this._brands = []
    this._items = []

    //selectedTypes
    //selectedBarnds

    this._setSelectedType = {}//для хранения выбранного типа

    makeAutoObservable(this)
}


setFuncs(funcs){
    this._funcs = funcs
}
get funcs(){
    return this._funcs
}
setSelectedType(type){ //setter
    this._setSelectedType = type
}
get selectedType(){ //getter
    return this._setSelectedType
}


setBrands(brands){
    this._brands = brands
}
//геттер и сеттеры для переменных
get brands(){
    return this._brands
}

get items(){
    return this._items
}
setItems(item){
    this._items = item
}
}