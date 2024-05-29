import React, { useState, useRef, useEffect } from 'react';
import { Navbarr } from "../components/Navbarr";
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
      <div className="code-editor">
        <textarea 
          ref={codeRef} 
          value={sqlCode} 
          onChange={handleCodeChange} 
          placeholder="Введите SQL-запрос" 
        />
        <button  className='button-sql'onClick={executeQuery}>Выполнить</button>
      </div>
      <div className="output">
        {output}
      </div>
    </div>
    </>
  );
};
