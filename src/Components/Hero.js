import React from "react";

function Hero(props) {
    return (
        <section id="hero-wrapper" className="mt-3 mb-5">
            <div class="d-flex flex-column w-75 mx-auto py-5 text-center">
                <h1>Hello friend! My name is Ashis Patel.</h1>
                <p>
                    I am a Full Stack Developer that is passionate about creating web applications that improve the lives of users! I have a background in consulting and teaching, where I have solved hundreds of engineering problems, taught dozens of classes and even developed my own training course. I've made many happy clients in my career and I look forward to making many more in the field of web development! 

                </p>
                <div>
                    <button className="button light me-3">About Me</button>
                    <button className="button light">Projects</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;