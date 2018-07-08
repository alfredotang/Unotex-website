import React, { Component } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import productPicture from './productPicture.png';
import Bottom from '../../components/Bottom';

const Img=styled.img`
width:100%;
height:60vh;
object-fit: cover;
`;




class Product extends Component{ 
    render(){ 
        return(
            <div>
                <Img src={productPicture} />
                <ProductCard />
                <Bottom />
            </div>
            
        
    
        );
    }
}

export default Product;