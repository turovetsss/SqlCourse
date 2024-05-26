import React,{useEffect,useContext}  from "react";
import Card from 'react-bootstrap/Card';
import {observer} from "mobx-react-lite";
import {BOOKARTICLE_ROUTE} from "../../utils/consts.js";
import {fetchBookmodule,fetchBookarticle} from "../../http/itemAPI";
import {Context} from "../../index";

import './CourseCard.css'
import { useNavigate } from "react-router-dom";
import ArticleList from "../articleList.jsx";
export const CourseCard= observer(() =>{
  const {course} = useContext(Context)
  const navigate=useNavigate()
  useEffect(() => {
  fetchBookmodule().then(data=> course.setBookmodules(data))
  fetchBookarticle().then(data=> course.setBookarticles(data))
}, [course])
  return(
    <>   <div className="div-title">
    <h2 className="title2">Получи необходимые знания по SQL <br/>в нашей базе знаний</h2>
    </div>
       <Card className="over2-card">
        <div className="razdel">
        {course.bookmodules.map(bookmodule =>
      
        <div className="module" key={bookmodule.id} >
          <p className="module-p">Модуль {bookmodule.id}</p>
        <h4 className="module-h4">{bookmodule.name}</h4>
        <div>{bookmodule.description}</div>
        {course.bookarticles.filter(bookarticle => bookarticle.bookmoduleId === bookmodule.id)
        .map(bookarticle => 
          <div className='etd2' key={bookarticle.id} onClick={() => navigate(BOOKARTICLE_ROUTE +'/' + bookarticle.bookmoduleId)}>
            {bookarticle.name}
          </div>
       
        )}
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