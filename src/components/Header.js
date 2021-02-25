import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header({ title, heading, avatar }) {
  return (
    <section id="header">
      <header>
        <h1>{config.authorName}</h1>
        <p>{config.heading}</p>
      </header>
      <footer>
        <Scroll type="id" element="bannerh1">
          <a href="#bannerh1" className="button style2 ">
            about
          </a>
        </Scroll>
      </footer>
    </section>
  );
}
