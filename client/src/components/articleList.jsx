import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import ArticleItem from "./articleItem";
const ArticleList = observer(() => {
    const {course} = useContext(Context)

    return (
        <div>
            {course.bookarticles.map(bookarticle =>
              <ArticleItem key={bookarticle.id} bookarticle={bookarticle} />
            )}
        </div>
        
    );
});

export default ArticleList;