import axios from "axios";


const $host = axios.create({//обычные запросы
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({//хапросы с header authorization
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {//передаем токен в каждый запрос
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`//получаем токен из локального хранилища и при регистрации предаем его туда
    return config
}

$authHost.interceptors.request.use(authInterceptor)//отрабатывает перед каждым запросом и подставляет токен

export {
    $host,
    $authHost
}