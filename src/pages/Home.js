import React from 'react';
import styled from 'styled-components';

// components
import Header from '../components/Header/index';

const Container = styled.div`

`;

const Home = () => {
  return (
    <Container>
      <Header/>
      <div>This is the home page</div>
    </Container>
  );
}

export default Home;
