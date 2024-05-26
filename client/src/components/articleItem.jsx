import React from 'react';
import {Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {BOOKARTICLE_ROUTE} from "../utils/consts";
import '../pages/css/Guide.css'
const ArticleItem = ({bookarticle}) => {
    const navigate = useNavigate()
    
    
    return (
      
        <div onClick={() => navigate(BOOKARTICLE_ROUTE +'/' + bookarticle.id)}>
            <Card className='cardfunc'>
                <div >
                    <div>
                        <div>{bookarticle.name}</div>
                        <div>{bookarticle.title}</div>
                    </div>
                </div>
            </Card>
        </div>
    
    );
};

export default ArticleItem;