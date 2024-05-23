import {$authHost, $host} from "./index";

//TYPE
export const createType = async (type) => {
  const {data} = await $host.post('api/type', type)
  return data
}

export const fetchTypes = async () => {
  const {data} = await $host.get('api/type')
  return data
}

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
  const {data} = await $host.post('api/func',func)
  return data
}

//BOOKMODULE
export const createBookmodule = async (book_module) => {
  const {data} = await $host.post('api/bookmodule',book_module)
  return data
}
export const fetchBookmodule = async () => {//getTypes
  //в response помещаем ответ
  const {data} = await $host.get('api/bookmodule')
  return data
}
//BOOKMODULE
export const createBookarticle = async (bookarticle) => {
  const {data} = await $host.post('api/bookarticle',bookarticle)
  return data
}
export const fetchBookarticle = async () => {//getTypes
  //в response помещаем ответ
  const {data} = await $host.get('api/bookarticle')
  return data
}
// export const fetchFuncs = async () => {//getTypes
//   //в response помещаем ответ
//   const {data} = await $host.get('api/func')
//   return data
// }

 export const fetchFuncs = async (typeId) => {//getTypes
   const {data} = await $host.get('api/func', {params: {
     typeId
   }})
   return data
 }
 
//user
export const fetchOneUser = async (id) => {
  const {data} = await $host.get(`api/user/${id}`);
  return data;
}
export const fetchUser = async () => {//getTypes
  //в response помещаем ответ
  const {data} = await $host.get('api/user')
  return data
}
export const fetchOneFunc = async (id) => {
  const {data} = await $host.get('api/func/' + id)
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