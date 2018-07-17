import React, { Component } from 'react';
import styled from 'styled-components';
import './home.css';
import home from './home2.png';
import Footer from './Footer';
import Bottom from '../../components/Bottom';

const Section = styled.section`
  background-image: url(${home});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  @media (max-width: 420px) {
    background-position: center;
  }
`;

class Home extends Component {
  render() {
    return (
      <div>
        <Section />
        <footer>
          <Footer />
        </footer>
        <Bottom />
      </div>
    );
  }
}

export default Home;
