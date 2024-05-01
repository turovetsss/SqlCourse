import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserCourse from './course/UserCourse';
import CourseCourse from './course/Course';
export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Context.Provider value={{
    user: new UserCourse(),
    course: new CourseCourse(),
  }}>
 <App />
  </Context.Provider>
 
);
