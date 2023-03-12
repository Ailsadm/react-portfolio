import React from "react";
import Projects from '../Projects/Projects';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Route, Routes } from 'react-router-dom';
import projects from "../../../projects.json";
import "./style.css";


function ProjectGallery() {
  return (
    <div>
      <h1>Project Gallery</h1>
      <div className="wrapper">
      {projects.map(project => (
      <Projects key={project.id} {...project}></Projects>
      ))}

       <Routes>
        <Route path="projects" element={<Projects />} />
       </Routes>
    </div>
    </div>
    
  );
}

export default ProjectGallery;
