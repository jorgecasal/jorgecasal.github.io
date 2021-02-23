import React, { useContext } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  
  
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
    <article className="container box style3">
        <header>
            <h2>Nisl sed ultricies</h2>
            <p>Diam dignissim lectus eu ornare volutpat orci.</p>
        </header>
            <form onSubmit={sendEmail}>
                <div className="row gtr-50">
                    <div className="col-6 col-12-mobile">
                    <input
                    type="text"
                    className="text"
                    name="name"
                    placeholder="Name"
                    required
                    />
                    </div>
                    <div className="col-6 col-12-mobile">
                    <input
                        type="text"
                        className="text"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    </div>
                    <div className="col-12">
                    <textarea name="message" placeholder="Message" />
                    </div>
                    <div className="col-12">
                    <ul className="actions">
                        <li>
                        <input type="submit" value="Send" />
                        </li>
                    </ul>
                    </div>
                </div>
            </form>
    </article>
  )
}

export default Form;