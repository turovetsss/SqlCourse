import React from "react";
import { Navbarr } from "../components/Navbarr";
import { Cardd } from "../components/Card";
import { CourseCard } from "../components/CourseCard";

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