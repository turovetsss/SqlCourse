import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import './App.css'


const App = observer(() => {
    const {user} = useContext(Context)//с помощью хука получем состояние
    const [loading, setLoading] = useState(true)//это состояние отвечает за то, идет загрузка или нет. При перезагрузке проверяем авторизован ли пользователь

    useEffect(() => {//этот запрос отправляем олин раз при первом открытии приложения
        check().then(data =>{//если массив пустой - функция отработает один раз при первом запуске
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false));
    }, []);



    return (
        <BrowserRouter> {/* - обрабатывает url запросы и ищет совпадение, если оно есть - вызывает определнный роутер*/}
             {/* - будет отображатся на каждой странице*/}
            <div className={"main"}>
                {/*<TypeBar />*/}
                {/*BrandBar-*/}
                <AppRouter /> {/* - вызывается роутер из AppRouter.js который возвращает массив всех доступных URLов */}
            </div>
        </BrowserRouter>
    );
});

export default App;

