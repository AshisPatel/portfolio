import React from "react";

function Header(props) {
    return (
        <header className="d-flex justify-content-between pt-2">
            
            <h2 id="home" className="ps-3">
                Ashis Patel 
            </h2>

            <nav>
                <ul className="list-group list-group-horizontal me-3">
                    <li className="dropdown px-4 py-2 me-1">Projects
                        <div className="dropdown-content mt-2 p-2">
                            <p>Completed</p>
                            <p>Developing</p>
                        </div>
                    </li>
                    <li className="px-4 py-2 me-1">About Me</li>
                    <li className="px-4 py-2">Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 