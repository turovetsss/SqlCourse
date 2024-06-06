import React, {useContext,useEffect,useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import "./css/Trainer.css"
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { Navbarr } from "../components/Navbarr";
import {fetchTask,fetchProgress} from "../http/itemAPI";
import TrainerList from '../components/trainerList';
export const Trainer= observer(() =>{

  const {course,user} = useContext(Context)
  const [progress, setProgress] = useState(0); // State for progress

  useEffect(() => {
    fetchTask().then(data => course.setTasks(data))

}, [course])

useEffect(() => {
  try{
  const fetchUserProgress = async () => {
        const progressData = await fetchProgress(user.user.id);
        setProgress(progressData.countOfSolvedTasks);
  };
  fetchUserProgress(); 
}
catch{
  console.log('hui')
}
}, [user]);


  return(
    <><Navbarr /> <div className="course"><div className="content"><div className="task-list"><div className="title-cont"> <h2 className="title">
    Доступные задания{" "}
    {user.user && ( 
      <div>
        Прогресс: {progress} / {course.tasks.length}
      </div>
    )}
  </h2> </div><ListGroup className="list">
  </ListGroup>
  <TrainerList></TrainerList></div>
</div></div></>
  );
});