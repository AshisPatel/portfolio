import React, { useState } from "react";
import { Link } from "react-router-dom";
import funFactList from "../assets/data/factList";
import ListItem from "../Components/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About(props) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="about" className="container mt-4">
            <div className="row about-wrapper">
                <img src={require("../assets/images/me.JPG").default} alt="Ashis striking a pose that embodies his grace and magnificence" className="col-12 col-md-3 ps-4 ps-md-0 pe-4 pe-md-2 h-md-100 mb-md-0 mb-4" id="about-img" />
                <div className=" col-10 offset-1 offset-md-0 col-md-9 about-info-box d-flex flex-column justify-content-around">
                    <div className="container">
                        <div className="row">
                            <h1 id="welcome-statement">Hello friend! My name is Ashis Patel.</h1>
                        </div>

                        <div clasSName="row">
                            <p className="about-me-intro">
                                I am a Full Stack Developer that is passionate about creating web applications that improve the lives of users! I recieved my Bachelor's Degree in Chemical Engineering from Texas A&M University in 2018 and recently recieved a Full Stack Certificate from the University of Texas. I have a background in consulting and teaching, where I have solved hundreds of engineering problems, taught dozens of classes and even developed my own training course. I've made many happy clients in my career and I look forward to making many more in the field of web development!

                            </p>
                        </div>
                    </div>

                    <div className="container">

                        <div className="row mb-3 about-link-box">
                            <p className="fs-5">
                                Feel free to check out my projects, github, resume, or reach out to me using the buttons below!
                            </p>
                            <Link to="/projects" className="col-12 col-md-6"><button className="button w-100 mb-2"><FontAwesomeIcon icon="code-branch" /> Projects</button></Link>

                            <a href="https://github.com/AshisPatel" target="_blank" className="col-12 col-md-6" rel="noreferrer">
                                <button className="button w-100 mb-2"><FontAwesomeIcon icon={['fab', 'github']} /> Github</button>
                            </a>

                            <a href={require("../assets/files/apr.pdf").default} target="_blank" className="col-12 col-md-6" rel="noreferrer">
                                <button className="button w-100 mb-2"><FontAwesomeIcon icon="file" /> Resume </button>
                            </a>

                            <Link to="/contact" className="col-12 col-md-6"><button className="button w-100 mb-2"><FontAwesomeIcon icon="address-card" /> Contact</button></Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row mt-2">

                <div className="about-extra-info mb-2 col-10 offset-1 col-md-12 offset-md-0" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <h3 className="text-center">Fun Facts On Hover!</h3>

                    {
                        isHovered &&

                        <div>
                            <ul className="no-style-list">
                                {
                                    funFactList.map((fact, i) => <ListItem info={fact} icon='magic' key={i} />)
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default About;