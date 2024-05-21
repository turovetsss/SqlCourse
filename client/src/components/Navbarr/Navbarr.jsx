import React, {useContext,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import { Context } from '../../index';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {fetchUser} from "../../http/itemAPI.js";

import './Navbarr.css'
import { GUIDE_ROUTE } from '../../utils/consts.js';
export const Navbarr= observer( () => {
  const {user} = useContext(Context)//для разных пользователей навбар будет отображаться по разному
  const {course} = useContext(Context)
  const navigate = useNavigate()
  const logOut = () =>{
    user.setUser({})
    user.setIsAuth(false)
    // Удаление токена из localStorage (или cookies)
    localStorage.removeItem('token');
    // Дополнительные шаги, если нужно, например, перенаправление на страницу входа
    navigate('/login');
  }
const alertIsAuth=()=>{
 alert('Тренажер доступен только авторизованным пользователям!')
}
useEffect(() => {
  fetchUser().then(data=> course.setUsers(data))
}, [course])



  return( <>
<Navbar className="navv">
{user.isAuth ?
  <Container>
    <Navbar.Brand className='navbrand'href="#home">SQL</Navbar.Brand>
    <Nav className="me-left">
    <Nav.Link className='navlink' href="http://localhost:3000/course">Курс</Nav.Link>
      <Nav.Link className='navlink' href="http://localhost:3000/trainer">Тренажер</Nav.Link>
      <Nav.Link className='navlink' href="http://localhost:3000/sandbox">Песочница</Nav.Link>
      <a href={GUIDE_ROUTE}><Nav.Link className='navlink'>Справочник</Nav.Link></a>
    </Nav>
    <Nav className="me-right">
    <Dropdown  data-bs-theme="light" height="100px">
        <Dropdown.Toggle id="dropdown-button-light-example1" variant="first">
         {course.users.map(user => <div className='div-account'><img width="30" height="30" src="https://img.icons8.com/small/30/000000/user.png" alt="user"/>{user.name}</div>   )}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4"><a href="http://localhost:3000/login" onClick={()=>logOut()}><button className='nav-link-login' >Выйти</button></a></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

 
 </Nav>
  </Container>
      :
      <Container>
    <Navbar.Brand className='navbrand'href="#home">SQL</Navbar.Brand>
    <Nav className="me-left">
    <Nav.Link className='navlink' href="http://localhost:3000/course">Курс</Nav.Link>
      <Nav.Link className='navlink' href=""   onClick={() => alertIsAuth()} >Тренажер</Nav.Link>
      <Nav.Link className='navlink' href=""   onClick={() => alertIsAuth()}>Песочница</Nav.Link>
      <Nav.Link className='navlink' href={GUIDE_ROUTE}>Справочник</Nav.Link>
    </Nav>
    <Nav className="me-right">
    <a href="http://localhost:3000/login"><button className='nav-link-login' >Вход</button></a>
    <a href="http://localhost:3000/registry"><button className='nav-link-reg' >Регистрация</button></a>
    </Nav>
  </Container>
}
</Navbar>
</>)
})