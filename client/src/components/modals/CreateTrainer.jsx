import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {observer} from "mobx-react-lite";
import {Button, Form} from "react-bootstrap";
import { createTrainer} from "../../http/itemAPI";
import './CreateFunc.css'
const CreateTrainer= observer(({show, onHide}) =>{
  const [solution, setSolution] = useState('')
  const [description, setDescription] = useState('')


  const addTrainer = () => {
      createTrainer({solution: solution, description:description}).then(data => {
          setSolution('')
          setDescription('')
          onHide()
          alert('Задача добавлена успешно')
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
                        placeholder={"Введите описание"}
                    />
                     <Form.Control className='mt-2 mb-2'
                        value={solution}
                        onChange={e => setSolution(e.target.value)}
                        placeholder={"Введите Описание "}
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