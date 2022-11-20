import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles/style.scss'
import Header from './components/Header';
import Footer from './components/Footer';

import Accueil from './pages/Home'
import Apropos from './pages/Apropos';
import Fiche from './pages/Fiche';
import Page404 from './pages/Page404';
import {  GlobalProvider } from './utils/GlobalScope';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalProvider>
      <main>
        <Router>
          <Header />
          <Routes>
            <Route end path="/" element={<Accueil />} />
            <Route end path="/a-propos" element={<Apropos />} />
            <Route path="/fiche-logement/:id" element={<Fiche />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </GlobalProvider>
  </React.StrictMode>
);
