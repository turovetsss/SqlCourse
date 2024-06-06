import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {observer} from "mobx-react-lite";
import {Button, Form} from "react-bootstrap";
import { createTask} from "../../http/itemAPI";
import './CreateFunc.css'
const CreateTrainer= observer(({show, onHide}) =>{
  const [condition, setCondition] = useState('')
  const [description, setDescription] = useState('')


  const addTrainer = () => {
      createTask({description:description,condition:condition}).then(data => {
          setCondition('')
          setDescription('')
          onHide()
          alert('Ваш результат записан,Задача добавлена успешно')
          window.location.reload();
      })
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
                
                    <Form.Control className='mt-2 mb-2'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={"Введите Условие"}
                    />
                     <Form.Control className='mt-2 mb-2'
                        value={condition}
                        onChange={e => setCondition(e.target.value)}
                        placeholder={"Введите Решение"}
                    />
                    
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