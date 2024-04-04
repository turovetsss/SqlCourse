import React from "react";
import Card from 'react-bootstrap/Card';

import './Card.css'
export const Cardd=()=>{
  return(
    <>  <Card className='course-card' >
    <Card.Body>
      <Card.Title>Вводный курс по SQL</Card.Title>

     <Card.Text>
       Пошаговый курс с интерактивными заданиями
      </Card.Text>
       </Card.Body>
  </Card></>
  )
}