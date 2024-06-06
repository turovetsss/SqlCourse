import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createBookmodule} from "../../http/itemAPI";

const CreateBookmodule = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')

    const addModule = () => {
      if(value==''||description==''){
        alert('Все поля должны быть заполнены!')
       
      }
      else{
        createBookmodule({name: value,description:description}).then(data => {
          setValue('')
          setDescription('')
          onHide()
          alert('Модуль курса добавлен')
          window.location.reload();
      })
      }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить модуль
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название"}
                    />
                     <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={"Введите информацию"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addModule}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBookmodule;
