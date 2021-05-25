import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// /simport reportWebVitals from './reportWebVitals';
import  Render from  './Render'
import Lola from './App'

import Signup from './Signup'
// import './Signup.css'
// import Login from './Login'

// import Fruit  from fruit/



ReactDOM.render(
  <React.StrictMode>
     <Lola/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();//