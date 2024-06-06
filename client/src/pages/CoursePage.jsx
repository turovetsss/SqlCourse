import React,{useContext,useEffect,useState} from 'react';
import "./css/Trainer.css"
import {Context} from "../index"; 
import {useParams} from 'react-router-dom';
import {fetchOneModule,fetchBookarticle, fetchOneBookarticle} from "../http/itemAPI";
import { Container, ListGroupItem } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Navbarr } from "../components/Navbarr";
import './css/CoursePage.css';
export const CoursePage=() =>{
  const { course } = useContext(Context);
  const [bookmodule, setBookmodules] = useState('');
  const [bookarticle, setBookarticles] = useState({ setinfo: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneBookarticle(id).then(data => {
      setBookarticles(data);
      if (!course.bookmodules.find(module => module.id === data.bookmoduleId)) {
        fetchOneModule(data.bookmoduleId).then(moduleData => course.setBookmodules([
          ...course.bookmodules,
          moduleData,
        ]));
      }
    });
  }, [id, course]);

  const getModuleName = () => {
    const module = course.bookmodules.find(module => module.id === bookarticle.bookmoduleId);
    return module ? module.name : '';
  };

  return (
    <>
      <Navbarr />
      <div className="background-radial-gradient overflow-hidden">
          <div className="card3"> 
          <div className="container">
          <div className="course-breadcrumbs">
            <a href="/course" className="breadcrumb-link">Курс</a> 
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-link">{getModuleName()}</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-link">{bookarticle.name}</span>
          </div>
            {bookarticle.setinfo.map((info, index) => (
              <div className='center-info' key={index}>
                <h3>{bookarticle.name}</h3>
                <h3>{bookarticle.description}</h3>
                <h3>{info.title}</h3>
                <div className="primer" key={info.id}>
                  {info.description}
                </div>
                <img src={`${info.imgData}`} alt="hello" className='imgstyle'/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};