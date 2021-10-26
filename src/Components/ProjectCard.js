import React, {useState} from "react";

function ProjectCard({ project, index }) {

    const [isHovered, setIsHovered] = useState(false); 

    const { name, description, image } = project; 

    const position = index % 2 === 0 ? "row justify-content-start" : "row justify-content-end"

    return (
        <article className={`${position}`}>
            <div className="col-6 projectCard mb-5" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

                {
                    isHovered ? 
                    <div className="project-info p-3">
                        <h3 className="font-load">{name}</h3>
                        <p className="font-load">{description}</p>
                    </div> :
                    <img
                        src={require(`../assets/images/gs.jpg`).default}
                        alt=""
                        className = "project-image"
                    />

                }
                
                
            </div>
        </article>
    );
}

export default ProjectCard; 