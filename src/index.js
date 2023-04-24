import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './context/authContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </UserProvider>
);
