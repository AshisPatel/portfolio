import React from "react";
import ListItem from "./ListItem";
import contactData from "../assets/data/contactData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactModal from "./ContactModal";

function Contact() {

    const {email, phone, address} = contactData; 
    return (
        <section id="contact" className="d-flex flex-column w-50 mx-auto">
            <h2>Reach out to me via any of the information below!</h2>
            <ul className="no-style-list fs-2 ps-0">
                <ListItem info={email} icon="envelope-open-text"/>
                <ListItem info={phone} icon="mobile-alt"/>
                <ListItem info={address} icon="home"/>
            </ul>
            <p className="fs-2">
                Feel free to shoot me a <button className="button fs-2"> Comment <FontAwesomeIcon icon="comment"/></button>
            </p>

            <ContactModal />

        </section>
    );
}

export default Contact; 