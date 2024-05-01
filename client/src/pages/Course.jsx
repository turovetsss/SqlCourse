import React from "react";
import { Navbarr } from "../components/Navbarr";
import { Cardd } from "../components/Card";
import "./css/Course.css";
export const Course=()=>{
  return(
    <div className="color-white background-radial-gradient overflow-hidden">
      <Navbarr />
    <div>
    <div className="over"><div><h1 className="title">Учим понимать SQL лично тебя</h1></div>
    
    <Cardd></Cardd><h2 className="title">Получи необходимые знания по SQL <br/>на нашем бесплатном курсе</h2><h2 className="title">Попрактикуйся в решении задач в удобном тренажёре</h2></div></div></div>
  );
};