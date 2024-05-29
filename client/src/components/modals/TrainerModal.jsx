import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {observer} from "mobx-react-lite";
import {Button, Form} from "react-bootstrap";
import './CreateFunc.css'
export const TrainerModal= observer(({show, onHide}) =>{

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
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
})

export default TrainerModal;