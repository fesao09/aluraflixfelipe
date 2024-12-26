<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/Globalstyles';
=======
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 8d5f6d74b596a7066b773a80e0861a9124bfecdf

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

=======
    <BrowserRouter> {/* Certifique-se de que o BrowserRouter esteja aqui */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
>>>>>>> 8d5f6d74b596a7066b773a80e0861a9124bfecdf
