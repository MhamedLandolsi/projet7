import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos';
import Fiche from './pages/Fiche';
import Page404 from './pages/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Accueil />} />  
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/fiche-logement/:id" element={<Fiche />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
    <Footer/>
  </React.StrictMode>
);
