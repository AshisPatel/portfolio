import React, { useState } from "react";
import { Link } from "react-router-dom";
import funFactList from "../assets/data/factList";
import ListItem from "../Components/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About(props) {

    const [isHovered, setIsHovered] = useState(false);
    const {setLocation} = props; 

    const handleClick = (e) => {
        const pathName = e.target.getAttribute('data-link');
        console.log(pathName);
        setLocation(pathName);
    }

    return (
        <section id="about" className="container mt-4">
          
            <div className="row about-wrapper">
                <div className=" col-10 offset-1 offset-md-0 col-md-12 about-info-box d-flex flex-column justify-content-around pt-2">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center" >
                                <span id="welcome-statement" className="me-md-5 my-md-0">Hello friend, I'm Ashis Patel!</span>
                                <img src={require("../assets/images/me.jpg").default} alt="Ashis striking a pose that embodies his grace and magnificence" className="my-md-2 my-5" id="about-img"/>
                            </h2>
                            
                        </div>

                        <div className="row">
                            <p className="about-me-intro fs-5 text-center text-md-start">
                                A Full Stack Developer who is passionate about creating web applications that improve the lives of users. 
                                I recieved my Bachelor's Degree in Chemical Engineering from Texas A&M University in 2018 and recently recieved a Full Stack Certificate from the University of Texas. 
                            </p>
                            <hr/>
                            <p className="more-intro fs-5 text-center text-md-start">
                                Through my years as a consultant, I have solved hundreds of engineering problems, taught dozens of classes and even developed my own training course. 
                                I've made many happy clients in my career and I look forward to making many more in the field of web development!  
                            </p>
                            <hr/>
                        </div>
                    </div>

                    <div className="container">

                        <div className="row mb-3 about-link-box">
                            <p className="fs-5 text-center text-md-start">
                                Feel free to check out my projects, github, resume, or reach out to me using the buttons below!
                            </p>
                            <Link to="/projects" className="col-12 col-md-6" onClick={handleClick}><button className="button w-100 mb-2" data-link="#/projects"><FontAwesomeIcon icon="code-branch" /> Projects</button></Link>

                            <a href="https://github.com/AshisPatel" target="_blank" className="col-12 col-md-6" rel="noreferrer">
                                <button className="button w-100 mb-2"><FontAwesomeIcon icon={['fab', 'github']} /> Github</button>
                            </a>

                            <a href={require("../assets/files/apr.pdf").default} target="_blank" className="col-12 col-md-6" rel="noreferrer">
                                <button className="button w-100 mb-2"><FontAwesomeIcon icon="file" /> Resume </button>
                            </a>

                            <Link to="/contact" className="col-12 col-md-6" onClick={handleClick}><button className="button w-100 mb-2" data-link="#/contact"><FontAwesomeIcon icon="address-card" /> Contact</button></Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row mt-2">

                <div className="about-extra-info mb-2 col-10 offset-1 col-md-12 offset-md-0" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <h3 className="text-center"><FontAwesomeIcon icon="magic" /> Fun Facts About Me On Hover! <FontAwesomeIcon icon="magic" /></h3>

                    {
                        isHovered &&

                        <div>
                            <ul className="no-style-list">
                                {
                                    funFactList.map((fact, i) => <ListItem extraClass={`ff-item-${i}`} info={fact.fact} icon={fact.icon} key={i} />)
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