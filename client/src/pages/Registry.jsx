import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Navbarr } from "../components/Navbarr";
import './css/Auth.css'
export const Registry=()=>{
  return(
    <>
  <Navbarr/>
    <div className="background-radial-gradient overflow-hidden">   <div md='6' className='text-center text-md-start d-flex flex-column justify-content-center'></div>

    <Container className='position-relative'>
    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>

            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="shadow-title">
                  <h3 className="mb-1 text-uppercase ">Регистрация</h3>
                  </div>
                  <div className="mb-2">
                    <Form>
                      <Form.Group className="mb-2" controlId="formBasicEmail">
                        <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' alt="" />
                        <Form.Label className="text-center">
                          Логин
                        </Form.Label>
                        <Form.Control type="email" placeholder="Введите email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text" href="#!">
                            Забыли пароль?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button className="bbb"type="submit">
                          Войти
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Еще нет аккаунта?{" "}
                        <a href="{''}" className="text">
                        Регистрация
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </Container>
</div>
</>
  );
};