import React,{useContext,useEffect,useState} from 'react';
import "./css/Trainer.css"
import {Context} from "../index"; 
import {useParams} from 'react-router-dom';
import {fetchOneModule,fetchBookarticle, fetchOneBookarticle} from "../http/itemAPI";
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Navbarr } from "../components/Navbarr";
import './css/CoursePage.css';
export const CoursePage=() =>{
  const {course} = useContext(Context)
  const [bookmodule, setBookmodules] = useState('')
  const [bookarticle, setBookarticles] = useState({setinfo: []})
  const {id} = useParams()
  useEffect(() => {
    fetchOneBookarticle(id).then(data => setBookarticles(data))
  }, [])
  function arrayBufferToBase64(buffer) {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
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
                    <img src={`${info.imgData}`} alt="hello" className='imgstyle'/>
                  </div>
                )}
</Card> 
</div>
   </>
  );
};