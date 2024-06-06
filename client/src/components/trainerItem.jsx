import React, { useState, useEffect, useContext } from "react";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import { Card, ListGroup ,ListGroupItem} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { fetchTask, solveTask, fetchProgress,deleteTask } from "../http/itemAPI";
import "./Trainer.css";
import {check} from "../http/userAPI";
const Task = observer(({ task, onSolve, onProgress, show, onHide }) => {
  const { course } = useContext(Context);
  const { user } = useContext(Context);
  const [showModal, setShowModal] = useState(false); 
  const [solution, setSolution] = useState("");
  const [isSolved, setIsSolved] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
 console.log(user.user.id)
  const handleSubmit = async () => {
    try {
      const response = await solveTask({
        taskId: task.id,
        userId: user.user.id, 
        solution: solution,
      });
   
      setIsSolved(response.solved);
      setShowResult(true);
      if (onSolve) {
        onSolve(response.solved);
      }
      setSolution(''); 
      setErrorMessage(''); 
    } catch (e) {
      setErrorMessage(e.response.data.message);
    }
  };

  useEffect(() => {
    console.log(user.id, user.name);
  }, [user]);

  return (
    <div className="task-card">
    {!isSolved && (
      <div 
        className={`task-card-content ${isSolved ? 'solved' : ''}`} 
        onClick={handleShowModal}
      >
        <div className="task-id">Задача {task.id}</div>
        <div className="task-description">{task.description}</div>
      </div>
    )}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Задача {task.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3>Описание:</h3>
            {task.description}
          </div>
          <ListGroup className='table-list2'>
      <ListGroup.Item className='list-title'>Таблица Students</ListGroup.Item>
      <ListGroup.Item className='list-item'><div >id </div><div>|</div> <div >Name</div><div>|</div><div >Surname</div><div>|</div><div >Group </div><div>|</div><div >Mark </div><div>|</div>Birthday</ListGroup.Item>
      </ListGroup>
          <div>
            <h3>Решение:</h3>
            <pre>{task.condition}</pre>
          </div>
          <div>
            <h3>Ваше решение:</h3>
            <textarea
              className="task-textarea"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              placeholder=""
            />
          </div>
          {showResult && (
            <div>
              <h3>Результат:</h3>
                <div className="success">Задача решена</div>
            </div>
          )}
          {errorMessage && (
            <div className="error">{errorMessage}</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
   
    </div>
  );
});
export default Task;