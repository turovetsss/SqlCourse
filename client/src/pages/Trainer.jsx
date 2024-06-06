import React, {useContext,useEffect,useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import "./css/Trainer.css"
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { Navbarr } from "../components/Navbarr";
import {fetchTask} from "../http/itemAPI";
import TrainerList from '../components/trainerList';
export const Trainer= observer(() =>{

  const {course} = useContext(Context)
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetchTask().then(data => course.setTasks(data))

}, [course])
// const filteredTraners = course.tasks.filter(task => {
//   return task.description.toLowerCase().includes(searchTerm.toLowerCase());
// });



  return(
    <><Navbarr /> <div className="course"><div className="content"><div className="task-list"><div className="title-cont"><h2 className='title'>Доступные задания 
    </h2>  </div><ListGroup className="list">
     {/* {filteredTraners.map(trainer =>
                           <ListGroup.Item key={trainer.id}  className="item"><div className="name">#{trainer.id} {trainer.description}</div><div className="high"> Сложность: {trainer.complexity} 
                         </div> </ListGroup.Item>

                    )}  */}
  </ListGroup>
  <TrainerList></TrainerList></div>
</div></div></>
  );
});