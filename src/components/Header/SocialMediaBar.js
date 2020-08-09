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

const socialMediaButtons = [
  { icon: <StyledFacebookCircle/>, link: 'https://www.facebook.com/rkg.dan/' },
  { icon: <StyledLinkedinSquare/>, link: 'https://www.linkedin.com/in/dan-moody-700071a8' },
  { icon: <StyledTwitter/>, link: 'https://www.twitter.com/danmoody_' },
  { icon: <StyledGithub/>, link: 'https://www.github.com/dangmoody' }
];

const SocialMediaBar = () => {
  return (
    <Wrapper>
      {socialMediaButtons.map((button, key) => {
        return (
        <StyledButton key={key} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a target="_blank" href={button.link}>{button.icon}</a> 
        </StyledButton>
        )
      })}
    </Wrapper>
  );
}

export default SocialMediaBar;
