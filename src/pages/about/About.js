import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import Main from './Main';
import aboutPicture from './about.png';
import Bottom from '../../components/Bottom';


const Img=styled.img`
    width:100%;
    height:60vh;
    object-fit: cover; 
`;

class About extends Component{
    render(){
        return(
            <div>
                <Img src={aboutPicture} />
                <div>
                        <section style={{margin:20}}> 
                                <Main />
                        </section>
                </div>
                <div> 
                    <Bottom />
                </div>
            </div>
        );
    }
}

export default About;