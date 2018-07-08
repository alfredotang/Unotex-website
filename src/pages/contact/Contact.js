import React, { Component } from 'react';
import styled from 'styled-components';
import ContactCard from './ContactCard';
import Bottom from '../../components/Bottom';
import contactPicture from './contact.png';

const Img=styled.img`
    width:100%;
    height:60vh;
    object-fit: cover;
`;

class Contact extends Component{

    render(){

        return(
            <div>
                <Img src={contactPicture} />
                <ContactCard />
                <Bottom />
            </div>   

        );
    }
}

export default Contact;