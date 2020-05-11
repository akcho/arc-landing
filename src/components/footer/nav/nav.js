import React from 'react';
import { Container } from './nav.css';
import Icon from 'images/instagram4.inline.svg';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <a href="mailto:arc@arcapture.co">email</a>
      </li>
      <li>
        <a href="https://www.instagram.com/arcapture_co/">
          <Icon />
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;
