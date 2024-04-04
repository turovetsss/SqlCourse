import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbarr.css'
export const Navbarr =()=>{
  return( <>
<Navbar >
  <Container>
    <Navbar.Brand href="#home">SQL</Navbar.Brand>
    <Nav className="me-left">
    <Nav.Link className='navlink' href="#home">Курс</Nav.Link>
      <Nav.Link className='navlink' href="#home">Тренажер</Nav.Link>
      <Nav.Link className='navlink' href="#features">Песочница</Nav.Link>
      <Nav.Link className='navlink' href="#pricing">Справочник</Nav.Link>
    </Nav>
    <Nav className="me-right">
   <button className='nav-link-login' href="#pricing">Вход</button>
   <button className='nav-link-reg' href="#pricing">Регистрация</button>
    </Nav>
  </Container>
</Navbar>
</>)
}