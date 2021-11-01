import React, { useState } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Header(props) {

    const { height, width } = useWindowDimensions();
    console.log(window.location.pathname);
    const [location, setLocation] = useState(window.location.pathname);

    const handleClick = (e) => {
       const pathName = e.target.getAttribute('href');
       setLocation(pathName);
    }

    return (
        <header className="d-md-flex justify-content-between pt-2">

            <h2 id="home" className="ps-md-2 text-center text-md-left">
                Ashis Patel
            </h2>

            <nav className="mt-2">
                <ul className="d-flex px-auto justify-content-between">
                    <Link to="/" className={`nav-link ${location === '/' && "selected-nav-link"}`} onClick={handleClick}><FontAwesomeIcon icon="grin-beam" /> About Me</Link>
                    <Link to="/projects" className={`nav-link ${location === '/projects' && "selected-nav-link"}`} onClick={handleClick}><FontAwesomeIcon icon="code-branch" /> Projects</Link>
                    <Link to="/contact" className={`nav-link ${location === '/contact' && "selected-nav-link"}`} onClick={handleClick}><FontAwesomeIcon icon="address-card" /> Contact</Link>
                    <a href={require("../assets/files/apr.pdf").default} target="_blank" rel="noreferrer" className="nav-link me-2">
                        <FontAwesomeIcon icon="file" /> Resume
                    </a>
                </ul>
            </nav>
        </header>
    );
}

export default Header;