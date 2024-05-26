import React, {useContext, useEffect,useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Row, Col,Dropdown} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Button, Form} from "react-bootstrap";
import {Context} from "../../index";
import {fetchBookmodule,createBookarticle} from "../../http/itemAPI.js";
import './CreateFunc.css'
const CreateArticle= observer(({show, onHide}) =>{
  const {course} = useContext(Context)
  const [name, setName] = useState('')
  const [title,setTitle]=useState('')
  const [file,setFile]=useState(null)
  const [info, setInfo] = useState([])
  useEffect(() => {
    fetchBookmodule().then(data => course.setBookmodules(data))
}, [])
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now(), image: "1.jpg" }]);
  };

const removeInfo = (number) => {
  setInfo(info.filter(i => i.number !== number))
}
const changeInfo = (key, value, number) => {
  setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
}

  const addArticle = () => {
    
    const formData = new FormData()
    formData.append('name',name)
    formData.append('title',title)
    formData.append('bookmoduleId', course.selectedModule.id)
    formData.append('setinfo',JSON.stringify(info))
    createBookarticle(formData).then(data=> onHide())
    // alert('Статья добавлена успешно')
    // window.location.reload();
    
}
const selectFile = e => {
  setFile(e.target.files[0])
}
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить статью 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{course.selectedModule.name||"Выберите модуль курса"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {course.bookmodules.map(type =>
                                <Dropdown.Item
                                    onClick={() => course.setSelectedModule(type)}
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
                        placeholder={"Введите название раздела"}
                    />
                     <Form.Control className='mt-2 mb-2'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder={"Введите Описание функции"}
                    />
                       
                     <hr/>
                       {/*Characteristics*/}
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить информацию
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                           
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название"
                                />
                           
                           
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание"
                                />
                      <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
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
                <Button variant="outline-success" onClick={addArticle}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
})

export default CreateArticle;