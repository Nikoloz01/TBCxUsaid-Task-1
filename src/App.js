import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Assignment3 from './components/Assignment3/Assignment3'; // Import Assignment3

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/assignment-3" element={<Assignment3 />} /> {/* Add Route */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
