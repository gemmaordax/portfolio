import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter

ReactDOM.render(
  <BrowserRouter> {/* Envuelve tu aplicación con BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
