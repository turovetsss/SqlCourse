import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {observer} from "mobx-react-lite";
import {Button, Form,ListGroup ,ListGroupItem} from "react-bootstrap";
import { createTask} from "../../http/itemAPI";
import './CreateFunc.css'
const CreateTrainer= observer(({show, onHide}) =>{
  const [condition, setCondition] = useState('')
  const [description, setDescription] = useState('')
  const [errorDescription, setErrorDescription] = useState(''); // State for description error
  const [errorCondition, setErrorCondition] = useState(''); // State for condition error

  const addTrainer = () => {
      createTask({description:description,condition:condition}).then(data => {
          setCondition('')
          setDescription('')
          onHide()
          alert('Ваш результат записан,Задача добавлена успешно')
          window.location.reload();
      }).catch((error) => {
          if (error.response && error.response.data.message) {
            const errorMessage = error.response.data.message;
            if (errorMessage.includes('Строка запроса')) {
              setErrorCondition(errorMessage);
              setErrorDescription('');
            } else if (errorMessage.includes('Строка описания')) {
              setErrorDescription(errorMessage);
              setErrorCondition('');
            } else {
              alert('Ошибка при добавлении задачи: ' + errorMessage);
            }
          } else {
            alert('Произошла ошибка при добавлении задачи.');
          }
      });
  }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить задачу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <ListGroup className='table-list2'>
      <ListGroup.Item className='list-title'>Таблица Students</ListGroup.Item>
      <ListGroup.Item className='list-item'><div >id</div><div className='data-type'>INTEGER</div></ListGroup.Item>
      <ListGroup.Item  className='list-item'><div >Name</div><div className='data-type'>STRING</div></ListGroup.Item>
      <ListGroup.Item  className='list-item'><div >Surname </div><div className='data-type'>STRING</div></ListGroup.Item>
      <ListGroup.Item  className='list-item'><div >Group</div><div className='data-type'>STRING</div></ListGroup.Item>
      <ListGroup.Item  className='list-item'><div >Mark</div><div className='data-type'>STRING</div></ListGroup.Item>
      <ListGroup.Item  className='list-item'><div >Birthday</div><div className='data-type'>DATE</div></ListGroup.Item>
      </ListGroup>
                    <Form.Control className='mt-2 mb-2'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={"Введите Условие"}
                        isInvalid={!!errorDescription}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errorDescription}
                    </Form.Control.Feedback>
                     <Form.Control className='mt-2 mb-2'
                        value={condition}
                        onChange={e => setCondition(e.target.value)}
                        placeholder={"Введите запрос"}
                        isInvalid={!!errorCondition} 
                    />
                    <Form.Control.Feedback type="invalid">
                      {errorCondition}
                    </Form.Control.Feedback>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addTrainer}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
})

export default CreateTrainer;