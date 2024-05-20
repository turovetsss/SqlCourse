import React, {useContext,useEffect,useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import {Context} from "../index";
import {useParams,useNavigate} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import {GUIDE_ROUTE} from "../utils/consts";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import {fetchFunc,fetchOneFunc} from "../http/itemAPI";
import './css/Guide.css'
import { Navbarr } from "../components/Navbarr";
export const GuideBook = observer(() => {
  const {course} = useContext(Context)
  const [funcs, setFuncs] = useState({info: []});    
  const {id} = useParams();
  useEffect(() => {
    fetchOneFunc(id).then(data => setFuncs(data));
}, [course,id])

  // useEffect( () => {
  //   fetchOneFunc(id).then(data => setFunc(data));
  // },[id]);


  return(<>
            <Col sm={9}>
            <div className="pils">
                <Tab.Content className="content">
                    {course.funcs.map(func =>
                        <Tab.Pane key={func.id} func={course} eventKey={func.id}>
                          <h3> Функция "{func.name}"</h3>
                            {func.description}
                            <h5>
                            Синтаксис
                            </h5>
                            <div className="primer">{func.script}</div>
                            <h5>
                            Пример 1
                            </h5>
                            <p>{func.example1Info}</p>
                            <div className="primer">{func.example1}</div>
                            <h5>
                            Пример 2
                            </h5>
                            <p>{func.example2Info}</p>
                            <div className="primer">{func.example2}</div>
             
                        </Tab.Pane>
                    )}
                    <p>Характеристики</p>
                    <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {funcs.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
                </Tab.Content>
                </div>
            </Col>
          </>
  );
}
);