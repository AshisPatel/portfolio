import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import validateEmail from "../utils/validateEmail";
import validateNumber from "../utils/validateNumber";

function ContactModal(props) {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: "Enter a message here... (compliments are always welcome (^^)b)",
        permission: "no",
        contactViaPhone: false,
        contactViaEmail: false,
    });

    const [errMsg, setErrMsg] = useState('');

    const { name, email, phone, contactViaPhone, contactViaEmail, message, permission} = formState;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if(name==="email") {
            !validateEmail(value) ? setErrMsg('The input email is invalid.') : null;
            // return; 
        }

        if(name==="number") {
            !validateNumber(value) && setErrMsg('The input phone number is invalid.')
            return; 
        }

        if(value.length === 0) {
            
        }

        type === "checked" ?
            setFormState({ [name]: checked }) :
            setFormState({ [name]: value });
    }

    const validateForm = (e) => {
        e.preventDefault();
        
    }

    return (
        <div id="contact-form-wrapper"> 
            <form id="contact-form" className="d-flex flex-column p-3 justify-content-around  w-50 mx-auto" onSubmit={validateForm}>
                <label for="name" > Name:</label>
                    <input
                    className=""
                    autoComplete="off"
                    name="name"
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="Your Awesome Name"
                    />
           
                <label for="email"> Email: </label>
                    <input
                        autoComplete="off"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="yourock@email.com"
                    />
                <label for="phone-number"> Phone #:</label>
                    <input
                        className="mb-3"
                        autoComplete="off"
                        name="phone-number"
                        type="tel"
                        value={phone}
                        onChange={handleChange}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="123-456-7890"
                    />
                <textarea
                    name="message"
                    autoComplete="off"
                    value={message}
                    rows="5"
                    className="mb-2"
                    onChange={handleChange}
                />
               <label> Would you like me to contact you?
                    <label className="ms-2"> 
                        <input
                            type="radio"
                            name="permission"
                            value="yes"
                            checked={permission === "yes"}
                            onChange={handleChange}
                        /> Yes
                    </label>
                    <label className="ms-2">
                        <input
                            type="radio"
                            name="permission"
                            value="no"
                            checked={permission === "no"}
                            onChange={handleChange}
                        /> No
                    </label>
                </label>
                { permission === "yes" && 
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="emailMe"
                                checked={contactViaEmail}
                            /> Email Me
                        </label>
                        <label className="ms-2">
                            <input
                                type="checkbox"
                                name="callMe"
                                checked={contactViaPhone}
                            /> Call Me
                        </label>
                    </div>
                }
                {
                    errMsg &&
                    <p className="form-err-msg my-2">
                        {errMsg}
                    </p>
                }
                
                <button className="button mt-2" type="submit"> Send Message <FontAwesomeIcon icon="paper-plane" /> </button>
            </form>
            <div id="contact-form-backdrop"></div>
        </div>
    )

}

export default ContactModal;