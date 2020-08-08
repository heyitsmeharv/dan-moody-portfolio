import React from 'react';
import styled from 'styled-components';

// components
import SocialMediaBar from '../components/SocialMediaBar';


const Container = styled.div`
  width: 100%;
  height: 100vh;
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


const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Dan Moody</Title>
        <SocialMediaBar/>
      </Wrapper>
    </Container>
  );
}

export default Home;
