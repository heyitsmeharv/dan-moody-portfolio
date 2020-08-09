import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// components
import Nav from './Nav';
import SocialMediaBar from './SocialMediaBar';


const Container = styled.div`
  width: 100%;
  margin-bottom: 4em;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavButton = styled.button`
  font-size: 2em;
  background: none;
  outline: none!important;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;




const Header = () => {
  return (
    <Container>
      <Wrapper>
        <NavButton>
          <StyledNavLink exact to="/home">Dan Moody</StyledNavLink>
        </NavButton>
        <Nav/>
        <SocialMediaBar/>
      </Wrapper>
    </Container>
  );
}

export default Header;
