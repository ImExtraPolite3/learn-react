import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import GreetUser from './greeting.jsx';
import FavFoods from './favFoods.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GreetUser />
    <App />
    <FavFoods />
  </React.StrictMode>
);
