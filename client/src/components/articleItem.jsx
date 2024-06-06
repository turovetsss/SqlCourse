import React from 'react';
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { BOOKARTICLE_ROUTE } from "../utils/consts";
import '../pages/css/Guide.css'

const ArticleItem = ({ bookarticle, onClick }) => {
  const navigate = useNavigate();

  return (
    <div className="article-item" onClick={onClick}>
      <Card className='cardfunc2'>
        <div>
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