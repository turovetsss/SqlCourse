import React, {useState,useEffect,useContext} from 'react';
import {Button, Card} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import CreateFunc from "../components/modals/CreateFunc";
import CreateTrainer from "../components/modals/CreateTrainer";
import CreateType from "../components/modals/CreateType";

import CreateArticle from "../components/modals/CreateArticle";

import Table from 'react-bootstrap/Table';
import {fetchFuncs,deleteFunc, deleteTrainer,fetchTrainer,fetchUser, fetchBookmodule, fetchBookarticle} from "../http/itemAPI";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

import './css/Admin.css'
import { AdminNavbar } from '../components/AdminNavbar';
import CreateBookmodule from '../components/modals/CreateModule';
export const Admin= observer(() => {
  const {course} = useContext(Context)
  const [value, setValue] = useState('')
    const [funcVisible, setFuncVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [bookmoduleVisible, setBookmoduleVisible] = useState(false)
    const [articleVisible, setArticleVisible] = useState(false)
    const [trainerVisible, setTrainerVisible] = useState(false)
    console.log(value)
    useEffect(() => {
      fetchFuncs().then(data=> course.setFuncs(data))
    
    //   fetchFuncs(null).then(data => {
    //     course.setFuncs(data.rows)
    // })
    fetchBookmodule().then(data=> course.setBookmodules(data))
    fetchBookarticle().then(data=> course.setBookarticles(data))
    
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
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Справочник</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Тренажер</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Курс</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Пользователи</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={5}>
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
            <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3 overflow-visible"
      fill
    >
      <Tab className='hehehe' eventKey="home" title="Справочник">
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <Button className='btn'   onClick={() => setFuncVisible(true)}
            >Добавить функцию</Button>  <CreateFunc show={funcVisible} onHide={() => setFuncVisible(false)}/><Button className='btn'   onClick={() => setTypeVisible(true)}
            >Добавить раздел</Button>  <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>id </th>
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
        <Button className='btn'   onClick={() => setBookmoduleVisible(true)}
            >Добавить модуль</Button>  <CreateBookmodule show={bookmoduleVisible} onHide={() => setBookmoduleVisible(false)}/>
                   <Button className='btn'   onClick={() => setArticleVisible(true)}
       >Добавить раздел</Button>  <CreateArticle show={articleVisible} onHide={() => setArticleVisible(false)}/>
        <Table striped bordered hover variant="white">
        <thead>
        <tr>
          <th>id</th>
          <th>Название</th>
          <th>Описание</th>
          <th>Разделы</th>
        </tr>  
      </thead>
      <tbody>
  {course.bookmodules.map(bookmodule =>
    <tr key={bookmodule.id}>
      <td>{bookmodule.id}</td>
      <td>{bookmodule.name}</td>
      <td>{bookmodule.description}</td>
      {course.bookarticles.filter(bookarticle => bookarticle.bookmoduleId === bookmodule.id)
        .map(bookarticle => 
          <div className='etd' key={bookarticle.id}>
            {bookarticle.name}
          </div>
        )}
    </tr>
  )}
</tbody>
      </Table>
              
      
      </Tab>
      <Tab eventKey="user" title="Пользователи">
      <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>id </th>
          <th>Имя</th>
          <th>Логин</th>
          <th>Присоединился</th>
          <th>чет тут еще из профиля
          </th>
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