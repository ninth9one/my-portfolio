import React from 'react';
import ScrollToRefresh from '../functionality/logic.jsx';

const AboutMe = () => {
  return (
    <section>
      <h1>About Me</h1>
      <p>
        My name is Christopher Longsworth, and I am currently honing my skills in software development through the UCF Bootcamp. 
        During this journey, I have been delving into core technologies like JavaScript, SQL, and React, building a solid foundation for my future as a developer. 
        Additionally, I aspire to expand my expertise and become a network engineer someday, blending software development and network management skills.
      </p>
      <ScrollToRefresh />
    </section>
  );
};

export default AboutMe;