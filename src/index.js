import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import Chat from './Chat/Chat';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Chat /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

