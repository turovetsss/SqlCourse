import React, {useContext, useEffect,useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Row, Col,Dropdown} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Button, Form,} from "react-bootstrap";
import {Context} from "../../index";
import {fetchTypes ,createFunc} from "../../http/itemAPI.js";
import './CreateFunc.css'
const CreateFunc= observer(({show, onHide}) =>{
  const {course} = useContext(Context)
  const[type, setType] = useState('')
  const [name, setName] = useState('')
  const [example,setExample]=useState('')
  const [description, setDescription] = useState('')
  const [info, setInfo] = useState([])
  useEffect(() => {
    fetchTypes().then(data => course.setTypes(data))
}, [])
  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
}
const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
}
const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
}

  const addFunc = () => {
    
    const formData = new FormData()
    formData.append('funcType',type)
    formData.append('name',name)
    formData.append('description',description)
    formData.append('example',example)
    formData.append('typeId', course.selectedType.id)
    formData.append('info',JSON.stringify(info))
    createFunc(formData).then(data=> onHide())
    alert('Функция добавлена успешно')
    window.location.reload();
    
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
                   <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{course.selectedType.name||"Выберите раздел функции"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {course.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => course.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className='mt-2 mb-2'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Введите название функции"}
                    />
                     <Form.Control className='mt-2 mb-2'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={"Введите Описание функции"}
                    />
                       <Form.Control className='mt-2 mb-2'
                        value={example}
                        onChange={(e) => setExample(e.target.value)}
                        placeholder={"Введите пример скрипта функции"}
                    />
                     <hr/>
                    <p>Также нужно добавить пару примеров:</p>
                      
                  
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