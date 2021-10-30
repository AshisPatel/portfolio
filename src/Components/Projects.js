import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ListItem from "./ListItem";
import projectData from "../assets/data/projectData";

function Projects(props) {
    // Allow the client to select a tag to see all projects associated with that tag
    const [currentTag,setCurrentTag] = useState('All');

    const tags = ['All','React','Handlebars', 'MongoDB', 'Mongoose', 'Sequelize', 'Express', 'Node', 'Apollo', 'IndexedDB', 'PWA', 'Bootstrap', 'Tailwind CSS', 'PaperCSS', 'SCSS', 'Javascript']

    const projects = currentTag === 'All' ? projectData : projectData.filter(project => project.technology.includes(currentTag))

    return (
        <div id="project-container">
            <div className="mb-5">
                <div className="w-50 px-3 py-2 mt-5" id="project-section-title">
                    <h3>You are currently viewing <span id="current-project-tag">{currentTag}</span> projects.</h3>
                    <h5>Choose another tag if you want, or start scrolling!</h5>
                    <h6>Project Tags:
                        <ul className="no-style-list d-">
                            {
                                tags.map(tag => 
                                    (<button className="tag-btn" key={tag} data-tag={tag}onClick={(e) => setCurrentTag(e.currentTarget.getAttribute('data-tag'))}>
                                        <ListItem info={tag} icon="hashtag" />
                                    </button>)
                                )
                            }
                        </ul>
                    </h6>
                </div>
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