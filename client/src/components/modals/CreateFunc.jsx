import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {observer} from "mobx-react-lite";
import {Button, Form,} from "react-bootstrap";
import { createFunc} from "../../http/itemAPI";
import './CreateFunc.css'
const CreateFunc= observer(({show, onHide}) =>{
  const[type, setType] = useState('')
  const [value, setValue] = useState('')
  const [script,setScript]=useState('')
  const [example1Info,setExample1Info]=useState('')
  const [example2Info,setExample2Info]=useState('')
  const [example1,setExample1]=useState('')
  const [example2,setExample2]=useState('')
  const [description, setDescription] = useState('')

  const handleDropdownChange = (event) => {
    setType(event.target.value)
  }

  const addFunc = () => {
      createFunc({name: value, description:description,type:type, script:script,example1Info:example1Info,example1:example1,example2Info:example2Info,example2 :example2}).then(data => {
          setValue('')
          setDescription('')
          setType('')
          setScript('')
          setExample1Info('')
          setExample1('')
          setExample2Info('')
          setExample2('')
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
                    <Form.Control className='mt-2 mb-2'
                        value={example1Info}
                        onChange={e => setExample1Info(e.target.value)}
                        placeholder={"Введите "}
                    />
                     <Form.Control className='mt-2 mb-2'
                        value={example1}
                        onChange={e => setExample1(e.target.value)}
                        placeholder={"Введите пример 1"}
                    />
                       <Form.Control className='mt-2 mb-2'
                        value={example2Info}
                        onChange={e => setExample2Info(e.target.value)}
                        placeholder={"Введите "}
                    />
                     <Form.Control className='mt-2 mb-2'
                        value={example2}
                        onChange={e => setExample2(e.target.value)}
                        placeholder={"Введите пример 2"}
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