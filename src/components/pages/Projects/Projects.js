import React from "react";
import "./style.css";

// import projects from "../../../projects.json"


// styles{
//   style="width: 18rem;"
// }

function Projects({name, image, link, githublink}) {
  return (
    <div >
    <div className="cardedit">
        <img src={image} className="card-img-top card__image"></img>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Web development project. Please click the links below for the deployed site and code on Github</p>
            <a href={link} className="btn btn-edit">Deployed Site</a>
            <a href={githublink} className="btn btn-edit">GitHub Link</a>
          </div>
      </div>
    </div>
    
  );
}

export default Projects;
