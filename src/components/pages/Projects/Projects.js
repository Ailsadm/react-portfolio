import React from "react";
import "./style.css";
// import projects from "../../../projects.json"


// styles{
//   style="width: 18rem;"
// }

function Projects({name, image, link, githublink}) {
  return (
    <div>
      <div class="card" >
        <img src={image} class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href={link} class="btn btn-primary">Deployed Site</a>
            <a href={githublink} class="btn btn-primary">GitHub Link</a>
          </div>
      </div>
    </div>
  );
}

export default Projects;
