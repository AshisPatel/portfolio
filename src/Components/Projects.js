import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

function Projects(props) {

    const completed = [
        {
            name: "Gripe Support",
            technology: "Sequelize, Handlebars, Express, Node",
            description: "Gripe support was designed as a space where one could gripe or support other user's anonymously. Visitors can create an account that will allow them to make posts (categorized as a gripe or an encouragement). Additionally, user's can 'hug' and comment on posts.",
            image: "gs",
            website: "https://infinite-bayou-42393.herokuapp.com/",
            github: "https://github.com/wsbousman/Gripe-Support"
        },
        {
            name: "Gripe Support",
            technology: "Sequelize, Handlebars, Express, Node",
            description: "Gripe support was designed as a space where one could gripe or support other user's anonymously. Visitors can create an account that will allow them to make posts (categorized as a gripe or an encouragement). Additionally, user's can 'hug' and comment on posts.",
            image: "gs",
            website: "https://infinite-bayou-42393.herokuapp.com/",
            github: "https://github.com/wsbousman/Gripe-Support"
        },
        {
            name: "Gripe Support",
            technology: "Sequelize, Handlebars, Express, Node",
            description: "Gripe support was designed as a space where one could gripe or support other user's anonymously. Visitors can create an account that will allow them to make posts (categorized as a gripe or an encouragement). Additionally, user's can 'hug' and comment on posts.",
            image: "gs",
            website: "https://infinite-bayou-42393.herokuapp.com/",
            github: "https://github.com/wsbousman/Gripe-Support"
        },
        {
            name: "Gripe Support",
            technology: "Sequelize, Handlebars, Express, Node",
            description: "Gripe support was designed as a space where one could gripe or support other user's anonymously. Visitors can create an account that will allow them to make posts (categorized as a gripe or an encouragement). Additionally, user's can 'hug' and comment on posts.",
            image: "gs",
            website: "https://infinite-bayou-42393.herokuapp.com/",
            github: "https://github.com/wsbousman/Gripe-Support"
        },
        {
            name: "Gripe Support",
            technology: "Sequelize, Handlebars, Express, Node",
            description: "Gripe support was designed as a space where one could gripe or support other user's anonymously. Visitors can create an account that will allow them to make posts (categorized as a gripe or an encouragement). Additionally, user's can 'hug' and comment on posts.",
            image: "gs",
            website: "https://infinite-bayou-42393.herokuapp.com/",
            github: "https://github.com/wsbousman/Gripe-Support"
        },
        {
            name: "Gripe Support",
            technology: "Sequelize, Handlebars, Express, Node",
            description: "Gripe support was designed as a space where one could gripe or support other user's anonymously. Visitors can create an account that will allow them to make posts (categorized as a gripe or an encouragement). Additionally, user's can 'hug' and comment on posts.",
            image: "gs",
            website: "https://infinite-bayou-42393.herokuapp.com/",
            github: "https://github.com/wsbousman/Gripe-Support"
        }
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

    const [viewCompleted, setViewCompleted] = useState(true);

    const projects = viewCompleted ? completed : developing;

    return (
        <div id="project-container">
            <div className="outter-sbox">
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
            </div>
           
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