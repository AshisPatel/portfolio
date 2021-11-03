import React, { useEffect, useState, useLayoutEffect } from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../assets/data/projectData";
import tagData from "../assets/data/tagData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects(props) {
    // Allow the client to select a tag to see all projects associated with that tag
    const [selectedTags, setSelectedTags] = useState([]);
    const [renderProjects, setRenderProjects] = useState(false); 
    const [display, setDisplay] = useState(false);

    const tags = tagData; 

    // Checks to see which projects contain all the tags that are in the currentTag state array 
    let projects = selectedTags.length === 0 ? projectData : projectData.filter(project => selectedTags.every(tag => project.technology.includes(tag)));

    const changeTags = (e) => {
        const { name } = e.target;

        if (!selectedTags.includes(name)) {
            setSelectedTags(prevTags => [...prevTags, name]);
        } else {
            setSelectedTags(prevTags => {
                return prevTags.filter(tag => tag !== name);
            });
        }

    }
    // scroll to top of page on page mobile clients, or those with smaller screens. Then, setRenderProjects to true to display the cards, thus preventing any mishaps with the fade-in &
    useLayoutEffect(() => {
       window.scrollTo(0,0);
       setTimeout(() => {
        // insert a loader?   
        setRenderProjects(true); 
       }, 1000);
        
        
    }, []);

    const handleClick = (e) => {
        setDisplay(prevDisplay => !prevDisplay);
    }

    const dropDownBtnText = display ? "Hide Tags" : "Show Tags";
    const dropDownBtnIcon = display ? "chevron-up" : "chevron-down";

    return (
        <div id="project-container">
            <section className="container">
                <div className="mb-5 row">
                    <div className="col-10 offset-1 col-md-12 offset-md-0 px-3 py-2 mt-2 mt-md-5 mb-2 mb-md-5" id="project-section-title">
                        <h3>You are currently viewing <span id="current-project-tag">{selectedTags.length === 0 ? "All" : selectedTags.join(', ')}</span> projects.</h3>
                        <h5>Choose some tags if you want, or start scrolling!</h5>
                        <h5 className="mt-3 ms-1">
                            <button className="button me-2 me-md-3" onClick={handleClick}>
                                {dropDownBtnText} <FontAwesomeIcon icon={dropDownBtnIcon}/>
                            </button>
                            <button className="button" onClick={() => setSelectedTags([])}><FontAwesomeIcon icon="undo"/> Reset Tags</button>
                        </h5>
                        {display && <div className="mt-3 fs-6">
                            {
                                tags.map((tag, index) => {
                                    return (
                                        <label className={`project-tag-${index} m-2 ${selectedTags.includes(tag) ? "tag-checkbox-checked" : "tag-checkbox"} px-1`} key={tag}>
                                            <input
                                                type="checkbox"
                                                name={tag}
                                                checked={selectedTags.includes(tag)}
                                                onChange={changeTags}
                                            /> <FontAwesomeIcon icon="hashtag" /> {tag}
                                        </label>
                                    )
                                })
                            }
                        </div>}
                    </div>
                    {projects.length === 0 && <div className="project-conditional col-10 offset-1 col-md-6 offset-md-3 fs-1 mx-auto p-5 text-center my-5"> No projects just <FontAwesomeIcon icon="cat"/> <FontAwesomeIcon icon="cat"/> <FontAwesomeIcon icon="cat"/></div>}
                    {!renderProjects && 
                        <div className="d-flex mx-auto my-5 loader"></div>
                    }
                 
                </div>
              
            </section>

            <section className="container" >

                {renderProjects &&
                    projects.length > 0 &&
                    projects.map((project, index) => {
                        // key has to be index, or something that changes upon editing the tags thus forcing the project cards to remount
                        return <ProjectCard project={project} index={index} projects={projects} key={index} />
                    })

                }

            </section>
        </div>
    );
}

export default Projects;