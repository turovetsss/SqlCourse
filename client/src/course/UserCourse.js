import {makeAutoObservable} from 'mobx'

//глобальное хранилище и можно в любом месте проверить авторизован ли юзер
//выносим логику переменной isAuth в отдельный класс так как много где будем использовать
//работа с mobx
export default class UserStore{
    constructor(){
        this._isAuth = false// _ - условно закрытая переменная
        this._user = {}
        makeAutoObservable(this)//теперь mobx следит за изменением этих переменных
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

    //геттер и сеттеры для переменных

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }
}