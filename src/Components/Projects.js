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

    const [viewCompleted, setViewCompleted] = useState(true); 


    return (
        <section className="container">
            <ProjectCard project={{name: "name", description: "description", image: ""}} index={1}/>
        </section>
    );
}

export default Projects;