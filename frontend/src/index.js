import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "primereact/resources/themes/lara-light-cyan/theme.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/:id' element={<App />} />
          <Route path='*' element={<center><h1>Error 404 - Page not found</h1></center>} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
);