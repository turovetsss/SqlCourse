import React, {useContext, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import { Context } from '../../index';
import {ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, COURSE_ROUTE} from "../../utils/consts";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

import './Navbarr.css'
export const Navbarr= observer( () => {
  const {user} = useContext(Context)//для разных пользователей навбар будет отображаться по разному
  const navigate = useNavigate()
  const logOut = () =>{
    user.setUser({})
    user.setIsAuth(false)
    // Удаление токена из localStorage (или cookies)
    localStorage.removeItem('token');
    // Дополнительные шаги, если нужно, например, перенаправление на страницу входа
    navigate('/login');

}

  return( <>
<Navbar className="navv">
{user.isAuth ?
  <Container>
    <Navbar.Brand className='navbrand'href="#home">SQL</Navbar.Brand>
    <Nav className="me-left">
    <Nav.Link className='navlink' href="http://localhost:3000/course">Курс</Nav.Link>
      <Nav.Link className='navlink' href="http://localhost:3000/trainer">Тренажер</Nav.Link>
      <Nav.Link className='navlink' href="http://localhost:3000/sandbox">Песочница</Nav.Link>
      <Nav.Link className='navlink' href="http://localhost:3000/guide">Справочник</Nav.Link>
    </Nav>
    <Nav className="me-right">
    <a href="http://localhost:3000/login" onClick={()=>logOut()}><button className='nav-link-login' >Выйти</button></a>
    <a href=""><button className='nav-link-login' disabled={true} >Профиль</button></a>
 
 </Nav>
  </Container>
      :
      <Container>
    <Navbar.Brand className='navbrand'href="#home">SQL</Navbar.Brand>
    <Nav className="me-left">
    <Nav.Link className='navlink' href="http://localhost:3000/course">Курс</Nav.Link>
      <Nav.Link className='navlink' href="http://localhost:3000/trainer">Тренажер</Nav.Link>
      <Nav.Link className='navlink' href="http://localhost:3000/sandbox">Песочница</Nav.Link>
      <Nav.Link className='navlink' href="http://localhost:3000/guide">Справочник</Nav.Link>
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