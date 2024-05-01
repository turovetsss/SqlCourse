import React, {useContext,useEffect} from 'react';
import Tab from 'react-bootstrap/Tab';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import {fetchFunc} from "../http/itemAPI";
import './css/Guide.css'
import { Navbarr } from "../components/Navbarr";
export const Guide = observer(() => {
  const {course} = useContext(Context)
  useEffect(() => {
    fetchFunc().then(data => course.setFuncs(data))

}, [])


  return(<>
<Navbarr />
    <div className="background-radial-gradient overflow-hidden">
    <Container className='position-relative'>
    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-3" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-4" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          </Container>
    <div>
    <div style={{padding:'50px 300px'}}className="background-radial-gradient overflow-hidden"> 
    <div className="button-group">
      <button className="group">Oсновные</button>
      <button className="group">Математика</button>
      <button className="group">Строки</button>
      <button className="group">Даты</button>
      <button className="group">Объединения</button>
    </div>
    <Card className="card2">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={3} className='col1'>
                <Nav variant="pills" className="flex-column">
                    {course.funcs.map(func =>
                        <Nav.Item key={func.id} className="item2">
                            <Nav.Link eventKey={func.id}>{func.name}</Nav.Link>
                           
                        </Nav.Item>
                    )}
                </Nav>
            </Col>          
            <Col sm={9}>
            <div className="pils">
                <Tab.Content className="content">
                    {course.funcs.map(func =>
                        <Tab.Pane key={func.id} eventKey={func.id}>
                          <h3> Функция {func.name}</h3>
                            {func.description}
                            <h5>
                            Синтаксис
                            </h5>
                            <div className="primer">{func.name}</div>
                            <h5>
                            Пример 1
                            </h5>
                            <h5>
                            Пример 2
                            </h5>
                        </Tab.Pane>
                    )}
                </Tab.Content>
                </div>
            </Col>
            
        </Row>
    </Tab.Container>
</Card>
   </div>
    </div>
    </div>
    </>
  );
}
);