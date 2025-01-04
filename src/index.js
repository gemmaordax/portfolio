import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { LanguageProvider } from "./context/LanguageContext";

ReactDOM.render(

  <BrowserRouter> 
    <LanguageProvider>
    <App />
    </LanguageProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


