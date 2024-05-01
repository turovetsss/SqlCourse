import {$authHost, $host} from "./index";
import { jwtDecode } from "jwt-decode";
import {json} from "react-router-dom";


//реализация авторизации, регистрации, проверка токена на валидность - check()
export const registration = async (email, password) => {
    //в response помещаем ответ
    const {data} = await $host.post('api/user/registration', {email, password, role: 'USER'})
    localStorage.setItem('token',data.token)//сохраняем токен на стороне юзера
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    //в response помещаем ответ
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token',data.token)//сохраняем токен на стороне юзера
    return jwtDecode(data.token)
}

export const check = async () => {//функция вызывается при обновлении странцы и проверяет есть ли у юзера валидный токен
     //в response помещаем ответ
     const {data} = await $authHost.get('api/user/auth')//AuthHost - к запросу прикрепляем токен
     localStorage.setItem('token',data.token)//сохраняем токен на стороне юзера
     return jwtDecode(data.token)
 
}