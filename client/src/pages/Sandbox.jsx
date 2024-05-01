import React from 'react';
import { Navbarr } from "../components/Navbarr";
import './css/Sandbox.css'
export const Sandbox = () => {
    
  return(
    <>  <Navbarr />
   <div className='sandbox'>
     <div className='task'>    <button className='btn-back'>back</button> task</div>
     <div className="code-editor">
   <div className="editor">editor</div>
   <div className="outpud">outpud</div>
   </div>
   <div className="table1">table</div>
   </div></>
  )
}
