import React,{useContext,useEffect,useState} from 'react';
import "./css/Trainer.css"
import {Context} from "../index";
import {useParams} from 'react-router-dom';
import {fetchOneModule,fetchBookarticle} from "../http/itemAPI";
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Navbarr } from "../components/Navbarr";
import './css/CoursePage.css'
export const CoursePage=() =>{
  const {course} = useContext(Context)
  const [bookmodule, setBookmodules] = useState('')
  const {id} = useParams()
  useEffect(() => {
    fetchBookarticle().then(data=> course.setBookarticles(data))
    
      fetchOneModule(id).then(data => setBookmodules(data))
  }, [])


  return(
  <>
    <Navbarr />
    <div className="background-radial-gradient overflow-hidden">
    <Container className='position-relative'>
    {/* <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-3" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-4" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div> */}

          </Container>
   <div style={{padding:'10px 50px'}}className="background-radial-gradient overflow-hidden"> 
   <div className="course-book">
   <div className='breadscam-module'><a href={'/course'}>Курс</a> - {bookmodule.name}
   {course.bookarticles.filter(bookarticle => bookarticle.bookmoduleId === bookmodule.id)
        .map(bookarticle => 
          <div className='etd2' key={bookarticle.id}>
            {bookarticle.name}
          </div>
        )}
   </div>
     
   <Card className="card3">
     
     <h3> Модуль "{bookmodule.name}"</h3>
       <div className='desc'>{bookmodule.description}</div>




</Card> 
</div>
   </div>
   </div>
   </>
  );
};