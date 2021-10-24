import React from "react";

function Hero(props) {
    return (
        <section id="hero-wrapper" className="my-3">
            <div class="d-flex flex-column w-75 mx-auto py-5 text-center">
                <h1>Hello, Welcome to My Portfolio!</h1>
                <h4> My name is Ashis, grab yourself something nice to drink and enjoy your visit! (^^)b</h4>
                <div >
                    <svg version="1.1" id="Layer_1" x="0px" y="0px" width="20%" height="20%"
                        viewBox="0 0 500 500" className="ps-5">
                        <path class="st0" d="M275.51,191.41v-19.38H2.22v167.81c-0.05,5.12,0.11,57.53,35.62,77.4c4.76,2.66,11.03,5.23,19.04,6.51h163.97
	                    c8.01-1.28,14.28-3.85,19.04-6.51c23.64-13.23,31.61-40.89,34.28-59.41c0.45,0.02,0.89,0.02,1.34,0.02
	                    c45.96,0,83.22-37.26,83.22-83.22C358.73,228.67,321.47,191.41,275.51,191.41z M275.51,337.05V212.22
	                    c34.47,0,62.42,27.94,62.42,62.41C337.93,309.1,309.98,337.05,275.51,337.05z"/>
                        <path class="filling" d="M247.11,345.84c-2.14,14.82-8.51,36.94-27.42,47.53c-3.81,2.13-8.82,4.18-15.23,5.21H73.27
	                    c-6.41-1.02-11.42-3.08-15.23-5.21c-28.41-15.9-28.54-57.82-28.5-61.92V197.2h218.63v134.25
	                    C248.19,332.82,248.19,338.41,247.11,345.84z"/>
                        <path class="st0" d="M248.18,233.67" />
                        <path class="st0" d="M29.55,233.67" />
                        <path class="steam" d="M45.48,2.85C35.89,9.07,24.37,18.87,22.77,32.3c-3.35,28.14,40.1,44.71,39.73,76.71
	                    c-0.11,9.8-4.37,23.72-23.97,40.41"/>
                        <path class="steam" d="M141.8,3.19c-9.59,6.22-21.11,16.02-22.71,29.45c-3.35,28.14,40.1,44.71,39.73,76.71
	                    c-0.11,9.8-4.37,23.72-23.97,40.41"/>
                        <path class="steam" d="M236.07,3.54c-9.59,6.22-21.11,16.02-22.71,29.45c-3.35,28.14,40.1,44.71,39.73,76.71
	                    c-0.11,9.8-4.37,23.72-23.97,40.41"/>
                    </svg>
                </div>
                <div>
                    <button>About Me</button>
                    <button>Projects</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;