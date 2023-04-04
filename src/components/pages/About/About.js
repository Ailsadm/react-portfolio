import React from "react";
import "./style.css";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p className="aboutP">
        A motivated and passionate developer with a strong foundation in
        computer science principles and experience in front-end web development.
        Proficient in HTML, CSS and JavaScript, with a keen interest in learning
        new technologies and solving complex problems. Looking to join a team
        where I can continue to grow and make meaningful contributions. As a
        Technologist I have developed a strong attention to detail and I am
        excited to bring my skills and experience to a new field. My combination
        of technical aptitude and strong work ethic will make me a valubale
        assest to any team. I am eager to persue my interest in web development
        and follow my enthusiasm for learning and solving new problems.
      </p>
      <ul className="aboutUL"><h2 className="title">Skills:</h2> 
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML</li>
        <li>Node.js</li>
      </ul>
    </div>
  );
}

export default About;
