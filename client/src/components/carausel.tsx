// Carousel.js
import React from 'react';
import { IonIcon } from '@ionic/react';
import { eyeOutline } from 'ionicons/icons';

const Carousel = () => {
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Gallery</h2>
      </header>
      <section className="projects" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="filter-list" style={{ display: 'flex', gap: '10px' }}>
          <div className="filter-item">
            <button className="active" data-filter-btn>All</button>
          </div>
          <div className="filter-item">
            <button data-filter-btn>Design</button>
          </div>
          <div className="filter-item">
            <button data-filter-btn>Photos</button>
          </div>
        </div>
        <div className="project-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div className="project-item active" data-filter-item data-category="design">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>
                <img src="./pict/logo-1-color.png" alt="design" loading="lazy" />
              </figure>
              <h3 className="project-title">Fire Truck Design</h3>
              <p className="project-category">Design</p>
            </a>
          </div>
          <div className="project-item active" data-filter-item data-category="design">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>
                <img src="./pict/logo-2-color.png" alt="design" loading="lazy" />
              </figure>
              <h3 className="project-title">Mobile App</h3>
              <p className="project-category">Design</p>
            </a>
          </div>
          <div className="project-item active" data-filter-item data-category="photos">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>
                <img src="./pict/logo-3-color.png" alt="design" loading="lazy" />
              </figure>
              <h3 className="project-title">City Night</h3>
              <p className="project-category">Photos</p>
            </a>
          </div>
          <div className="project-item active" data-filter-item data-category="design">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>
                <img src="./pict/logo-4-color.png" alt="design" loading="lazy" />
              </figure>
              <h3 className="project-title">Web Design</h3>
              <p className="project-category">Design</p>
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Carousel;
