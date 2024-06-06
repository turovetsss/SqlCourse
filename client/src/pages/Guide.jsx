import React, {useContext,useEffect,useState} from 'react';
import {Context} from "../index";
import {useNavigate} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import {fetchFuncs,fetchTypes} from "../http/itemAPI";
import './css/Guide.css';
import './css/Course.css';
import { Navbarr } from "../components/Navbarr";
import FuncList from '../components/FuncList';
export const Guide = observer(() => {
  const { course } = useContext(Context);
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [buttonTerm, setButtonTerm] = useState('Все'); 
  const [sortedFuncs, setSortedFuncs] = useState([]); 
  useEffect(() => {
    fetchFuncs().then(data => {
      course.setFuncs(data);
      setSortedFuncs(data); 
    });
    fetchTypes().then(data => course.setTypes(data));
  }, []);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const handleButtonTermClick = (term) => {
    setButtonTerm(term);
    if (term === 'Все') {
      setSortedFuncs(course.funcs); 
    } else {
      const filteredFuncs = course.funcs.filter(func => func.typeId === term);
      setSortedFuncs(filteredFuncs);
    }
  };

  return (
    <>
      <Navbarr />
      <div className="course">
        <Container className='position-relative'>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-3" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-4" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
        </Container>
        <div>
          <div style={{ padding: '20px 350px' }}>
            <div className="title-group">
              <h1 className='title'>Справочник по функциям</h1>
            </div>
            <div className="button-group">
              {course.types.map(type => (
                <button
                  className="group"
                  key={type.id}
                  value={type.name}
                  onClick={() => handleButtonTermClick(type.id)}
                >
                  {type.name}
                </button>
              ))}
              <button
                className="group"
                value={'Все'}
                onClick={() => handleButtonTermClick('Все')}
              >
                Все
              </button>
            </div>
            <Card className="card2">
              <div>
                <div className='col1'>
                  <FuncList funcs={sortedFuncs} /> 
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
});