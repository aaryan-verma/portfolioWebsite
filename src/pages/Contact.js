import React, { useState, useEffect, useRef } from 'react';
import '../styles/Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FiLinkedin } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import Button from '@material-ui/core/Button';
import PropagateLoader from 'react-spinners/PropagateLoader'; // Import PropagateLoader

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gjg33r8', 'template_aagdhbw', form.current, 'rtKWjor3HWR7jgY25')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      {loading ? (
        <div className="custom-loader">
          <h2>Let's Connect</h2>
          <div className="loader-container">
            <PropagateLoader size={15} color={"#3e497a"} loading={loading} style={{opacity: 0.5}} />
          </div>
        </div>
      ) : (
        <>
          <h2 id='connect-h2'></h2>
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
                <a href='https://www.linkedin.com/in/aaryan-verma/' target="_blank" rel="noopener noreferrer">Send a Message</a>
              </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Full Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <Button variant="contained" color="primary" type="submit" className='contact-btn'>Send Message</Button>
            </form>
          </div>
        </>
      )}
    </section>
  );
}

export default Contact;
