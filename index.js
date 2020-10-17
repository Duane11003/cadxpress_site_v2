import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App.js'
import { BrowserRouter } from 'react-router-dom';
import './src/App.css'


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );