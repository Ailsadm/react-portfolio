import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import ProjectGallery from './components/pages/ProjectGallery/ProjectGallery';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          <Route path="/react-portfolio" element={<Home />} />
          <Route path="/react-portfolio/about" element={<About />} />
          <Route path="/react-portfolio/projectgallery" element={<ProjectGallery />} />
          <Route path="/react-portfolio/contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

