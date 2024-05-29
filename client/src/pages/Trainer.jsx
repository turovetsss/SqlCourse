import React, {useContext,useEffect,useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import "./css/Trainer.css"
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { Navbarr } from "../components/Navbarr";
import {fetchTrainer} from "../http/itemAPI";
import TrainerList from '../components/trainerList';
export const Trainer= observer(() =>{

  const {course} = useContext(Context)
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetchTrainer().then(data => course.setTrainers(data))

}, [course])
const filteredTraners = course.trainers.filter(trainer => {
  return trainer.description.toLowerCase().includes(searchTerm.toLowerCase());
});



  return(
    <><Navbarr /> <div className="course"><div className="content"><div className="task-list"><div className="title-cont"><h2 className='title'>Доступные задания 
    </h2>  <input 
                  type="text" 
                  className='input-group2' 
                  placeholder='Поиск по задачам'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />  </div><ListGroup className="list">
     {filteredTraners.map(trainer =>
                           <ListGroup.Item key={trainer.id}  className="item"><div className="name">#{trainer.id} {trainer.description}</div><div className="high"> Сложность: {trainer.complexity} 
                         </div> </ListGroup.Item>

                    )} 
  </ListGroup>
  <TrainerList></TrainerList></div>
  <div className="filter"><h4>Статус</h4> 
  <div className="check">
    <div className="check-item">
    <input type="checkbox" className="check-in"/>
    <label  className='filter' htmlFor="checkbox">Решенные</label>
    </div>
    <div className="check-item">
    <input type="checkbox"/>
    <label  className='filter' htmlFor="checkbox">Нерешенные</label>
    </div><hr />
   <h4 className='filter'> Cложность </h4>  <div className="check-item">
   <div className="check-item">
    
    <input type="checkbox" className="custom-checkbox" />
    <label htmlFor="checkbox">Легкие</label>
    </div>

    <div className="check-item">
    <input type="checkbox"/>
    <label htmlFor="checkbox">Средние</label>
    </div>
    <div className="check-item">
    <input type="checkbox"/>
    <label htmlFor="checkbox">Сложные</label></div>
    </div></div></div></div></div></>
  );
});