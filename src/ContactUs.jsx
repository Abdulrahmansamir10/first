import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./App.css"

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xm5g4ro', 'template_gdzcr3q', form.current, 'Cduqxjciz2NcjPUKh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<>
    <h3> Get in Touch </h3>
    <br /> <br />
   
    <div className='cou'>
    <div className='con'>
    <form ref={form} onSubmit={sendEmail} >
      <label>Name</label> <br />
      <input type="text" name="user_name" /> <br />
      <label>Email</label> <br />
      <input type="email" name="user_email" /> <br />
      <label>Message</label> <br />
      <textarea name="message"  className='message'/> <br />
      <input type="submit" value="Send"  className='but'/>
    </form>
    </div>
    <div>
    </div>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13820.250726870403!2d31.1937709!3d30.0063565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458470a4b83d9fb%3A0x90c98afb5ad20993!2zKFVuaXRlZCBFbmdpbmVlcmluZyBDb21wYW55IChVRUMgLSDYp9mE2LTYsdmD2Kkg2KfZhNmH2YbYr9iz2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1707668542074!5m2!1sar!2seg"></iframe> 
    </div>
</>
  );
};



export default ContactUs