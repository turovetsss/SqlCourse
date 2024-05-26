import React from "react";
import Card from 'react-bootstrap/Card';

import './Card.css'
import { COURSECARD_ROUTE, SANDBOX_ROUTE, TRAINER_ROUTE } from "../../utils/consts";
export const Cardd=()=>{
  return(
    <div className="card-container"> <a href={COURSECARD_ROUTE}><Card className='course-card' >
    <Card.Body>
      <div className="title-card">
      <Card.Title>Вводный курс по SQL</Card.Title> <div className="button-arrow">⭢</div>
      </div>
     <Card.Text>
       Пошаговый курс с интерактивными заданиями
      </Card.Text>
       </Card.Body>
  </Card>
  </a> 
  <div className="two-level">
    <a href={SANDBOX_ROUTE}>
  <Card className='sandbox-card' >
    <Card.Body>
    <div className="title-card">
      <Card.Title>Песочница</Card.Title> <div className="button-arrow">⭢</div>
</div>
     <Card.Text>
      Пространство для свободного знакомства со структурой наших баз данных</Card.Text>
       </Card.Body>
  </Card>
  </a>
  <a href={TRAINER_ROUTE}>
  <Card className='guide-card' >
    <Card.Body>
    <div className="title-card">
      <Card.Title>Тренажер с задачами</Card.Title> <div className="button-arrow">⭢</div>
</div>

     <Card.Text>
    <div className="sandbox-area"> SELECT </div>
      </Card.Text>
       </Card.Body>
  </Card></a></div></div>
  )
}