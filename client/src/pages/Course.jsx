import React from "react";
import { Navbarr } from "../components/Navbarr";
import { Cardd } from "../components/Card";
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import "./css/Course.css";
import { COURSEPAGE_ROUTE } from "../utils/consts";
export const Course=()=>{
  return(
    <div>
    <div className="color-white background-radial-gradient overflow-hidden">
      <Navbarr />
    <div>
    <div className="over"><div>
      <div className="div-title"><h1 className="title">Учим понимать SQL лично тебя</h1></div></div>
    
    <Cardd></Cardd>
  </div>
  <div className="over2">
    <div className="div-title">
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
       <a href={COURSEPAGE_ROUTE}><div className="structure-btn">—  Введение</div></a>
        <div className="structure-btn">—  Структура курса</div>
        <div className="structure-btn">—   Сообщество</div>
      </div>
      </div>
    </Card>
    </div>
    </div></div>
    </div>
  );
};