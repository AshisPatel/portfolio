import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

function Projects(props) {

    const completed = [
        {
            name: "Gripe Support",
            description: "SUPPORT BY GRIPING, GRIPE BY SUPPORTING - THAT'S NOT RIGHT Dx",
            image: ""
        },
        {
            name: "Destressing Homepage",
            description: "Ayyo homie, just chill :3",
            image: ""
        },
        {
            name: "Calorie",
            description: "LET'S GET THIS BREAD BABY, TRACK THOSE CALORIES, TRACK THOSE HANDSSSSSS",
            image: ""
        },
    ];

    const developing = [
        {
            name: "Cozy",
            description: "IT'S LIKE THE DESTRESSING HOME PAGE BUT MORE BALLER? MERN STACKED",
            image: ""
        },
        {
            name: "Some type of way",
            description: "CAN YOU FEEL IT BB?",
            image: ""
        },
        {
            name: "incremental game",
            description: "I am my own problems",
            image: ""
        },
        {
            name: "MONEY MOVES",
            description: "We can make that cash money, lets get this sheet",
            image: ""
        }
    ];

    const [viewCompleted, setViewCompleted] = useState(false);

    const projects = viewCompleted ? completed : developing;

    return (

        <section className="container" id="project-container">
            <div className="star-wrapper" id="sw-1">
                <svg viewBox="0 0 100 100" >
                    <polygon class="star" points="50.67,75.92 21.49,90.13 27.96,58.33 5.43,34.97 37.68,31.3 52.93,2.65 66.39,32.19 98.35,37.84 
                        74.42,59.76 78.92,91.91 	"/>
                </svg>
            </div>

            <div className="star-wrapper " id="sw-2">
                <svg viewBox="0 0 100 100">
                    <polygon class="star" points="50.67,75.92 21.49,90.13 27.96,58.33 5.43,34.97 37.68,31.3 52.93,2.65 66.39,32.19 98.35,37.84 
                        74.42,59.76 78.92,91.91 	"/>
                </svg>
            </div>

            <div className="star-wrapper " id="sw-3">
                <svg viewBox="0 0 100 100">
                    <polygon class="star" points="50.67,75.92 21.49,90.13 27.96,58.33 5.43,34.97 37.68,31.3 52.93,2.65 66.39,32.19 98.35,37.84 
                        74.42,59.76 78.92,91.91 	"/>
                </svg>
            </div>
         

            {
                projects.map((project, index) => {
                    return <ProjectCard project={project} index={index} key={project.name} />
                })
            }

        </section>
    );
}

export default Projects;