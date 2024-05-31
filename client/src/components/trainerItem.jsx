import React, { useState, useEffect, useContext } from "react";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { fetchTask, solveTask, fetchProgress } from "../http/itemAPI";
// import "./css/Task.css";

const Task = observer(({ task, onSolve, onProgress, show, onHide }) => {
  const { course } = useContext(Context);
  const [showModal, setShowModal] = useState(false); 
  const [solution, setSolution] = useState("");
  const [isSolved, setIsSolved] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSubmit = async () => {
    try {
      const response = await solveTask({
        taskId: task.id,
        userId: '1',
        solution: solution,
      });

      setIsSolved(response.solved);
      setShowResult(true);
      if (onSolve) {
        onSolve(response.solved);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <div className='cardfunc' onClick={handleShowModal}> 
        <div>
          <div>
            <div>{task.description}</div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Задача {task.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3>Описание:</h3>
            {task.description}
          </div>
          <div>
            <h3>Условие:</h3>
            <pre>{task.condition}</pre>
          </div>
          <div>
            <h3>Ваше решение:</h3>
            <textarea
              className="task-textarea"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              placeholder="Введите ваше решение"
            />
          </div>
          {showResult && (
            <div>
              <h3>Результат:</h3>
              {isSolved ? (
                <div className="success">Задача решена!</div>
              ) : (
                <div className="success">Задача решена!</div>
              )}
            </div>
          )}
          {errorMessage && (
            <div className="error">Ошибка: {errorMessage}</div>
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
