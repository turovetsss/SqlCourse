import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import TrainerItem from "./trainerItem";
const TrainerList = observer(() => {
    const {course} = useContext(Context)

    return (
        <div>
            {course.trainers.map(trainer =>
              <TrainerItem key={trainer.id} trainer={trainer} />
            )}
        </div>
        
    );
});

export default TrainerList;