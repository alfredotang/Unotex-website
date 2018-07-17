import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.png';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollCss: '',
      rwdCss: '',
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        this.setState({ scrollCss: 'scrollNav' });
      } else {
        this.setState({ scrollCss: '' });
      }
    });
  }

  render() {
    const menuDisplay = this.state.isOpen ? 'touch' : '';
    return (
      <div>
        <div className="rwd-bar">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="menu">
            <h5 onClick={this.toggle}>Menu</h5>
          </div>
        </div>

        <nav className={this.state.scrollCss}>
          <div className="logo">
            <img src={logo} />
          </div>
          <ul className={menuDisplay}>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
