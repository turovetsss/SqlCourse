import React from "react";
import Card from 'react-bootstrap/Card';

import './Card.css'
export const Cardd=()=>{
  return(
    <>  <Card className='course-card' >
    <Card.Body>
      <div className="title-card">
      <Card.Title>Вводный курс по SQL</Card.Title> <div className="button-arrow">⭢</div>
      </div>
     <Card.Text>
       Пошаговый курс с интерактивными заданиями
      </Card.Text>
       </Card.Body>
  </Card>
  <div className="two-level">
  <Card className='sandbox-card' >
    <Card.Body>
    <div className="title-card">
      <Card.Title>Песочница</Card.Title> <div className="button-arrow">⭢</div>
</div>
     <Card.Text>
      Пространство для свободного знакомства со структурой наших баз данных</Card.Text>
       </Card.Body>
  </Card>
  <Card className='guide-card' >
    <Card.Body>
    <div className="title-card">
      <Card.Title>Тренажер с задачами</Card.Title> <div className="button-arrow">⭢</div>
</div>

     <Card.Text>
    <div className="sandbox-area"> > SELECT </div>
      </Card.Text>
       </Card.Body>
  </Card></div></>
  )
}