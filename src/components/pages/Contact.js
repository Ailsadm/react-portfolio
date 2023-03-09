import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';


function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p><strong>GitHub Profile:</strong> https://github.com/Ailsadm</p> 
      <p><strong>LinkedIn Page:</strong> https://www.linkedin.com/in/ailsa-mcgowan-780376260/</p>
      <p><strong>Email:</strong> ailsamcgowan@hotmail.co.uk</p>
      
      <form>
        <h3>Contact Me</h3>
        <input placeholder='Name'></input>
        <input placeholder='Email'></input>
        <input placeholder='Message'></input>
        <button>Submit</button>
      </form>
      
    </div>
  );
}

export default Contact;
