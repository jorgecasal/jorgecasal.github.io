import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const Blog = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Blog" />
        <Row className="about-wrapper">
        <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {'Hello World, I have a blog!'}
                </p>
                <p className="about-wrapper__info-text">
                  {'Would you like to learn about JavaScript?'}
                </p>
                <p className="about-wrapper__info-text">
                  {'Code Noobs is a tech blog where in collaboration with Fanny Petersen we explain in detail all kinds of JavaScript scenarios'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={'https://nextjs-blog-gold-theta-18.vercel.app/'}
                    >
                      Code Noobs
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={'Blog.jpg'} />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
