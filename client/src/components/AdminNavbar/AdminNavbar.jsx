import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AdminNavbar.css'
import { Button } from "react-bootstrap";
export const AdminNavbar =()=>{
  return( <>
<Navbar className="navv">
  <Container>
    <Navbar.Brand className='navbrand'href="#home">Admin Panel</Navbar.Brand>
    <Nav className="me-left">

    </Nav>
    <Nav className="me-right">
    <a href="http://localhost:3000/registry"><button className='nav-link-reg' >Выйти</button></a>
    </Nav>
  </Container>
</Navbar>
</>)
}