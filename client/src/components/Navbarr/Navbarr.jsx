import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbarr.css'
export const Navbarr =()=>{
  return( <>
<Navbar className="navv">
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
</Navbar>
</>)
}