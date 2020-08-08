import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// icons
import { StyledFacebookCircle, StyledLinkedinSquare, StyledTwitter, StyledGithub  } from '../../resources/Icons';


const Wrapper = styled.div`
  display: flex;
`;

const StyledButton = styled(motion.button)`
  background: none;
  outline: none!important;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

// TODO: add in links to the relevant sites
const socialMediaButtons = [
  <StyledFacebookCircle/>,
  <StyledLinkedinSquare/>,
  <StyledTwitter/>,
  <StyledGithub/>,
]

const SocialMediaBar = () => {
  return (
    <Wrapper>
      {socialMediaButtons.map((button, key) => {
        return (
        <StyledButton key={key} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {button}
        </StyledButton>
        )
      })}
    </Wrapper>
  );
}

export default SocialMediaBar;
