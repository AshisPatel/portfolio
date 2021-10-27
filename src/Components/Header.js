import React from "react";

function Header(props) {

    const { rendered, setRendered } = props; 
    return (
        <header className="d-flex justify-content-between pt-2">
            
            <h2 id="home" className="ps-3" onClick={() => setRendered('about')}>
                Ashis Patel 
            </h2>

            <nav className="mt-2">
                <ul className="d-flex p-0">
                    <button className="button me-3" onClick={() => setRendered('projects')}>Projects</button>
                    <button className="button me-3" onClick={() => setRendered('about')}>About Me</button>
                    <button className="button me-3" onClick={() => setRendered('contact')}>Contact</button>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 