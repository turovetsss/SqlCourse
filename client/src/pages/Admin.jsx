import React, {useState,useEffect,useContext} from 'react';
import {Button, Card, ListGroupItem, TabPane} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import CreateFunc from "../components/modals/CreateFunc";
import CreateTrainer from "../components/modals/CreateTrainer";
import CreateType from "../components/modals/CreateType";

import CreateArticle from "../components/modals/CreateArticle";
import EditFunc from '../components/modals/EditFunc';
import Table from 'react-bootstrap/Table';
import {fetchFuncs,deleteFunc, deleteTask,fetchTask,fetchUser, fetchBookmodule, fetchBookarticle, deleteBookarticle, deleteBookModule} from "../http/itemAPI";
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
    const [funceditVisible, setFunceditVisible] = useState(false)
    const [editFuncId, setEditFuncId] = useState('')
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
    
      fetchTask().then(data=> course.setTasks(data))
      fetchUser().then(data=> course.setUsers(data))
  }, [course])
 


  const removeFunc = (id) => {
    console.log(id)
    if (id) {
      deleteFunc({id:id}).then(data=>{
        alert("Функция удалена");
        window.location.reload();
      })
    } else {
      console.log('hui')
    }
  }
  const editFunc = (id) => {
    console.log(id)
    
  };
  const removeBookarticle = (id) => {
    console.log(id)
    if (id) {
      deleteBookarticle({id:id}).then(data=>{
        alert("Статья удалена");
        window.location.reload();
      })
    } else {
      console.log('hui')
    }
  }
  const removeTrainer = (id) => {
    console.log(id)
    if (id) {
      deleteTask({id:id}).then(data=>{
        alert("Задача удалена");
        window.location.reload();
      })
    } else {
      console.log('hui')
    }
  }
  const removeBookModule = (id) => {
    console.log(id)
    if (id) {
      deleteBookModule({id:id}).then(data=>{
        alert("Модуль курса удален");
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
        <Col  className='pills-tab' sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item className='items'>
              <Nav.Link eventKey="first">Справочник функций</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Задачник</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">База знаний</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Пользователи</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first"><CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <Button className='btn'   onClick={() => setFuncVisible(true)}
            >+Добавить функцию </Button>  <CreateFunc show={funcVisible} onHide={() => setFuncVisible(false)}/><Button className='btn'   onClick={() => setTypeVisible(true)}
            >+Добавить раздел функций</Button>  <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>id </th>
          <th>Название</th>
         
          <th>Описание</th>
          <th>Действия</th>
        </tr>  
      </thead>
      <tbody>
      {course.funcs.map(func =>
                        <tr key={func.id} >
                          <td>{func.id}</td>
                            <td>{func.name}</td>
          <td>{func.description}</td>
          <td><Button className='btndelete' onChange={e => setValue(func.id)} onClick={() => removeFunc(func.id)}>-Удалить</Button>  </td>
          <Button className='btndelete' 
        onClick={() => {
            setEditFuncId(func.id);
            setFuncVisible(true);
            editFunc(func.id); 
        }}>

          Редактировать</Button>     <EditFunc show={funceditVisible} onHide={() => setFunceditVisible(false)} funcId={editFuncId} />
           
          </tr>
                    )}
      </tbody>
    </Table>
    </Tab.Pane>
            <Tab.Pane eventKey="second"><Table striped bordered hover variant="light">
      <thead>
      <Button className='btn'   onClick={() => setTrainerVisible(true)}
            >+Добавить задачу</Button> 
        <tr>
          <th>id  <CreateTrainer show={trainerVisible} onHide={() => setTrainerVisible(false)}/></th>
          <th>Задача</th>
          <th>Описание</th>
          <th>Решение</th>
          <th>Действия</th>
        </tr>  
      </thead>
      <tbody>
      {course.tasks.map(task =>
                        <tr key={task.id} >
                          <td>{task.id}</td>
                            <td>{task.description}</td>
                            <td>{task.condition}</td>
                            <td>{task.solution}</td>
          <td><Button className='btndelete' onChange={e => setValue(task.id)} onClick={() => removeTrainer(task.id)}>-Удалить</Button>  </td>
                        </tr>
                    )}
      </tbody>
    </Table></Tab.Pane>
    <Tab.Pane eventKey='third'>   <Button className='btn'   onClick={() => setBookmoduleVisible(true)}
            >+Добавить модуль</Button>  <CreateBookmodule show={bookmoduleVisible} onHide={() => setBookmoduleVisible(false)}/>
                   <Button className='btn'   onClick={() => setArticleVisible(true)}
       >+Добавить cтатью в модуль</Button>  <CreateArticle show={articleVisible} onHide={() => setArticleVisible(false)}/>
        <Table striped bordered hover variant="white">
        <thead>
        <tr>
          
          <th>id</th>
          <th>Название</th>
          <th>Описание</th>
          <th></th>
        </tr>  
      </thead>
      <tbody>
  {course.bookmodules.map(bookmodule =>
    <tr key={bookmodule.id}> 
      <td>{bookmodule.id}</td>
      <td>{bookmodule.name}</td>
      <td>{bookmodule.description}</td>
      <div>Статьи:</div>
      {course.bookarticles.filter(bookarticle => bookarticle.bookmoduleId === bookmodule.id)
        .map(bookarticle => 
          <ListGroupItem className='etd' key={bookarticle.id}>
           
            {bookarticle.id} / {bookarticle.name}
            <Button className='btndelete' onChange={e => setValue(bookarticle.id)} onClick={() => removeBookarticle(bookarticle.id)}>-Удалить</Button> 
          </ListGroupItem> 
        )}
        <td><Button className='btndelete' onChange={e => setValue(bookmodule.id)} onClick={() => removeBookModule(bookmodule.id)}>- Удалить модуль</Button></td>
    </tr>
  )}
</tbody>
      </Table></Tab.Pane>
    <Tab.Pane eventKey='fourth'> <Table striped bordered hover variant="light">
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
    </Table> </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
          </div>
        </>
    );
})

export default Admin;