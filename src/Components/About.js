import React from "react";

function About(props) {
    return (
        <section className="d-flex flex-column flex-md-row justify-content-center mt-5">
            <img src="https://via.placeholder.com/200" width="200" height="200" />
            <div className="w-50 ms-5 p-3" id="about-me-box">
                <p>
                    I'm a Full Stack Developer with an aspiration to make impactful web apps! I got my bachelor's degree in chemical engineering from Texas A&M University in 2018. For the past 3-years I have been working as a consulting engineer for Bryan Research & Engineering. During my time as a consulting engineer, I realized my passion for helping and teaching others. However, I did not find fulfillment in my field and seeked a new area of expertise. I decided to pursue a Full Stack Certificate from the University of Texas by attending the Full Stack Coding Bootcamp. Since then, I have been working hard to develop my coding skills!

                    In my spare time, I enjoy playing with Cappu & Ccino (my cat and dog), brewing coffee, reading fiction (go fantasy!), and of course coding. If you have any inquiries, please feel free to contact me with the email link below! You can also access my resume, or browse my projects here on this page, or at my github.
                </p>
            </div>

        </section>
    );
}

export default About;