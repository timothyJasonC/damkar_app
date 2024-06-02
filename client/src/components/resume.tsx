// Resume.js
import React from 'react';
import { IonIcon } from '@ionic/react';
import { bookOutline, briefcaseOutline } from 'ionicons/icons';

const Resume = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon icon={bookOutline} />
          </div>
          <h3 className="h3">Section 1</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Caption/Other</h4>
            <span>Caption/Other</span>
            <p className="timeline-text">Caption/Other</p>
          </li>
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon icon={briefcaseOutline} />
          </div>
          <h3 className="h3">Section 2</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Caption/Other</h4>
            <span>Caption/Other</span>
            <p className="timeline-text">Caption/Other</p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Caption/Other</h4>
            <span>Caption/Other</span>
            <p className="timeline-text">Caption/Other</p>
          </li>
        </ol>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title">Skills</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Skill 1</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Skill 2</h5>
              <data value="50">50%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '50%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Skill 3</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Skill 4</h5>
              <data value="70">70%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '70%' }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Resume;
