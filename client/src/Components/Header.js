import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Header(props) {

    
    const { height, width } = useWindowDimensions();
    const { location, setLocation } = props;
    const [display, setDisplay] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const transitionWidth = 768;

    const handleClick = (e) => {
        width <= transitionWidth && setDisplay(false);
        const pathName = e.target.getAttribute('href');
        setLocation(pathName);
    }

    useEffect(() => {
        width > transitionWidth ? setDisplay(true) : setDisplay(false);
    }, [width])

    const revealDropdown = () => {
        setDisplay(prevDisplay => !prevDisplay);
    }

    const ulClass = width > transitionWidth ? "d-flex px-auto justify-content-between" : "d-flex flex-column ps-0 mb-0 dropdown-list";
    const navLinkPadding = width > transitionWidth ? "mx-1" : "mx-1 my-1"

    const firstLetter = "<A";
    const firstName = "shis";
    const lastLetter = "P"
    const lastName = "atel"
    const endBracket = ">";

    return (
        <header className="d-flex justify-content-between pt-2 px-4">

            <Link to="/" onClick={handleClick}>
                <h2 id="home" className="ps-md-2 text-center text-md-left">
                    <div className="d-flex" id="logo-wrapper" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <span id="first-initial" className={isHovered ? "move-left" : undefined}>{firstLetter}
                            {isHovered && <span id="first-name">{firstName}</span>}
                        </span>
                        <span id="slash">/</span>
                        <span id="last-initial">{lastLetter}
                            {isHovered && <span id="last-name">{lastName}</span>}
                        </span>
                        <span id="end-bracket" className={isHovered ? "move-right" : undefined}>{endBracket}</span>
                    </div>
                </h2>
            </Link>
            <div className="dropdown-container">
                {width <= transitionWidth &&
                    <button className="dropdown-button" onClick={() => revealDropdown()}><FontAwesomeIcon icon={display ? "times" : "bars"} /></button>
                }
                {display &&
                    <nav className={`mt-3 ${width <= transitionWidth && "dropdown p-2"}`}>


                        <ul className={ulClass}>
                            <Link to="/" className={`nav-link ${navLinkPadding} ${location === '#/' && "selected-nav-link"}`} onClick={handleClick}><FontAwesomeIcon icon="grin-beam" /> About Me</Link>
                            <Link to="/projects" className={`nav-link ${navLinkPadding} ${location === '#/projects' && "selected-nav-link"}`} onClick={handleClick}><FontAwesomeIcon icon="code-branch" /> Projects</Link>
                            <Link to="/contact" className={`nav-link ${navLinkPadding} ${location === '#/contact' && "selected-nav-link"}`} onClick={handleClick}><FontAwesomeIcon icon="address-card" /> Contact</Link>
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