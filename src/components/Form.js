import React from 'react';

export default function Form() {
  return (
    <article className="container box style3">
        <header>
            <h2>Nisl sed ultricies</h2>
            <p>Diam dignissim lectus eu ornare volutpat orci.</p>
        </header>
            <form method="post" action="#">
                <div className="row gtr-50">
                    <div className="col-6 col-12-mobile">
                    <input
                    type="text"
                    className="text"
                    name="name"
                    placeholder="Name"
                    />
                    </div>
                    <div className="col-6 col-12-mobile">
                    <input
                        type="text"
                        className="text"
                        name="email"
                        placeholder="Email"
                    />
                    </div>
                    <div className="col-12">
                    <textarea name="message" placeholder="Message" />
                    </div>
                    <div className="col-12">
                    <ul className="actions">
                        <li>
                        <input type="submit" value="Send Message" />
                        </li>
                    </ul>
                    </div>
                </div>
            </form>
    </article>
  )
}