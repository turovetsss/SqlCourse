import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import FuncItem from "./FuncItem";
const FuncList = observer(() => {
    const {course} = useContext(Context)

    return (
        <Row>
            {course.funcs.map(func =>
                <FuncItem key={func.id} func={func}/>
            )}
        </Row> 
    );
});

export default FuncList;