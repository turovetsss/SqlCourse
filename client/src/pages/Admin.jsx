import React, {useState,useEffect,useContext} from 'react';
import {Button} from "react-bootstrap";
import CreateFunc from "../components/modals/CreateFunc";
import CreateTrainer from "../components/modals/CreateTrainer";
import CreateType from "../components/modals/CreateType";

import Table from 'react-bootstrap/Table';
import {fetchFuncs,fetchTypes,deleteFunc, deleteTrainer,fetchTrainer,fetchUser} from "../http/itemAPI";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

import './css/Admin.css'
import { AdminNavbar } from '../components/AdminNavbar';
export const Admin= observer(() => {
  const {course} = useContext(Context)
  const [value, setValue] = useState('')
    const [funcVisible, setFuncVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [trainerVisible, setTrainerVisible] = useState(false)
    console.log(value)
    useEffect(() => {
      fetchFuncs().then(data=> course.setFuncs(data))
    
    //   fetchFuncs(null).then(data => {
    //     course.setFuncs(data.rows)
    // })
      fetchTrainer().then(data=> course.setTrainers(data))
      fetchUser().then(data=> course.setUsers(data))
  }, [course])
 


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
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
       
      <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>id <Button className='btn'   onClick={() => setFuncVisible(true)}
            >+</Button>  <CreateFunc show={funcVisible} onHide={() => setFuncVisible(false)}/><Button className='btn'   onClick={() => setTypeVisible(true)}
            >++</Button>  <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/></th>
          <th>Название</th>
          <th>Тип</th>
          <th>Описание</th>
          <th>Скрипт</th>

          <th>Действия</th>
        </tr>  
      </thead>
      <tbody>
      {course.funcs.map(func =>
                        <tr key={func.id} >
                          <td>{func.id}</td>
                            <td>{func.name}</td>
                            <td>{func.funcType}</td>
          <td>{func.description}</td>
          <td><Button className='btn' onChange={e => setValue(func.id)} onClick={() => removeFunc(func.id)}>-</Button> <Button className='btn'
            >Настройки</Button>   </td>
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
      <Tab eventKey="user" title="Пользователи">
      <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>id </th>
          <th>Имя</th>
          <th>Логин</th>
          <th>Присоединился</th>
        </tr>  
      </thead>
      <tbody>
      {course.users.map(user =>
                        <tr key={user.id} >
                          <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.createdAt).toLocaleDateString()}</td>
          <td> </td>
                        </tr>
                    )}
      </tbody>
    </Table>
      </Tab>
    </Tabs>
        <div className="admin-panel">
     
       
       
        </div>
        </div>
        </>
    );
})

export default Admin;