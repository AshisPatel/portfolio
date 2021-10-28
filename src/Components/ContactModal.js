import React, { useState } from "react";

function ContactModal(props) {

    const [formState, setFormState] = useState({
        name: "", 
        email: "", 
        phone: "", 
        message: "Enter a message here...",
        permission: "no",
        contactViaPhone: "false",
        contactViaEmail: "false",
        contactViaEither: "false"
    });

    const { name, email, phone, method, message, permission } = formState; 

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target; 
        type === "checked" ?
        setFormState({ [name]: checked }) :
        setFormState({ [name]: value });
    }

    return (
        <div>
            <form>
                <input 
                    name="name"
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="Your Awesome Name"
                />
                 <input 
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="yourock@email.com"
                />
                 <input 
                    name="phone-number"
                    type="tel"
                    value={phone}
                    onChange={handleChange}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                />
                <textarea 
                    name="message" 
                    value={message}
                    onChange={handleChange}
                />
                Can I contact you if neccesarry, or does this message require a response?
                <label>
                    <input 
                        type="radio"
                        name="permission"
                        value="yes"
                        checked={permission === "yes"}
                        onChange={handleChange}
                    /> Yes
                </label> 
                <label>
                    <input 
                        type="radio"
                        name="permission"
                        value="no"
                        checked={permission === "no"}
                        onChange={handleChange}
                    /> No
                </label> 
                <label>
                    <input
                        type="radio"
                        name="method"
                        value="email"
                        checked={method === "email"}
                    /> Email Me
                </label>
                <label>
                    <input
                        type="radio"
                        name="method"
                        value="phone"
                        checked={method === "phone"}
                    /> Call Me
                </label>
                <label>
                    <input 
                        type="radio"
                        name="method"
                        value="either"
                        checked={method === "either"}
                    />
                </label> Either
            </form>
        </div>
    )

}

export default ContactModal; 