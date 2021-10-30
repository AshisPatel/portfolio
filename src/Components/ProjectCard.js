import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectCard({ project, index }) {

    const cardRef = useRef(null);
    const [show, setShow] = useState(false);
    const [isHidden, setIsHidden] = useState(true); 
    // useLayoutEffect instead of useEffect, to ensure that refs will not be undefined
    useLayoutEffect(() => {
        // grabs the distance from the referenced element to the top of the viewport
        const topPosition = cardRef.current.getBoundingClientRect().top;
        const bottomPosition = cardRef.current.getBoundingClientRect().bottom; 


        const onScroll = () => {
            setIsHidden(false); 
            const scrollPosition = window.scrollY + window.innerHeight;
            // Check to see if the distance from the top of the viewport is less than the total viewport height + the number of pixels that the document is currently scrolled vertically
            // first conditional catches when the object gets scrolled past (mid point on the way down)
            // second conditional checks when the object comes into view when scrolling down
            // third conditional is primarily for the final project card in which the card needs to dissapear when scrolled out of view

            if(topPosition < window.scrollY) {
                setShow(false);
                return; 
            } else if(topPosition < scrollPosition) {
                setShow(true);
                return; 
            } else if (topPosition > scrollPosition) {
                setShow(false); 
            }

            // if(topPosition < window.scrollY) {
            //     setShow(false); 
            // }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // useEffect(() => {
    //     setIsHidden(true); 
    // }, []);

    // check for first project 
    // const isFirst = (index) => {

    //     index === 0 ?

    // }



    const [isHovered, setIsHovered] = useState(false);

    const { name, technology, description, image, website, github } = project;

    const position = index % 2 !== 0 ? "" : "offset-md-7"

    return (
        <article className="negative-margin row" ref={cardRef}>
            <div className={`col-12 col-md-5 ${position} projectCard ${show ? ( index % 2 === 0 ? "slide-right" : "slide-left") : (index % 2 === 0 ? "slide-out-right" : "slide-out-left")} ${isHidden? "hidden" : ""}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

                {
                    isHovered ?
                        <div className="project-info p-3 d-flex flex-column">
                            <h3 className="load-in">{name}</h3>
                            <h6 className="load-in fst-italic mb-3">{technology}</h6>
                            <p className="load-in">{description}</p>
                            <div className="d-flex load-in justify-content-end mt-auto mb-2">
                                <a href={github} className="icon-link" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="bi bi-github github-icon">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                                <span className="me-3"></span>
                                <a href={website} className="icon-link" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-file-post website-icon" viewBox="0 0 16 16">
                                        <path d="M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8z" />
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                    </svg>
                                </a>
                            </div>
                        </div> :
                        <div>
                            <div className="d-flex flex-row justify-content-center py-5">
                                <h2>{name}</h2>
                            </div>

                            <div className="d-flex flex-row justify-content-center">
                                <FontAwesomeIcon icon={image} size="8x" />
                            </div>
                        </div>

                }


            </div>
        </article>
    );
}

export default ProjectCard;