import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//! Reacta uygula
document.body.addEventListener('mousemove', function(e) {
  let sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = e.clientX + 'px';
  sparkle.style.top = e.clientY + 'px';
  document.body.appendChild(sparkle);

  setTimeout(() => {
    document.body.removeChild(sparkle);
  }, 1000);
});