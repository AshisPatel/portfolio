import React from "react";

function ProjectCard({ project, index }) {
    const { name, description, image } = project; 

    const position = index % 2 === 0 ? "row justify-content-start" : "row justify-content-end"

    return (
        <article className={`${position} projectCard`}>
            <div className="col-6">
                <h3>Temp Project Title</h3>
                <p>Temporary Project Description</p>
            </div>
        </article>
    );
}

export default ProjectCard; 