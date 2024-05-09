import React from "react";
import { Navbarr } from "../components/Navbarr";
import { Cardd } from "../components/Card";
import { CourseCard } from "../components/CourseCard";
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
    <CourseCard/>
    </div>
    </div></div>
    </div>
  );
};