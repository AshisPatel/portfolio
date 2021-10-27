import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import completedProjects from "../assets/data/completedProjects";
import developingProjects from "../assets/data/developingProjects";

function Projects(props) {

    const completed = completedProjects;

    const developing = developingProjects;

    const [viewCompleted, setViewCompleted] = useState(true);

    const projects = viewCompleted ? completed : developing;

    return (
        <div id="project-container">
            <div class="row mb-5">
                <div className="offset-7 col-4 text-center px-3 pb-2 mt-2" id="project-section-title">My Projects</div>
            </div>
            
            {/* <div className="outter-sbox">
                <div className="star-wrapper" id="sw-1">
                    <svg viewBox="0 0 100 100" >
                        <polygon class="star" points="50.67,75.92 21.49,90.13 27.96,58.33 5.43,34.97 37.68,31.3 52.93,2.65 66.39,32.19 98.35,37.84 
                                74.42,59.76 78.92,91.91 	"/>
                    </svg>
                </div>
            </div>
         

            <div className="star-wrapper " id="sw-2">
                <svg viewBox="0 0 100 100">
                    <polygon class="star" points="50.67,75.92 21.49,90.13 27.96,58.33 5.43,34.97 37.68,31.3 52.93,2.65 66.39,32.19 98.35,37.84 
                            74.42,59.76 78.92,91.91 	"/>
                </svg>
            </div>

            <div className="star-wrapper" id="sw-3">
                <svg viewBox="0 0 100 100">
                    <polygon class="star" points="50.67,75.92 21.49,90.13 27.96,58.33 5.43,34.97 37.68,31.3 52.93,2.65 66.39,32.19 98.35,37.84 
                            74.42,59.76 78.92,91.91 	"/>
                </svg>
            </div> */}
           
            <section className="container" >

                {
                    projects.map((project, index) => {
                        return <ProjectCard project={project} index={index} key={project.name} />
                    })
                }

            </section>
        </div>
    );
}

export default Projects;