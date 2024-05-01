import React, {useContext,useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import "./css/Trainer.css"
import {Context} from "../index";
import { Card } from 'react-bootstrap';
import {observer} from "mobx-react-lite";
import { Navbarr } from "../components/Navbarr";
import './css/CoursePage.css'
import {fetchTrainer} from "../http/itemAPI";
export const CoursePage= observer(() =>{


  return(
   <div className='course-page'>
    <Card>Hi</Card>
   </div>
  );
});