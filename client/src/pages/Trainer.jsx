import React, {useContext,useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import "./css/Trainer.css"
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { Navbarr } from "../components/Navbarr";
import {fetchFunc} from "../http/itemAPI";
export const Trainer= observer(() =>{
  const {course} = useContext(Context)
  useEffect(() => {
    fetchFunc().then(data => course.setFuncs(data))

}, [])

  return(
    <><Navbarr /> <div className="background-radial-gradient overflow-hidden"><div className="content"><div className="task-list"><h2>Доступные задания</h2> <ListGroup className="list">
     {course.funcs.map(func =>
                          <ListGroup.Item key={func.id}  className="item"><div className="name">#{func.id}{func.description}</div><div className="high">justo</div> </ListGroup.Item>

                    )} <ListGroup.Item className="item">Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item className="item">Morbi leo risus</ListGroup.Item>
    <ListGroup.Item className="item">Cras justo odio</ListGroup.Item>
    <ListGroup.Item className="item">Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item className="item">Morbi leo risus</ListGroup.Item>
    <ListGroup.Item className="item">Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item className="item">Vestibulum at eros</ListGroup.Item>
  </ListGroup> </div>
  <div className="filters"><h4>Статус</h4> 
  <div className="check">
    <div className="check-item">
    <input type="checkbox" className="check-in"/>
    <label htmlFor="checkbox">Решенные</label>
    </div>
    <div className="check-item">
    <input type="checkbox"/>
    <label htmlFor="checkbox">Нерешенные</label>
    </div><hr />
   <h4> Cложность </h4> <div className="check-item">
    <input type="checkbox" className="check-in"/>
    <label htmlFor="checkbox">Решенные</label>
    </div>
    <div className="check-item">
    <input type="checkbox"/>
    <label htmlFor="checkbox">Нерешенные</label></div>
    </div></div></div></div></>
  );
});