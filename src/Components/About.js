import React, { useState } from "react";

function About(props) {

    const { rendered, setRendered } = props; 
    const [ isHovered, setIsHovered ] = useState(false); 

    return (
        <section id="about" className="container mt-3 mb-5">
            <div className="row">
                <img src="https://via.placeholder.com/150x300.png" alt="Ashis striking a pose that embodies his grace and magnificence" className="col-3 ps-0 pe-2" height="300" />
                <div className="col-9 about-info-box d-flex flex-column justify-content-around">
                    <h1>Hello friend! My name is Ashis Patel.</h1>
                    <p>
                        I am a Full Stack Developer that is passionate about creating web applications that improve the lives of users! I have a background in consulting and teaching, where I have solved hundreds of engineering problems, taught dozens of classes and even developed my own training course. I've made many happy clients in my career and I look forward to making many more in the field of web development!

                    </p>

                    <p>
                        Feel free to check out my projects, github, resume, or reach out to me using the buttons below! 
                    </p>
                    <div className="about-link-box d-flex justify-content-around mb-3">
                    <button className="button " onClick={() => setRendered('projects')}>Projects</button>
                    <a href="https://github.com/AshisPatel" target="_blank" className="">
                        <button className="button">Github</button>
                    </a>
                    <a href={require("../assets/files/apr.pdf").default} target="_blank" className="">
                        <button className="button">Resume</button>
                    </a>
                    <button className="button" onClick={() => setRendered('contact')}>Contact</button>
                </div>
                </div>
            </div>
            <div className="row mt-2">

                <div className="about-extra-info" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <h3 class="text-center">Hover over this box to see some fun facts about me!</h3>

                    {isHovered && <div>Howdy</div>}
                </div>
            </div>
        </section>
    );
}

export default About;