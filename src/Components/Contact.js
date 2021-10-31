import React, { useState } from "react";
import ListItem from "./ListItem";
import contactData from "../assets/data/contactData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactModal from "./ContactModal";

function Contact() {

    const [displayModal, setDisplayModal] = useState(false);

    const { email, phone, address } = contactData;
    return (
        <>
            <div className="container contact-section">
                <div className="row">
                    <section id="contact" className="d-flex text-center flex-column offset-md-3 col-md-6 col-10 offset-1 mx-auto my-5 p-4 mx-5">
                        <h2>Reach out to me via any of the information below!</h2>
                        <ul className="no-style-list fs-6 ps-0 text-start mx-auto" id="contact-list">
                            <ListItem info={email} icon="envelope-open-text" />
                            <ListItem info={phone} icon="mobile-alt" />
                            <ListItem info={address} icon="home" />
                        </ul>
                        <p className="fs-2">
                            Feel free to shoot me a <button className="button fs-2" onClick={() => setDisplayModal(true)}> Comment <FontAwesomeIcon icon="comment" /></button>
                        </p>



                    </section>
                </div>
            </div>

            {displayModal && <ContactModal setDisplayModal={setDisplayModal} />}
        </>
    );
}

export default Contact;