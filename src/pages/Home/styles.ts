import styled from 'styled-components';
import { shade } from 'polished';

export const Navbar = styled.header`
  background: #23262a;
  font-size: 1.4em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    margin: 0.6em 0 0.6em 1.2em;
    padding: 0.5em;
  }
`;

export const Menu = styled.ul`
  display: flex;

  li a {
    margin: 0 1.2em 0 0;
    background-color: #ff6a00;
    padding: 0.2em 0.6em 0.2em 0.6em;
    border-radius: 0.2em;

    &:hover {
      background: ${shade(0.2, '#ff6a00')}
    }
  }
`;

export const Content = styled.div`
  margin-top: 1.5em;
`;

export const DivContent = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  grid-gap: 20px;
  max-width: auto;

  > div:nth-child(1) {
    display: grid;
    grid-row: 1 / 3;
    margin-left: 1.5em;
    background: #23262a;
    border-radius: 8px;
    padding: 20px;
  }

  > div:nth-child(2) {
    display: grid;
    margin-right: 1.5em;
    background: #23262a;
    border-radius: 8px;
    padding: 20px;
  }

  > div:nth-child(3) {
    display: grid;
    margin-right: 1.5em;
    background: #23262a;
    border-radius: 8px;
    padding: 20px;
  }
`;

export const Container = styled.div`
  height: 100vh;
`;
