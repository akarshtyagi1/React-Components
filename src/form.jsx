import React, { useState } from "react";

function Form() {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setFullName(prevValue => {
            if (name === "fname") {
                return {
                    fname: value,
                    lname: prevValue.lname,
                    email: prevValue.email
                };
            } else if (name === "lname") {
                return {
                    fname: prevValue.fname,
                    lname: value,
                    email: prevValue.email
                };
            } else if (event.target.name === "email") {
                return {
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    email: value
                };
            }
        })
    }

    return <div className="form-container">
        <p>Hello {fullName.fname + " " + fullName.lname}</p>
        <p className="email" >{fullName.email}</p>
        <input name="fname" onChange={handleChange} type="text" placeholder="First Name"></input>
        <input name="lname" onChange={handleChange} type="text" placeholder="Last Name"></input>
        <input name="email" onChange={handleChange} type="text" placeholder="Email"></input>
        <button>Submit</button>
    </div>
}

export default Form;