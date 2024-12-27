import React from 'react';
import '../App.css';

const Resume = () => {
  return (
    <section className="resume-section">
      <header>
        <h1>Resume</h1>
      </header>
        <div className="proficiencies">
          <h2>Proficiencies</h2>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React & Redux</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB & SQL</li>
            <li>Git & GitHub</li>
            <li>Responsive Design</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
    </section>
  );
};

export default Resume;