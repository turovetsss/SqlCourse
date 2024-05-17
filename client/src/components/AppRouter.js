import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {COURSE_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
export const AppRouter  = observer(() =>{
    const {user} = useContext(Context)
    console.log(user) //авториз юзер или нет, получаем переменную из UserStore
      return (
        <Routes>
           {user.isAuth && authRoutes.map(({ path, Component }) =>
              <Route key={path} path={path} element={<Component/>} exact />
           )}
           {publicRoutes.map(({ path, Component }) =>
              <Route key={path} path={path} element={<Component/>} exact />
           )}
           <Route path="*" element={<Navigate to={COURSE_ROUTE} />}/>
        </Routes>
     );
});

export default AppRouter;