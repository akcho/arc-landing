import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flexwrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 4rem;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
  div {
    font-size: 1.2rem;
  }
`;
