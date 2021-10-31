import React from "react";
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <header className="d-md-flex justify-content-between pt-2">
            
            <h2 id="home" className="ps-md-2 text-center text-md-left">
                Ashis Patel 
            </h2>

            <nav className="mt-2">
                <ul className="d-flex px-auto justify-content-between">
                    <Link to="/"><button className="button me-3">About Me</button></Link>
                    <Link to="/projects"><button className="button me-3">Projects</button></Link>
                    <Link to="/contact"><button className="button me-3">Contact</button></Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 