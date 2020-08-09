import React from 'react';
import styled from 'styled-components';

// components
import Header from '../components/Header/index';
import Projects from '../components/Projects/index';

const Container = styled.div`

`;

const Home = () => {
  return (
    <Container>
      <Header/>
      <Projects/>
    </Container>
  );
}

export default Home;
