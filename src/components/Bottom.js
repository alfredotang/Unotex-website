import React, { Component } from 'react';
import logo from './logofooter.png';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

const Div = styled.div`
  width: 100%;
  height: 300px;
  background: #e5e0e0;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;

  @media (max-width: 920px) {
    width: 100%;
    height: 500px;
    background: #e5e0e0;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
  }
`;

const Img = styled.img`
   
    background:#6c757d;
    position: relative;
    height:10vh;
    margin:10px 0 50px 0;
    transition:1s;
    border-radius: 1vh; 
    :hover{
        border-radius:7vh;
        height:11vh;
        margin:10px 0 43.5px 0;
    }
    @media (max-width:920px) {
        :hover{
        border-radius:7vh;
        height:10vh;
        margin:10px 0 50px 0;
    
        
    }
`;

class Bottom extends Component {
  render() {
    return (
      <div>
        <Div>
          <section>
            <div>
              <a href="/">
                <Img src={logo} />
              </a>
            </div>
            <div className="aaa">
              <h3>Copyright © 2014 UNOTEX CO.,LTD. All Right Reserved. </h3>
              <h5>
                ADD：3F.-2, No.94, Baozhong Rd., Xindian Dist., New Taipei City
                231, Taiwan (R.O.C.)
              </h5>
              <h5>TEL：+886-2-8911-9982 FAX：+886-2-8911-9962</h5>
            </div>
          </section>
        </Div>
      </div>
    );
  }
}

export default Bottom;
