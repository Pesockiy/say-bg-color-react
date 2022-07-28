import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Register from './Pages/Register'
import Gallery from './Pages/Gallery';
import Countries from './Pages/Screen';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>
    <Routes>
      {/* <Route index element={<App />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/gallery" element={<Gallery />} /> */}
      <Route path="/" element={<Countries />} />
      
    </Routes>
  </BrowserRouter>
);
