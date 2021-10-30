import React from "react";
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <header className="d-flex justify-content-between pt-2">
            
            <h2 id="home" className="ps-3">
                Ashis Patel 
            </h2>

            <nav className="mt-2">
                <ul className="d-flex p-0">
                    <Link to="/"><button className="button me-3">About Me</button></Link>
                    <Link to="/projects"><button className="button me-3">Projects</button></Link>
                    <Link to="/contact"><button className="button me-3">Contact</button></Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 