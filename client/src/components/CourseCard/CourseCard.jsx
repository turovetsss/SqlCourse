import React from "react";
import Card from 'react-bootstrap/Card';

import './CourseCard.css'
export const CourseCard=()=>{
  return(
    <>   <div className="div-title">
    <h2 className="title2">Получи необходимые знания по SQL <br/>на нашем курсе</h2>
    </div>
       <Card className="over2-card">
        <div className="razdel">
        <div className="module">
          <p className="module-p">Модуль 0</p>
        <h4 className="module-h4">Введение</h4>
        <div>В этом коротком модуле мы познакомимся с тем как работает платформа данного курса и узнаем как получить максимум от него. А также получим информацию о нашем сообществе.</div>
        </div>
        <div className="structure">
         <div className="structure-btn">—  Введение</div>
          <div className="structure-btn">—  Структура курса</div>
          <div className="structure-btn">—   Сообщество</div>
        </div>
        </div>
      </Card></>
  )
}