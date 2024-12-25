import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './sections/AboutMe.jsx';
import Portfolio from './sections/Portfolio.jsx';
import Contact from './sections/Contact.jsx';
import Resume from './sections/Resume.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;