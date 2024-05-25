import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import ModuleItem from "./moduleItem";
const ModuleList = observer(() => {
    const {course} = useContext(Context)

    return (
        <Row>
            {course.bookmodules.map(bookmodule =>
                <ModuleItem key={bookmodule.id} bookmodule={bookmodule} />
            )}
        </Row>
    );
});

export default ModuleList;