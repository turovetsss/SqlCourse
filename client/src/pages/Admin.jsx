import React, {useState,useEffect,useContext} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateFunc from "../components/modals/CreateFunc";
import CreateTrainer from "../components/modals/CreateTrainer";
import Table from 'react-bootstrap/Table';
import {editFunc,fetchFunc,deleteFunc, deleteTrainer,fetchTrainer} from "../http/itemAPI";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

import ListGroup from 'react-bootstrap/ListGroup';

import './css/Admin.css'
import { AdminNavbar } from '../components/AdminNavbar';
import EditFunc from '../components/modals/EditFunc';
export const Admin= observer(() => {
  const {course} = useContext(Context)
  const [value, setValue] = useState('')
  const[funcEditVisible,setFuncEditVisible]=useState(false)
    const [funcVisible, setFuncVisible] = useState(false)
    const [trainerVisible, setTrainerVisible] = useState(false)
    useEffect(() => {
      fetchFunc().then(data => course.setFuncs(data))
      fetchTrainer().then(data=>course.setTrainers(data))
  }, [])

  const removeFunc = (id) => {
    console.log(id)
    if (id) {
      deleteFunc({id:id}).then(data=>{
        alert("Функция успешно удалена");
        window.location.reload();
      })
    } else {
      console.log('hui')
    }
  }
  const removeTrainer = (id) => {
    console.log(id)
    if (id) {
      deleteTrainer({id:id}).then(data=>{
        alert("Задача успешно удалена");
        window.location.reload();
      })
    } else {
      console.log('hui')
    }
  }
    return (<><AdminNavbar></AdminNavbar>
      <div>
     
            <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3 overflow-visible"
      fill
    >
      <Tab className='hehehe' eventKey="home" title="Справочник">
      <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>id <Button className='btn'   onClick={() => setFuncVisible(true)}
            >+</Button>  <CreateFunc show={funcVisible} onHide={() => setFuncVisible(false)}/></th>
          <th>Название</th>
          <th>Тип</th>
          <th>Описание</th>
          <th>Действия</th>
        </tr>  
      </thead>
      <tbody>
      {course.funcs.map(func =>
                        <tr key={func.id} >
                          <td>{func.id}</td>
                            <td>{func.name}</td>
                            <td>{func.type}</td>
          <td>{func.description}</td>
          <td><Button className='btn' onChange={e => setValue(func.id)} onClick={() => removeFunc(func.id)}>-</Button> <Button className='btn'   onClick={() => setFuncEditVisible(true)}
            >Настройки</Button>  <EditFunc show={funcEditVisible} onHide={() => setFuncEditVisible(false)}/> </td>
                        </tr>
                    )}
      </tbody>
    </Table>
      </Tab >
      <Tab eventKey="profile" title="Тренажер">
      <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>id <Button className='btn'   onClick={() => setTrainerVisible(true)}
            >+</Button>  <CreateTrainer show={trainerVisible} onHide={() => setTrainerVisible(false)}/></th>
          <th>Задача</th>
          <th>Описание</th>
          <th>Сложность</th>
          <th>Действия</th>
        </tr>  
      </thead>
      <tbody>
      {course.trainers.map(trainer =>
                        <tr key={trainer.id} >
                          <td>{trainer.id}</td>
                            <td>{trainer.description}</td>
                            <td>{trainer.solution}</td>
          <td>{trainer.complexity}</td>
          <td>{trainer.solved}</td>
          <td><Button className='btn' onChange={e => setValue(trainer.id)} onClick={() => removeTrainer(trainer.id)}>-</Button> <Button className='btn' >Настройки</Button> </td>
                        </tr>
                    )}
      </tbody>
    </Table>
      </Tab>
      <Tab eventKey="longer-tab" title="Курс">
        Информация о курсе
      </Tab>
      <Tab eventKey="contact" title="Пользователи">
        Пользователи и рейтинги
      </Tab>
    </Tabs>
        <div className="admin-panel">
     
       
       
        </div>
        </div>
        </>
    );
})

export default Admin;