import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;



  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wrx924k', 'template_jyqyf5i', e.target, 'user_lIbYK4GRNYH01DTmvg804')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {'Would you like us to work  together? Awesome!'}
            </p>
{/* -------------------------------------------------------------------------------- */}
{/* <form  onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>subject</label>
      <input type="text" name="subject" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}

        <form id="contact-form" onSubmit={sendEmail}>
            <a name="contact"></a>
				<input class="input-field" type="text" name="name" placeholder="name" required></input>
        <input id="email" class="input-field" type="text" name="email" placeholder="email" required></input>
				<input class="input-field" type="text" name="subject" placeholder="subject" required></input>
				<textarea class="input-field" name="message" placeholder="message" required></textarea>
        <button className="cta-btn-send"><a className="cta-btn cta-btn--resume" type="submit" value="Send" >{"Get In Touch"}</a></button>
        </form>

{/* -------------------------------------------------------------------------------- */}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
