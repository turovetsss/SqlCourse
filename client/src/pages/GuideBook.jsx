import React, {useContext,useEffect,useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import {Context} from "../index";
import {useParams} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {fetchOneFunc} from "../http/itemAPI";
import { Navbarr } from "../components/Navbarr";
import './css/Guide.css'
export const GuideBook = () => {
  const {course} = useContext(Context)
  const [func, setFunc] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
      fetchOneFunc(id).then(data => setFunc(data))
  }, [])

  // useEffect( () => {
  //   fetchOneFunc(id).then(data => setFunc(data));
  // },[id]);


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
    <div style={{padding:'20px 280px'}}className="background-radial-gradient overflow-hidden"> 
    <div className="title-group">
   <div><a href={'/'}>Справочник</a> --- {func.name}</div>
    </div>
    <Card className="card2">
     
                          <h3> Функция "{func.name}"</h3>
                            {func.description}
                            <h5>
                            Синтаксис
                            </h5>
                            <div className="primer">{func.script}</div>
                        
                
                <h1>Характеристики</h1>
                {func.info.map((info, index) =>
                    <div  className="primer" key={info.id} >
                        {info.title}: {info.description}
                    </div >
                )}
         
          </Card>
       
     </div>
     </div>
   </div>
              
          </>
  );
};