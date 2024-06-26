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
export const updateFunc = async (funcId, func) => {
  const { data } = await $host.put(`api/func/${funcId}`, func);
  return data;
};
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
export const fetchOneModule = async (id) => {
  const {data} = await $host.get('api/bookmodule/' + id)
  return data
}
export const fetchOneBookarticle = async (id) => {
  const {data} = await $host.get('api/bookarticle/' + id)
  return data
}
export const createBookarticle = async (bookarticle) => {
  const {data} = await $host.post('api/bookarticle',bookarticle)
  return data
}
//BOOKMODULE
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
  const {data} = await $host.get(`api/user/` + id);
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
export const deleteTask = async (task) => {
  //в response помещаем ответ
  const {data} = await $authHost.post('api/task/delete', task)
  return data
}
export const deleteBookarticle = async (bookarticle) => {
  //в response помещаем ответ
  const {data} = await $authHost.post('api/bookarticle/delete', bookarticle)
  return data
}
export const deleteBookModule = async (module) => {
  //в response помещаем ответ
  const {data} = await $authHost.post('api/bookmodule/delete', module)
  return data
}
export const createTask = async (task) => {
  //в response помещаем ответ
  const {data} = await $authHost.post('api/task', task)
  return data
}
export const fetchTask = async () => {//getTypes
  //в response помещаем ответ
  const {data} = await $host.get('api/task')
  return data
}


//STUDENT

export const createQuery = async (query) => {
  //в response помещаем ответ
  const {data} = await $authHost.post('api/students/sandbox', query)
  return data
}



export const solveTask = async (task) => {
  //в response помещаем ответ
  const {data} = await $authHost.put('api/task/solve', task)
  return data
}

export const fetchProgress = async (id) => {
  //в response помещаем ответ
  const {data} = await $authHost.get('api/task/progress/' + id)
  return data
}


