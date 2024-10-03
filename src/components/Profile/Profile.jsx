import React, { useState } from 'react';
import './Profile.css';
import DefaultProfileImage from "../../Image/default-avatar-icon-of-social-media-user-vector.jpg";

const Profile = ({ onImageUpload }) => {
  const [photo, setPhoto] = useState(DefaultProfileImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
      onImageUpload(imageUrl);
    }
  };

  return (
    <div className="profile-page">
      <h1>Profile Information</h1>
      <form className="profile-form">
        <div className="profile-image-container">
          <img src={photo} alt="Profile" className="profile-image-preview" />
          <button
            type="button"
            className="change-button"
            onClick={() => document.querySelector('input[type="file"]').click()}
          >
            Change
          </button>
          <input type="file" onChange={handleImageChange} style={{ display: 'none' }} />
        </div>
        <br />
        <label>
          Name:
          <input type="text" value="Nika" disabled />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value="Khaburzania" disabled />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value="nikakhaburzania18@gmail.com" disabled />
        </label>
      </form>
    </div>
  );
};

export default Profile;
