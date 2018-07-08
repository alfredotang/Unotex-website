import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Product from './pages/product/Product';
import Contact from './pages/contact/Contact';

class App extends Component {
  
  render() {
    return (
      <Router> 
        <div>
          <Navbar />
          <Route exact path='/'         component={ Home }/>
          <Route exact path='/about'    component={ About }/>
          <Route exact path='/product'  component={ Product }/> 
          <Route exact path='/contact'  component={ Contact }/>
        </div>
      
      </Router>
    );
  }
}

export default App;
