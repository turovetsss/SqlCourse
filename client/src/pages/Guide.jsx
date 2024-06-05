import React, {useContext,useEffect,useState} from 'react';
import {Context} from "../index";
import {useNavigate} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import {fetchFuncs,fetchTypes} from "../http/itemAPI";
import './css/Guide.css'

import "./css/Course.css";
import { Navbarr } from "../components/Navbarr";
import FuncList from '../components/FuncList';
export const Guide = observer(() => {
  const {course} = useContext(Context)
  const navigate = useNavigate() 
  const [selectedType, setSelectedType] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [buttonTerm, setButtonTerm] = useState('')
  useEffect(() => {
    fetchFuncs().then(data => course.setFuncs(data))
    fetchTypes().then(data => course.setTypes(data))

}, [])
const handleTypeClick = (type) => {
    setSelectedType(type);
};

  return(<>
<Navbarr />
<div className="course">
    <Container className='position-relative'>
    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-3" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-4" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
          </Container>
    <div> 
    <div style={{padding:'100px 300px'}}> 
    <div className="title-group">
    <h1 className='title'>Справочник по функциям</h1>
    </div>
    <div className="button-group">
    <input 
                  type="text" 
                  className='input-group' 
                  placeholder='Поиск'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

    <button className="group" value={'Все'}  onClick={(e) => setButtonTerm('Все')}>Все</button>
    {course.types.map(type =>
        <button className="group"  key={type.id} value={type.name}  onTouchMove={(e) => setButtonTerm(type.name) } >{type.name}</button>
      )}
     </div>
    <Card className="card2">
    <div >
            <div  className='col1'>
            <FuncList></FuncList>
            </div>          
       </div>
       </Card>
   </div>
    </div>
    </div>
   
    </>
  );
}
);