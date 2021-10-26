import React, { useState } from "react";

function ProjectCard({ project, index }) {

    const [isHovered, setIsHovered] = useState(false);

    const { name, technology, description, image, website, github } = project;

    const position = index % 2 === 0 ? "" : "offset-md-4"

    return (
        <article className="row">
            <div className={`col-12 col-md-8 ${position} projectCard mb-5 mt-4`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

                {
                    isHovered ?
                        <div className="project-info p-3 d-flex flex-column">
                            <h3 className="load-in">{name}</h3>
                            <h6 className="load-in fst-italic mb-3">{technology}</h6>
                            <p className="load-in">{description}</p>
                            <div className="d-flex load-in justify-content-end mt-auto mb-2">
                                <a href={github} className="icon-link" target="_blank"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="bi bi-github github-icon">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                                <span className="me-3"></span>
                                <a href={website} className="icon-link" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-file-post website-icon" viewBox="0 0 16 16">
                                        <path d="M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8z" />
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                    </svg>
                                </a>
                            </div>
                        </div> :
                        <img
                            src={require(`../assets/images/${image}.png`).default}
                            alt=""
                            className="project-image"
                        />

                }


            </div>
        </article>
    );
}

export default ProjectCard;