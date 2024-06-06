import React, { useState, useRef, useEffect } from 'react';
import { Navbarr } from "../components/Navbarr";
import { Card, ListGroup ,ListGroupItem} from 'react-bootstrap';
import './css/Sandbox.css'
export const Sandbox = () => {
  const [sqlCode, setSqlCode] = useState('');
  const [output, setOutput] = useState('');
  const codeRef = useRef(null);

  const handleCodeChange = (e) => {
    setSqlCode(e.target.value);
  };

  const executeQuery = async () => {
    try {
      const response = await fetch('http://localhost:7000/api/students/sandbox', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: sqlCode })
      });
     
      if (!response.ok) {
        const error = await response.json();
        setOutput(error.message);
        return;
      }

      const data = await response.json();
      const tableData = data.map((row, index) => (
        <tr key={index}>
          {Object.entries(row).map(([key, value]) => (
            <td key={key}>{value}</td>
          ))}
        </tr>
      ));

      setOutput(
        <table className="result-table">
          <thead>
            <tr>
              {Object.keys(data[0] || {}).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </table>
      );
    } catch (error) {
      setOutput(error.toString());
    }
  };

  useEffect(() => {
    codeRef.current.focus();
  }, []);

  return (
    <>
    <Navbarr></Navbarr>
  <div className="sandbox-container">
    <div className='ehehe'>
     <div className="code-editor">
        <div className="editor-container">
          <textarea
            ref={codeRef}
            value={sqlCode}
            onChange={handleCodeChange}
            placeholder="Введите SQL-запрос"
          />
          <button className='button-sql' onClick={executeQuery}>Выполнить</button>
        </div>
        <div className='output'>
      {output}
    </div>
    </div>
    
    </div>
    <div className='table-cont'>
      <ListGroup className='table-list2'>
      <ListGroup.Item className='list-title'>Таблица Students</ListGroup.Item>
      <ListGroup.Item className='list-item'><div >id</div><div className='data-type'>int</div></ListGroup.Item>
      <ListGroup.Item  className='list-item'><div >Name</div><div className='data-type'>int</div></ListGroup.Item>
      <ListGroup.Item  className='list-item'><div >Surname </div><div className='data-type'>int</div></ListGroup.Item>
      <ListGroup.Item  className='list-item'><div >Group</div><div className='data-type'>int</div></ListGroup.Item>
      <ListGroup.Item  className='list-item'><div >Mark</div><div className='data-type'>int</div></ListGroup.Item>
      <ListGroup.Item  className='list-item'><div >Birthday</div><div className='data-type'>int</div></ListGroup.Item>
      </ListGroup>
      <ListGroup className='table-list2'>
      <ListGroup.Item className='list-title'>        <h4 className='title3'> Доступные запросы:</h4></ListGroup.Item>
      <ListGroup.Item className='list-item'>SELECT  </ListGroup.Item>
      <ListGroup.Item  className='list-item'>UPDATE </ListGroup.Item>
      <ListGroup.Item  className='list-item'>DELETE</ListGroup.Item>
      <ListGroup.Item  className='list-item'>INSERT</ListGroup.Item>
      </ListGroup>
    </div>
    
  </div>
  </>
  );
};
