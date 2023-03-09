import React from "react";
import Projects from './Projects/Projects';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Route, Routes } from 'react-router-dom';
import projects from "../../projects.json";
// import projects from "../../../projects.json";

function ProjectGallery() {
  return (
    <div>
      <h1>Project Gallery</h1>
      {projects.map(project => (
      <Projects key={project.id} {...project}></Projects>
      ))},

      // <Routes>
      //   <Route path="projects" element={<Projects />} />
      // </Routes>
    </div>
    
  );
}

export default ProjectGallery;
