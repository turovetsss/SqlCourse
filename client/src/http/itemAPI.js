import {$authHost, $host} from "./index";


//FUNC
export const editFunc = async (func) => {
  //в response помещаем ответ
  const {data} = await $authHost.post('api/func/edit', func)
  return data
}
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

//TRAINER 
export const deleteTrainer = async (trainer) => {
  //в response помещаем ответ
  const {data} = await $authHost.post('api/trainer/delete', trainer)
  return data
}
export const createTrainer = async (trainer) => {
  //в response помещаем ответ
  const {data} = await $authHost.post('api/trainer', trainer)
  return data
}
export const fetchTrainer = async () => {//getTypes
  //в response помещаем ответ
  const {data} = await $host.get('api/trainer')
  return data
}