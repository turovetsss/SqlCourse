import {$authHost, $host} from "./index";


//TYPES

export const deleteFunc = async (func) => {
    //в response помещаем ответ
    const {data} = await $authHost.post('api/func/delete', func)
    return data
}
export const createFunc = async (func) => {
    //в response помещаем ответ
    const {data} = await $authHost.post('api/func', func)
    return data
}
export const fetchFunc = async () => {//getTypes
    //в response помещаем ответ
    const {data} = await $host.get('api/func')
    return data
}