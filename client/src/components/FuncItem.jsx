import React from 'react';
import {Card, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {FUNC_ROUTE} from "../utils/consts";
const FuncItem = ({func}) => {
    const navigate = useNavigate()
    
    
    return (
      
        <Col md={3} className={"mt-3"} onClick={() => navigate(FUNC_ROUTE +'/' + func.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div>{func.name}</div>
                    </div>
                </div>
            </Card>
        </Col>
    
    );
};

export default FuncItem;