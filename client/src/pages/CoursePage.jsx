import React,{useContext,useEffect,useState} from 'react';
import "./css/Trainer.css"
import {Context} from "../index";
import {useParams} from 'react-router-dom';
import {fetchOneModule,fetchBookarticle, fetchOneBookarticle} from "../http/itemAPI";
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Navbarr } from "../components/Navbarr";
import './css/CoursePage.css'
export const CoursePage=() =>{
  const {course} = useContext(Context)
  const [bookmodule, setBookmodules] = useState('')
  const [bookarticle, setBookarticles] = useState({setinfo: []})
  const {id} = useParams()
  useEffect(() => {
    fetchOneBookarticle(id).then(data => setBookarticles(data))
  }, [])


  return(
  <>
    <Navbarr />
    <div className="background-radial-gradient overflow-hidden">
    <Container className='position-relative'>

          </Container>
   {/* <div style={{padding:'10px 50px'}}className="background-radial-gradient overflow-hidden"> 
   <div className="course-book">
   <div className='breadscam-module'><a href={'/course'}>Курс</a> - {bookmodule.name}
   {course.bookarticles.filter(bookarticle => bookarticle.bookmoduleId === bookmodule.id)
        .map(bookarticle => 
          <div className='etd2' key={bookarticle.id}>
            {bookarticle.name}
            <br></br>
            {bookarticle.title}
          </div>
        )}
   </div> */}
     
   <Card className="card3">
     <div>Статья {bookarticle.name}</div>
     <div>Статья {bookarticle.description}</div>
     {bookarticle.setinfo.map((info, index) =>
                <div className="div">{info.title}
                    <div  className="primer" key={info.id} >
                        
                         {info.description}
                      
                    </div >
                  
                    <img alt="" src="data:image/gif;base64,R0lGODdhAQABAPAAAP8AAAAAACwAAAAAAQABAAACAkQBADs=" />
                    <img src={`data:image/jpeg;base64,${info.imgData}`} alt="hello" />
                  </div>
                )}
</Card> 
</div>
   </>
  );
};