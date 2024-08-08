import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import './styles/header.scss';
import "./styles/home.scss";
import Home from './components/Home';
import Footer from './components/Footer';
import './styles/footer.scss';
import Contact from './components/Contact';
import './styles/contact.scss';
import Services from './components/Services';
import './styles/media.scss';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />     
        <Route path="/services" element={<Services/>} />     
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
