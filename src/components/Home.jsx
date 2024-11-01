import React from 'react';
import img1 from '../assets/profile.jpg';

const Home = () => {
  return (
    <section id="home" className="section">
      <div className="container">
        <img src={img1} alt="Aaditya Sharma" className="profile-image" />
          <div class = "text-overlay">
            <h1>Aaditya Sharma</h1>
            <p>Web Designer &<br></br> Software Developer</p>
          </div>
      </div>
    </section>
  );
};

export default Home;
