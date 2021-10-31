import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../assets/data/projectData";

function Projects(props) {
    // Allow the client to select a tag to see all projects associated with that tag
    const [selectedTags, setSelectedTags] = useState([]);

    const tags = ['React', 'Handlebars', 'MongoDB', 'Mongoose', 'Sequelize', 'Express', 'Node', 'Apollo', 'IndexedDB', 'PWA', 'Bootstrap', 'Tailwind CSS', 'PaperCSS', 'SCSS', 'Javascript']

    // Checks to see which projects contain all the tags that are in the currentTag state array 
    const projects = selectedTags.length === 0 ? projectData : projectData.filter(project => selectedTags.every(tag => project.technology.includes(tag)));

    // useEffect(() => {
    //     console.log(selectedTags);
    //     console.log(...selectedTags);
    //     console.log(projects);
    // }, [selectedTags]);

    const changeTags = (e) => {
        const { name } = e.target;

        const indexToRemove = selectedTags.indexOf(name);

        if (indexToRemove === -1) {
            setSelectedTags(prevTags => [...prevTags, name]);
        } else {
            setSelectedTags(prevTags => {
               return prevTags.filter(tag => tag !== name);
            });
        }

    }

    return (
        <div id="project-container">
            <div className="mb-5">
                <div className="w-50 px-3 py-2 mt-5" id="project-section-title">
                    <h3>You are currently viewing <span id="current-project-tag">{selectedTags.length === 0 ? "All" : selectedTags.join(', ')}</span> projects.</h3>
                    <h5>Choose another tag if you want, or start scrolling!</h5>
                    <h6>Project Tags:</h6>
                    <div className="mt-3 fs-6">
                        {
                            tags.map(tag => {
                                return (
                                    <label className="mx-2 tag-checkbox">
                                        <input
                                            type="checkbox"
                                            name={tag}
                                            checked={selectedTags.includes(tag)}
                                            onChange={changeTags}
                                        />  {tag}
                                    </label>
                                )
                            })
                        }
                    </div>
                </div>
                {projects.length === 0 && <div>There are no projects associated with these tags.</div>}
            </div>

            <section className="container" >

                {
                    projects.length > 0 &&
                    projects.map((project, index) => {
                        return <ProjectCard project={project} index={index} projects={projects} key={project.name} />
                    })

                }

            </section>
        </div>
    );
}

export default Projects;