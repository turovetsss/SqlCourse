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
  const [errorMessage, setErrorMessage] = useState('');

  const [info, setInfo] = useState([])
  useEffect(() => {
    fetchBookmodule().then(data => course.setBookmodules(data))
}, []);
const addInfo = () => {
    setInfo([...info, { title: "", description: "", imgData: null, number: Date.now() }]);
};

const removeInfo = (number) => {
  setInfo(info.filter(i => i.number !== number))
}
const changeInfo = (key, value, number) => {
  setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
}
const addArticle = () => {
  if(name==''||title==''||course.selectedModule.id==null){
    alert('Все поля должны быть заполнены!')
   
  }
  else{
    const formData = new FormData()
    formData.append('name',name)
    formData.append('title',title)
    formData.append('bookmoduleId', course.selectedModule.id)
    formData.append('setinfo',JSON.stringify(info)) 
    createBookarticle(formData).then(data=> onHide())
    alert('Статья добавлена успешно')
    window.location.reload();
  }
}
const selectFile = (e, number) => {
  const file = e.target.files[0];

  const maxSize = 1 * 1024 * 1024;

  if (file && file.size > maxSize) {
      setErrorMessage('Не больше 1мб.');
      e.target.value = null;
      return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
      const base64 = event.target.result;
      setInfo(info.map(i => i.number === number ? {...i, image: file.name, imgData: base64} : i));
  }
  reader.readAsDataURL(file);
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
                        placeholder={"Введите заголовок"}
                    />
                     <Form.Control className='mt-2 mb-2'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder={"Введите Описание"}
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
                                    placeholder="Введите заголовок"
                                />
                                <textarea  rows="5" cols="33"
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите информацию/примеры"
                                />
                      <input type="file" onChange={(e) => selectFile(e, i.number)} />
                      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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
});

export default CreateArticle;