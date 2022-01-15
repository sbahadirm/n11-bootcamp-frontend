import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL="http://localhost:8080/";
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0MSIsImlhdCI6MTY0MjIzNDU0MSwiZXhwIjoxNjQyMzIwOTQxfQ.WlLFz_w4-Mjk-89_sYTxF_DgbYN3UaMAwbJGPqs29rIMmYf--GPSLkXceESL_WWhB2nlPcuT812zpkZIhH1h5w'
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
