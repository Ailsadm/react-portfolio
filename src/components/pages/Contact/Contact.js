
import React, { useState } from "react";
import "./style.css";


function Contact() {
  const [formData, setFormData] = useState({name: "", email: "", message:""});

  const changeHandle = e => {
    setFormData(e.target.value)
}

  return (
    <div>
      <h1>Contact Page</h1>
      <p className="contactInfo"><strong>GitHub Profile:</strong> https://github.com/Ailsadm</p> 
      <p className="contactInfo"><strong>LinkedIn Page:</strong> https://www.linkedin.com/in/ailsa-mcgowan-780376260/</p>
      <p className="contactInfo"><strong>Email:</strong> ailsamcgowan@hotmail.co.uk</p>
      
      <form className="form">
        <h3>Contact Me</h3>
        <input className="inputform"
          value={formData.name}
          name="firstName"
          type="text"
          placeholder='Name'
          onChange={changeHandle} >
          </input>
        <input className="inputform"
          value={formData.email}
          name="email"
          type="email"
          placeholder='Email'
          onChange={changeHandle} ></input>
        <input className="inputform"
          value={formData.message}
          name="message"
          type="text"
          placeholder='Message'
          onChange={changeHandle} ></input>
        <button className="formsubmitbutton">Submit</button>
      </form>
      
    </div>
  );
}

export default Contact;
