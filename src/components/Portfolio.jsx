import React from 'react';
import img2 from '../assets/image.png';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2>Portfolio</h2>
        <br />
        <br />
        <div className="portfolio-content">
          <div className="portfolio-image">
            <img src={img2} alt="Portfolio Work" />
          </div>
        <div className="portfolio-boxes">
          <div className="box">
            <h3>Job Searching Website</h3>
            <p>A full-stack project using Node.js and SQL to create a responsive and user-friendly job search platform with functionalities like job listings, search filters, and user authentication.
            </p>
          </div>
          <div className="box">
            <h3>Speech Emotion Recognition</h3>
            <p>A machine learning project focused on identifying emotions in speech using AI and ML algorithms. This project involved data preprocessing, feature extraction, and model training to classify emotions effectively.</p>
          </div>
          <div className="box">
            <h3>Weather App</h3>
            <p>A React-based weather application that fetches real-time weather data from an API. The app displays current conditions, forecasts, and is fully responsive across devices.</p>
          </div>
          <div className="box">
            <h3>Simon Says Game</h3>
            <p>An interactive game developed with JavaScript, featuring a responsive design and intuitive UI. The game tests users' memory skills by challenging them to follow color patterns that get progressively more complex.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Portfolio;
