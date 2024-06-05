import React, {useContext, useState} from 'react';
import {COURSE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap';
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

import {Navbarr} from "../components/Navbarr";
import './css/Auth.css'

export const Auth = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
                alert("С возвращением!");
            } else {
                data = await registration(name, email, password);
            }
            user.setUser(data);
            user.setIsAuth(true);
            navigate(COURSE_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    return (
        <>
            <Navbarr/>
            <div className="background-radial-gradient overflow-hidden">
                <Container className="position-relative">
                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
                    <Row className="vh-100 d-flex justify-content-center align-items-center">
                        <Col md={8} lg={6} xs={12}>
                            <Card className="shadow">
                                <Card.Body>
                                    <div className="mb-3 mt-md-4">
                                        <div className="shadow-title">
                                            <h3 className="mb-1 text-uppercase">{isLogin ? "Авторизация" : "Регистрация"}</h3>
                                        </div>
                                        <div className="mb-2">
                                            <Form>
                                                {!isLogin && (
                                                    <Form.Group className="mb-2" controlId="formBasicName">
                                                        <Form.Label className="text-center">Имя</Form.Label>
                                                        <Form.Control type="text" placeholder="Введите имя" value={name}
                                                                      onChange={e => setName(e.target.value)}/>
                                                    </Form.Group>
                                                )}
                                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                                    <Form.Label className="text-center">Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Введите email" value={email}
                                                                  onChange={e => setEmail(e.target.value)}/>
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Label>Пароль</Form.Label>
                                                    <Form.Control type="password" placeholder="Введите пароль"
                                                                  value={password}
                                                                  onChange={e => setPassword(e.target.value)}/>
                                                </Form.Group>
                                                <div className="d-grid">
                                                    <Button className="bbb" type="button"
                                                            onClick={click}>{isLogin ? "Войти" : "Регистрация"}</Button>
                                                </div>
                                            </Form>
                                            <div className="mt-3">
                                                {isLogin ? (
                                                    <p className="mb-0 text-center">Нет аккаунта? <a className="text"
                                                                                                     href={REGISTRATION_ROUTE}>Зарегистрируйся!</a>
                                                    </p>
                                                ) : (
                                                    <p className="mb-0 text-center">Есть аккаунт? <a className="text"
                                                                                                     href={LOGIN_ROUTE}>Войти</a>
                                                    </p>
                                                )}
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
});