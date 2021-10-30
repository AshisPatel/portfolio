import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import validateEmail from "../utils/validateEmail";
import validateNumber from "../utils/validateNumber";
function ContactModal({ setDisplayModal }) {

  
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        permission: "no",
        contactViaPhone: false,
        contactViaEmail: false,
    });

    const [errMsg, setErrMsg] = useState("");

    const { name, email, phone, contactViaPhone, contactViaEmail, message, permission } = formState;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        type === "checkbox" ?
            setFormState({ ...formState, [name]: checked }) :
            setFormState({ ...formState, [name]: value });
    }

    const validateInput = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            validateEmail(value) ? setErrMsg('') : setErrMsg('The input email is invalid.')
        } else if (name === "phone-number") {
            validateNumber(value) ? setErrMsg('') : setErrMsg('The input phone number is invalid.')
        } else {
            value.trim() === '' ? setErrMsg(`The ${name} input cannot be left blank.`) : setErrMsg('')
        }
    }

    const validateForm = (e) => {
        e.preventDefault();
        // Check to see if all of the required parameters are specified
        // Check to see if name and message are valid 
        // Surely there must be a way to do this with state??? State seems to keep the errMsg one step behind, I must just be misunderstanding something. 
        let emailIsValid = true;
        let phoneIsValid = true; 
        if (name && message) {
            // Check to see if a valid email is added when the user wants to be contacted via email
            if (contactViaEmail) {
                if(!validateEmail(email)) {
                    emailIsValid = false; 
                    setErrMsg('The input email is invalid.');
                }
            }
            // Check to see if a valid phone-number is added when the user wants to be contacted via email 
            if (contactViaPhone) {
                if(!validateNumber(phone)) {
                    phoneIsValid = false;
                    setErrMsg('The input phone number is invalid.');
                }
            }
            if (!contactViaEmail && !contactViaPhone) {
                setErrMsg('');
                setDisplayModal(false);
            }
            (emailIsValid && phoneIsValid) && setDisplayModal(false);
        } else {
            setErrMsg('Your name and the message field cannot be left empty.');
        }
    }


    return (
        <div id="contact-form-wrapper">
            <form id="contact-form" className="d-flex flex-column p-3 justify-content-around  w-50 mx-auto" onSubmit={validateForm}>
                <label for="name" > Name:</label>
                <input
                    className="mb-2"
                    autoComplete="off"
                    name="name"
                    type="text"
                    value={name}
                    onChange={handleChange}
                    // onBlur={validateInput}
                    placeholder="Your Awesome Name"
                />
                <label for="message"> Your Thoughts: </label>
                <textarea
                    name="message"
                    autoComplete="off"
                    placeholder="Enter a message here... (compliments are always welcome)"
                    value={message}
                    rows="5"
                    className="mb-2"
                    onChange={handleChange}
                // onBlur={validateInput}
                />
                <label> Would you like me to contact you?
                    <label className="ms-2">
                        <input
                            type="radio"
                            name="permission"
                            value="yes"
                            checked={permission === "yes" && true}
                            onChange={handleChange}
                        /> Yes
                    </label>
                    <label className="ms-2">
                        <input
                            type="radio"
                            name="permission"
                            value="no"
                            checked={permission === "no" && true}
                            onChange={handleChange}
                        /> No
                    </label>
                </label>
                {permission === "yes" &&
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="contactViaEmail"
                                checked={contactViaEmail}
                                onChange={handleChange}
                            /> Email Me
                        </label>
                        <label className="ms-2">
                            <input
                                type="checkbox"
                                name="contactViaPhone"
                                checked={contactViaPhone}
                                onChange={handleChange}
                            /> Call Me
                        </label>
                    </div>
                }
                {
                    contactViaEmail &&
                    <>
                        <label for="email"> Email: </label>
                        <input
                            className="mb-2"
                            autoComplete="off"
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleChange}
                            // onBlur={validateInput}
                            placeholder="yourock@email.com"
                        />
                    </>
                }
                {
                    contactViaPhone &&
                    <>
                        <label for="phone-number"> Phone #:</label>
                        <input
                            className="mb-2"
                            autoComplete="off"
                            name="phone"
                            type="tel"
                            value={phone}
                            onChange={handleChange}
                            // onBlur={validateInput}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="123-456-7890"
                        />
                    </>
                }
                {
                    errMsg &&
                    <p className="form-err-msg my-2 fs-3">
                        {errMsg}
                    </p>
                }

                <button className="button mt-2"> Send Message <FontAwesomeIcon icon="paper-plane" /> </button>
                <button className="button mt-2" type="click" onClick={() => setDisplayModal(false)}> Close </button>
            </form>
            <div id="contact-form-backdrop"></div>
        </div>
    )

}

export default ContactModal;