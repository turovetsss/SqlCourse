import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Task from "./trainerItem";
const TrainerList = observer(() => {
    const {course} = useContext(Context)

    return (
        <div>
            {course.tasks.map(task =>
              <Task key={task.id} task={task} />
            )}
        </div>
        
    );
});

export default TrainerList;