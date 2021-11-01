import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Header(props) {

    const { height, width } = useWindowDimensions();

    // const [location, setLocation] = useState(window.location.pathname);
    const {location, setLocation} = props; 
    const [display, setDisplay] = useState(true);

    const handleClick = (e) => {
        width <= 767 && setDisplay(false);
        const pathName = e.target.getAttribute('href');
        setLocation(pathName);
    }

    useEffect(() => {
        width > 767 ? setDisplay(true) : setDisplay(false);
    }, [width])

    const revealDropdown = () => {
        setDisplay(prevDisplay => !prevDisplay);
    }

    const ulClass = width > 767 ? "d-flex px-auto justify-content-between" : "d-flex flex-column ps-0 mb-0";
    const navLinkPadding = width > 767 ? "mx-1" : "mx-1 my-1"

    return (
        <header className="d-flex justify-content-between pt-2 px-4">

            <h2 id="home" className="ps-md-2 text-center text-md-left">
                Ashis Patel
            </h2>
            <div className="dropdown-container">
                {width <= 767 &&
                    <button className="dropdown-button" onClick={() => revealDropdown()}><FontAwesomeIcon icon={display ? "times" : "bars"} /></button>
                }
                {display &&
                    <nav className={`mt-2 ${width <= 767 && "dropdown p-2"}`}>


                        <ul className={ulClass}>
                            <Link to="/" className={`nav-link ${navLinkPadding} ${location === '/' && "selected-nav-link"}`} onClick={handleClick}><FontAwesomeIcon icon="grin-beam" /> About Me</Link>
                            <Link to="/projects" className={`nav-link ${navLinkPadding} ${location === '/projects' && "selected-nav-link"}`} onClick={handleClick}><FontAwesomeIcon icon="code-branch" /> Projects</Link>
                            <Link to="/contact" className={`nav-link ${navLinkPadding} ${location === '/contact' && "selected-nav-link"}`} onClick={handleClick}><FontAwesomeIcon icon="address-card" /> Contact</Link>
                            <a href={require("../assets/files/apr.pdf").default} target="_blank" rel="noreferrer" className={`nav-link ${navLinkPadding}`}>
                                <FontAwesomeIcon icon="file" /> Resume
                            </a>
                        </ul>

                    </nav>
                }
            </div>
        </header>
    );
}

export default Header;