import React from "react";
import { Navbarr } from "../components/Navbarr";
import { Cardd } from "../components/Card";
import { CourseCard } from "../components/CourseCard";
import ModuleList from "../components/moduleList";
import "./css/Course.css";
export const Course=()=>{
  return(
    <div>
    <div className="color-white background-radial-gradient overflow-hidden">
      <Navbarr />
    <div>
    <div className="over"><div>
      <div className="div-title"><h1 className="title">Инструменты для изучения SQL</h1></div></div>
    
    <Cardd></Cardd>
  </div>
  <div className="over2">
    <CourseCard/>
    <ModuleList></ModuleList>
    </div>
    </div></div>
    </div>
  );
};