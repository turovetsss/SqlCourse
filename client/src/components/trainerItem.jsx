import React, { useState } from 'react';
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {TRAINER_ROUTE} from "../utils/consts";
import '../pages/css/Guide.css';
import {createTrainerAccount} from "../http/itemAPI.js";
import Modal from 'react-bootstrap/Modal'; // Импортируем Modal
const TrainerItem = ({trainer},{show, onHide}) => {
  const navigate = useNavigate();
  const [solved, setSolved] = useState('');
  const [showModal, setShowModal] = useState(false); // Состояние для модального окна
  const [info, setInfo] = useState([])
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const addInfo = () => {
    setInfo([...info, {solution: '', traineraccountId:trainer.id, number: Date.now()}])
}
const changeInfo = (index, value) => {
  setInfo(prevInfo => {
    const updatedInfo = [...prevInfo];
    updatedInfo[index] = { number: index, solution: value };
    return updatedInfo;
  });
};


const Solution = () => {
  console.log("solution:", trainer.solution);

  const isCorrect = info.every(item => item.solution === trainer.solution); 

  if (isCorrect) {
    alert('Ура!');
    const addTrainerAccount = () => {
      const formData = new FormData();
      formData.append('solved', "true")
      formData.append('trainerId', trainer.id);
      formData.append('traineelist', JSON.stringify(info));
      createTrainerAccount(formData).then(data => onHide());
      // alert('Функция добавлена успешно');
      // window.location.reload(); 
    };
    addTrainerAccount();
    handleCloseModal();
  } else {
    alert('Неверно! Попробуйте еще раз.');
  }
};

    return (
      <div>
      <Card className='cardfunc' onClick={handleShowModal}> 
        <div>
          <div>
            <div>{trainer.description}</div>
          </div>
        </div>
      </Card>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Задача</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{trainer.description}</p> 
          <p>{trainer.solution}</p>
          <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map((_, index) => (
            <input 
              key={index} 
              type="text" 
              value={info[index]?.solution || ''} 
              onChange={(e) => changeInfo(index, e.target.value)} 
              placeholder={"Введите информацию"} 
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleCloseModal}>
            Закрыть
          </button>
          <button variant="primary"  onClick={Solution}>
            Проверить решение
          </button>
        </Modal.Footer>
      </Modal>
    </div>
    );
};

export default TrainerItem;