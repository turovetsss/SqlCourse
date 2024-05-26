import React from "react";
import { Navbarr } from "../components/Navbarr";
import { Cardd } from "../components/Card";
import { CourseCard } from "../components/CourseCard";
import "./css/Course.css";
import ArticleList from "../components/articleList";
export const Course=()=>{
  return(
    <div>
    <div className="course">
      <Navbarr />
      
    <div>
    <div className="over"><div>
      <div className="div-title"><h1 className="title">Инструменты для изучения SQL</h1></div></div>
    
    <Cardd></Cardd>
  </div>
  <div className="over2">
    <CourseCard/>
    <ArticleList></ArticleList>
    </div>
    </div></div>
    </div>
  );
};