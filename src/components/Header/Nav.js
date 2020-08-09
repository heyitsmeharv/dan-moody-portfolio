import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


const Wrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const NavButton = styled(motion.button)`
  font-size: 2em;
  width: 3em;
  margin-right: 10px;
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


const Nav = () => {
  return (
    <Wrapper>
      <NavButton>
        <StyledNavLink exact to="/about">About</StyledNavLink>
      </NavButton>
      <NavButton>
        <StyledNavLink exact to="/blog">Blog</StyledNavLink>
      </NavButton>
    </Wrapper>
  );
}

export default Nav;
