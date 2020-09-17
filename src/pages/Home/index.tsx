import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Navbar, Menu, Content, DivContent } from './styles';

const Home: React.FC = () => (
  <Container>
    <Navbar>
      <Link to="/">Logo</Link>
      <nav>
        <Menu>
          <li><Link to="/sign-in">Entrar</Link></li>
          <li><Link to="/sign-up">Inscrever-se</Link></li>
        </Menu>
      </nav>
    </Navbar>
    <Content>
      <DivContent>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel quam vitae turpis convallis sodales. In justo sapien, bibendum volutpat malesuada eget, pellentesque eget arcu. Donec consequat congue ex sit amet fringilla. Fusce suscipit sodales eros nec vulputate. Quisque id blandit arcu, sit amet gravida libero. Ut imperdiet ex mi, vel malesuada erat hendrerit vel. Maecenas et magna eu risus vehicula tincidunt ut eu leo. Donec porta turpis non turpis tincidunt sodales. Aliquam iaculis sodales est, id condimentum tortor.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel quam vitae turpis convallis sodales. In justo sapien, bibendum volutpat malesuada eget, pellentesque eget arcu. Donec consequat congue ex sit amet fringilla. Fusce suscipit sodales eros nec vulputate. Quisque id blandit arcu, sit amet gravida libero. Ut imperdiet ex mi, vel malesuada erat hendrerit vel. Maecenas et magna eu risus vehicula tincidunt ut eu leo. Donec porta turpis non turpis tincidunt sodales. Aliquam iaculis sodales est, id condimentum tortor.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel quam vitae turpis convallis sodales. In justo sapien, bibendum volutpat malesuada eget, pellentesque eget arcu. Donec consequat congue ex sit amet fringilla. Fusce suscipit sodales eros nec vulputate. Quisque id blandit arcu, sit amet gravida libero. Ut imperdiet ex mi, vel malesuada erat hendrerit vel. Maecenas et magna eu risus vehicula tincidunt ut eu leo. Donec porta turpis non turpis tincidunt sodales. Aliquam iaculis sodales est, id condimentum tortor.</div>
      </DivContent>
    </Content>
  </Container>
);

export default Home;
