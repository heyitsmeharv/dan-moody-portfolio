import React from 'react';
import styled from 'styled-components';

// components
import Nav from './Nav';
import SocialMediaBar from './SocialMediaBar';


const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3em;
  font-weight: bold;
  color: black;
`

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Dan Moody</Title>
        <Nav/>
        <SocialMediaBar/>
      </Wrapper>
    </Container>
  );
}

export default Header;
