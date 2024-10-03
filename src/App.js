import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Profile from './components/Profile/Profile';
import DefaultProfileImage from "./Image/default-avatar-icon-of-social-media-user-vector.jpg"

function App() {
  const [profileImage, setProfileImage] = useState(DefaultProfileImage);

  const handleImageUpload = (imageUrl) => {
    setProfileImage(imageUrl); 
  };

  return (
    <div className="App">
      <Header profileImage={profileImage} />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile onImageUpload={handleImageUpload} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
