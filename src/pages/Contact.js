import React, { useRef, useState } from 'react';
import '../styles/Contact.css';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { FiLinkedin } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import Button from '@material-ui/core/Button';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm('service_gjg33r8', 'template_aagdhbw', form.current, 'rtKWjor3HWR7jgY25')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
          setSending(false);
          setTimeout(() => setSuccess(false), 3000);
      }, (error) => {
          console.log(error.text);
          setSending(false);
      });
    e.target.reset();
  };

  return (
    <div className='contact'>
      <h1>Get In Touch</h1>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>aryanverma.av2000@gmail.com</h5>
            <a href='mailto:aryanverma.av2000@gmail.com' target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
          <article className='contact__option'>
            <FiLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>linkedin.com/in/aaryan-verma</h5>
            <a href='https://www.linkedin.com/in/aaryan-verma/' target="_blank" rel="noopener noreferrer">Connect</a>
          </article>
          <article className='contact__option'>
            <MdOutlinePhone className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>+91 7905138910</h5>
            <a href='tel:+917905138910' target="_blank" rel="noopener noreferrer">Call Me</a>
          </article>
          
          {/* Radar Location Widget */}
          <div className='location-widget'>
            <div className='radar-container'>
              <div className='radar-dot'></div>
              <div className='radar-ripple'></div>
              <div className='radar-ripple'></div>
            </div>
            <div className='location-text'>
              <h4>Remote Terminal</h4>
              <h3>India</h3>
              <p>20.5937° N, 78.9629° E</p>
            </div>
          </div>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <Button 
            variant="contained" 
            color="primary" 
            type="submit" 
            className='contact-btn'
            disabled={success || sending}
          >
            {success ? "Message Sent!" : sending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
