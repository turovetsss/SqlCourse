import React,{useEffect,useContext}  from "react";
import Card from 'react-bootstrap/Card';
import {observer} from "mobx-react-lite";
import {fetchBookmodule} from "../../http/itemAPI";
import {Context} from "../../index";

import './CourseCard.css'
export const CourseCard= observer(() =>{
  const {course} = useContext(Context)
  useEffect(() => {
  fetchBookmodule().then(data=> course.setBookmodules(data))
}, [course])
  return(
    <>   <div className="div-title">
    <h2 className="title2">Получи необходимые знания по SQL <br/>в нашей базе знаний</h2>
    </div>
       <Card className="over2-card">
        <div className="razdel">
        {course.bookmodules.map(bookmodules =>
      
        <div className="module" key={bookmodules.id} >
          <p className="module-p">Модуль {bookmodules.id}</p>
        <h4 className="module-h4">{bookmodules.name}</h4>
        <div>{bookmodules.description}</div>
        </div>
          )}
        {/* <div className="structure">
         <div className="structure-btn">—  Введение</div>
          <div className="structure-btn">—  Структура курса</div>
          <div className="structure-btn">—   Сообщество</div>
        </div> */}
        </div>
      </Card></>
  )
});