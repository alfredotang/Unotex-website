import React, { Component } from 'react';
import './home.css';
import home from './home2.png';
import Footer from './Footer';
import Bottom from '../../components/Bottom';


const sections={
    backgroundImage:`url(${home})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    width: '100%',
    height: '100vh',
    
}


class Home extends Component{

    render(){
        return(
                
            <div>
                <section className="sec1" style={sections}></section>
                <footer>
                    <Footer />
                </footer>
                <Bottom />
            
            </div>    
        );
    }
}

export default Home;