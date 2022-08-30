import { useState } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import projects from "./projects";

function Work() {
  return projects.map((project) => (
    <a href={project.url} target="_blank" style={{ textDecoration: 'none' }}>
      <div className="wet">
      <p className="project-header">{project.title}</p>
        <p className="project-projection">{project.description}</p>
      </div>
    </a>
  ));
}

export default Work;
