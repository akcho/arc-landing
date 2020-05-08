import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './footer.css';
import Nav from 'components/footer/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Footer = () => (
  <AnimatedContainer>
    <Container>
      <Nav />
      <div>© 2020 AR CAPTURE</div>
    </Container>
  </AnimatedContainer>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
