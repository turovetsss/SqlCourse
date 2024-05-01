import React, {useState,useContext,useEffect} from 'react';
import Modal from "react-bootstrap/Modal";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {Button, Form,Dropdown, DropdownItem} from "react-bootstrap";
import { createFunc,fetchFunc} from "../../http/itemAPI";
import './CreateFunc.css'
const CreateFunc= observer(({show, onHide}) =>{
  const[type, setType] = useState('')
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')

  const handleDropdownChange = (event) => {
    setType(event.target.value)
  }

  const addFunc = () => {
      createFunc({name: value, description:description,type:type}).then(data => {
          setValue('')
          setDescription('')
          setType('')
          onHide()
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
                    Добавить функцию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                  <label htmlFor="select">Выберите раздел</label>
                <select className='select-option' onChange={handleDropdownChange}>
  <option value="Основное">Основное</option>
  <option value="Строки">Строки</option>
  <option value="математика">Математика</option>
  <option value="Даты">Даты</option>
  <option value="Объединения">Объединения</option>
</select>
                    <Form.Control className='mt-2 mb-2'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название функции"}
                    />
                     <Form.Control className='mt-2 mb-2'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={"Введите Описание функции"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addFunc}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
})

export default CreateFunc;