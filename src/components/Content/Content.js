import React from 'react';
import './Content.css';
import image from '../../Image/Image-empty-state.jpg';

function Content() {
  return (
    <main className="content">
      <div className="text-section">
        <h1>დავალება #1</h1>
        <p>უპრიმიტიულესი ვებსაიტი</p>
      </div>
      <div className="image-section">
        <div>TBC</div>
        <span>X</span>
        <div>USAID</div>
      </div>
      <h3>React Accelerator: Fast-Track Your Web Development Career</h3>
      <img src={image} alt="Empty state illustration" width="500" height="300" />
    </main>
  );
}

export default Content;
