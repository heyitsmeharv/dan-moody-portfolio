import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


const Wrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const NavButton = styled(motion.button)`
  font-size: 3em;
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
`


const Nav = () => {
  return (
    <Wrapper>
      <NavButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} exact to="/blog">
        <StyledNavLink exact to="/home">Home</StyledNavLink>
      </NavButton>
      <NavButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} exact to="/about">
        <StyledNavLink exact to="/about">About</StyledNavLink>
      </NavButton>
      <NavButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} exact to="/blog">
        <StyledNavLink exact to="/blog">Blog</StyledNavLink>
      </NavButton>
    </Wrapper>
  );
}

export default Nav;
