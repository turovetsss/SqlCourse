import React, {useContext,useEffect,useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import {Context} from "../index";
import {useParams,useNavigate} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import {GUIDEBOOK_ROUTE} from "../utils/consts";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import {fetchFunc} from "../http/itemAPI";
import './css/Guide.css'
import { Navbarr } from "../components/Navbarr";
import FuncList from '../components/FuncList';
export const Guide = observer(() => {
  const {course} = useContext(Context)
  const navigate = useNavigate() 
  const [searchTerm, setSearchTerm] = useState('');
  const [buttonTerm, setButtonTerm] = useState('')
  useEffect(() => {
    fetchFunc().then(data => course.setFuncs(data))
}, [])

  // useEffect( () => {
  //   fetchOneFunc(id).then(data => setFunc(data));
  // },[id]);

const filteredFuncs = course.funcs.filter(func => {
  if(buttonTerm ==='Все'){
   console.log('hui')  
   return func.name.replaceAll() && func.name.toLowerCase().includes(searchTerm.toLowerCase());
  }
  else{
  return func.type.toLowerCase().includes(buttonTerm.toLowerCase()) && func.name.toLowerCase().includes(searchTerm.toLowerCase());
  }
});


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
        <button className="group" value={'Основные'}  onClick={(e) => setButtonTerm("Основные")}>Основные</button>
        <button className="group" value={'Математика'}  onClick={(e) => setButtonTerm("Математика")}>Математика</button>
        <button className="group" value={'Строки'} onClick={(e) => setButtonTerm("Строки")}>Строки</button>
        <button className="group" value={'Даты'} onClick={(e) => setButtonTerm("Даты")}>Даты</button>
        <button className="group" value={'Объединения'} onClick={(e) => setButtonTerm("Объединения")}>Объединения</button>
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