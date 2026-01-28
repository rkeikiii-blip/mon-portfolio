import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './Portfolio';
import './index.css'; // si tu as du CSS global Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
