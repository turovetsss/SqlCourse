import React from 'react';
import {Card, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {BOOKMODULE_ROUTE,COURSE_ROUTE} from "../utils/consts";
import '../pages/css/Guide.css'
import { CourseCard } from './CourseCard';
const ModuleItem = ({bookmodule}) => {
    const navigate = useNavigate()
    
    
    return (
      
        <div onClick={() => navigate(BOOKMODULE_ROUTE +'/' + bookmodule.id)}>
            <div className='cardfunc'>
                <div >
                    <div>
                        <div>{bookmodule.title}</div>
                        <div>{bookmodule.description}</div>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default ModuleItem;