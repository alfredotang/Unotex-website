import React, { Component } from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';

import Polo from './polo.png';
import Face from './face.png';
import Hm from './hm.png';



class Footer extends Component{
    render(){
        return(
            <div>
                <h1><Badge  style={{borderRadius:50}} color="secondary">Our Client</Badge></h1>
                <div className='client-logo'>
                    <section>
                        <Container>
                            <Row >
                                <Col xs="12" sm="4">
                                 
                                    <a href="https://www.ralphlauren.com/?&utm_source=PaidSearch&pkwid=International_Google_RLE_BR_GL_X_Polo_BMM_X_%2Bpolo+%2Bralph+%2Blauren&gclid=CjwKCAjw4PHZBRA-EiwAAas4Zox2kexur_9SlVCWaj3hTx5X5THBnuO5cRaX-egZ34kI5cXhDiFjJBoC4rkQAvD_BwE&gclsrc=aw.ds">
                                        <img src={Polo} /></a>
                                </Col>

                                <Col xs="12" sm="4">       
                                    <a href="https://www.thenorthface.com/homepage.html">
                                        <img src={Face} /></a>
                                </Col>

                                <Col xs="12" sm="4">                
                                    <a href="https://www.hm.com/entrance.ahtml?orguri=%2F">    
                                        <img src={Hm} /></a>
                                             
                                </Col>
                            </Row>
                        
                        </Container>
                    </section>
                  
                </div>
            </div>
        );
    }
}

export default Footer;

                  