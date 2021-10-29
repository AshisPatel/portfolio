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

    const [errMsg, setErrMsg] = useState('');

    const { name, email, phone, contactViaPhone, contactViaEmail, message, permission} = formState;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        type === "checked" ?
            setFormState({ [name]: checked }) :
            setFormState({ [name]: value });
    }

    const validateInput = (e) => {
        const {name, value} = e.target;
        if (name === "email") {
            !validateEmail(value) ? setErrMsg('The input email is invalid.') : setErrMsg('')
        } else if (name === "phone-number") {
            !validateNumber(value) ? setErrMsg('The input phone number is invalid.')  : setErrMsg('')
        } else {
            value.trim() === '' ? setErrMsg(`The ${name} input cannot be left blank.`)  : setErrMsg('')
        }
    }

    const validateForm = (e) => {
        e.preventDefault();
        if(permission === "yes" && (!contactViaEmail || !contactViaPhone)) {
            setErrMsg('Please select your preferred contact method.');
            return;
        } else {
            setErrMsg('');
        }

        errMsg === '' && setDisplayModal(false);
        
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
                    onBlur={validateInput}
                    placeholder="Your Awesome Name"
                    />
           
                <label for="email"> Email: </label>
                    <input
                        autoComplete="off"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        onBlur={validateInput}
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
                        onBlur={validateInput}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="123-456-7890"
                    />
                <textarea
                    name="message"
                    autoComplete="off"
                    placeholder="Enter a message here... (compliments are always welcome (^^)b)"
                    value={message}
                    rows="5"
                    className="mb-2"
                    onChange={handleChange}
                    onBlur={validateInput}
                />
               <label> Would you like me to contact you?
                    <label className="ms-2"> 
                        <input
                            type="radio"
                            name="permission"
                            value="yes"
                            checked={permission==="yes" && true}
                            onChange={handleChange}
                        /> Yes
                    </label>
                    <label className="ms-2">
                        <input
                            type="radio"
                            name="permission"
                            value="no"
                            checked={permission==="no" && true}
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
                    <p className="form-err-msg my-2 fs-3">
                        {errMsg}
                    </p>
                }
                
                <button className="button mt-2" type="submit"> Send Message <FontAwesomeIcon icon="paper-plane" /> </button>
                <button className="button mt-2" type="click" onClick={() => setDisplayModal(false)}> Close </button>
            </form>
            <div id="contact-form-backdrop"></div>
        </div>
    )

}

export default ContactModal;