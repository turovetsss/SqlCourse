import React, {useContext, useState} from 'react';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, COURSE_ROUTE} from "../utils/consts";
import {useLocation, useNavigate,useHistory} from "react-router-dom";
import {Row,Container,Col,Card,Form,Button} from 'react-bootstrap';
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {$authHost} from "../http";

import { Navbarr } from "../components/Navbarr";
import './css/Auth.css'
export const Auth= observer(() => {
  const {user} = useContext(Context)
   
    const navigate = useNavigate()//данный хук возращает нам маршрут из строки запроса
    const location = useLocation()//данный хук возращает нам маршрут из строки запроса
    const isLogin = location.pathname === LOGIN_ROUTE;//если станица логина то isLogin = true
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
      let data;
      try {
          if (isLogin){
              data = await login(email, password)
              console.log(data)
          }else{
              data = await registration(email, password)
              console.log(data)
          }
          user.setUser(data)
          user.setIsAuth(true)
          navigate(COURSE_ROUTE)
      }catch (e) {
          alert(e.response.data.message)
      }
  
    }
    
      

    

  return(<>
  <Navbarr/>
      <div className="background-radial-gradient overflow-hidden">
  
      <div>   <div md='6' className='text-center text-md-start d-flex flex-column justify-content-center'></div>
  
      <Container className='position-relative'>
        
      <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
  
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <div className="shadow-title">
                    <h3 className="mb-1 text-uppercase ">{isLogin ? "Авторизация" : "Регистрация"}</h3>
             
                    </div>
                    <div className="mb-2">
                      <Form>
                      {isLogin ?
                      <></>
                   :
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                          
                 <Form.Label className="text-center">
                   Имя
                 </Form.Label>
                 <Form.Control type="email" placeholder="Введите имя"  value={name} onChange={e => setName(e.target.value)}/>
               </Form.Group> 
                }
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                          
                          <Form.Label className="text-center">
                            Email
                          </Form.Label>
                          <Form.Control type="email" placeholder="Введите email"  value={email} onChange={e => setEmail(e.target.value)}/>
                        </Form.Group>
  
                        <Form.Group
                          className="mb-2"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Пароль</Form.Label>
                          <Form.Control type="password" placeholder="Введите пароль" value={password} onChange={e=>setPassword(e.target.value)} />
                        </Form.Group>
                      
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                        
                        </Form.Group>
                        <div className="d-grid">
                        <Button className="bbb" type="submit" onClick={click}> {isLogin ? "Войти": "Регистрация"} </Button>
                      
                        </div>
                      </Form>
                      <div className="mt-3">
                      {isLogin ?
                    <p className="mb-0  text-center">Нет аккаунта? <a className="text" href={REGISTRATION_ROUTE}>Зарегистрируйся!</a></p>
                    :
                    <p className="mb-0  text-center">Есть аккаунт?  <a href={LOGIN_ROUTE} className="text">
                    Войти
                    </a></p>
                }
                     
                      </div>
                      <p className='error-message' id={'error'}></p>
                    </div>
                  </div>
</Card.Body>
              </Card>
            </Col>
          </Row>
          
        </Container>
  </div>
  </div>
  </>
  );
});