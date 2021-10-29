import React, { useState } from "react";

function ContactModal(props) {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: "Enter a message here...",
        permission: "no",
        contactViaPhone: false,
        contactViaEmail: false
    });

    const { name, email, phone, contactViaPhone, contactViaEmail, message, permission } = formState;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        type === "checked" ?
            setFormState({ [name]: checked }) :
            setFormState({ [name]: value });
    }

    return (
        <div>
            <form id="contact-form" className="d-flex flex-column p-3 justify-content-around">
                <label> Name:</label>
                    <input
                    className=""
                    name="name"
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="Your Awesome Name"
                    />
           
                <label> Email: 
                    <input
                        className="ms-2"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="yourock@email.com"
                    />
                </label>
                <label> Phone #:
                    <input
                        className="ms-2"
                        name="phone-number"
                        type="tel"
                        value={phone}
                        onChange={handleChange}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="123-456-7890"
                    />
                </label>
                <textarea
                    name="message"
                    value={message}
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

            </form>
        </div>
    )

}

export default ContactModal;