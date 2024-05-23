import React from 'react';
import {Card, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {FUNC_ROUTE} from "../utils/consts";
import '../pages/css/Guide.css'
const FuncItem = ({func}) => {
    const navigate = useNavigate()
    
    
    return (
      
        <Col md={3} className={"mt-3"} onClick={() => navigate(FUNC_ROUTE +'/' + func.id)}>
            <Card className='cardfunc'>
                <div >
                    <div>
                        <div>{func.name}</div>
                    </div>
                </div>
            </Card>
        </Col>
    
    );
};

export default FuncItem;