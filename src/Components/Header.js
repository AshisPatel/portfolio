import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Header(props) {

    const { height, width } = useWindowDimensions();

    return (
        <header className="d-md-flex justify-content-between pt-2">
            
            <h2 id="home" className="ps-md-2 text-center text-md-left">
                Ashis Patel 
            </h2>
            <p>Height: {height} and Width: {width}</p>
            <nav className="mt-2">
                <ul className="d-flex px-auto justify-content-between">
                    <Link to="/"><button className="button me-3"><FontAwesomeIcon icon="grin-beam" /> About Me</button></Link>
                    <Link to="/projects"><button className="button me-3"><FontAwesomeIcon icon="code-branch" /> Projects</button></Link>
                    <Link to="/contact"><button className="button me-3"><FontAwesomeIcon icon="address-card" /> Contact</button></Link>
                    <a href={require("../assets/files/apr.pdf").default} target="_blank" rel="noreferrer">
                                <button className="button me-3"><FontAwesomeIcon icon="file" /> Resume </button>
                    </a>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 