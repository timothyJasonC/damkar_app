// About.js
import React from 'react';

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About Damkar.net</h2>
      </header>
      <section className="about-text">
        <p>Sekian..............</p>
        <p>Sekiun...........................................</p>
      </section>
      <section className="service">
        <h3 className="h3 service-title">Service</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-design.svg" alt="design icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Service 1</h4>
              <p className="service-item-text">Deskripsi</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Service 2</h4>
              <p className="service-item-text">Deskripsi</p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
