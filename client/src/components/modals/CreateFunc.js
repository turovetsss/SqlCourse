import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Row, Col} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Button, Form,} from "react-bootstrap";
import {json} from 'react-router-dom';
import { createFunc, updateFunces} from "../../http/itemAPI";
import './CreateFunc.css'
const CreateFunc= observer(({show, onHide}) =>{

  const[type, setType] = useState('')
  const [value, setValue] = useState('')
  const [script,setScript]=useState('')
  const [description, setDescription] = useState('')
  const [info, setInfo] = useState([])

const addInfo = () => {
  setInfo([...info, {title: '', description: '', number: Date.now()}])
}
const removeInfo = (number) => {
  setInfo(info.filter(i => i.number !== number))
}
const changeInfo = (key, value, number) => {
  setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
}
  const handleDropdownChange = (event) => {
    setType(event.target.value)
  }

  const addFunc = () => {
         createFunc({name: value, description:description,type:type, script:script,info:info}).then(data => {
             setValue('')
             setDescription('')
             setType('')
             setScript('')
             setInfo( JSON.stringify(info))
             onHide()
             alert('Задача добавлена успешно')
             window.location.reload();
         })
    }
// const addFunc = () => {
//      const formData = new FormData();
//      formData.append('type',type)
//      formData.append('name',value)
//      formData.append('description',description)
//      formData.append('script', script)
//      formData.append('info',JSON.stringify(info))
//    createFunc(formData).then(data=> onHide())
//     alert('Задача добавлена успешно')
//     ///window.location.reload();
//  }

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
                       <Form.Control className='mt-2 mb-2'
                        value={script}
                        onChange={e => setScript(e.target.value)}
                        placeholder={"Введите скрипт функции"}
                    />
                    <p>Также нужно добавить пару примеров:</p>
                       <hr/>
                  
                    {/*Characteristics*/}
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
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