import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <a className="navbar-brand" href="">Bright Event App</a>
      <ul className="nav-item">
        { props.isLoggedIn ? (<li><Link to='/' onClick={() => props.handleLogout()}>Logout</Link></li>): null }
      </ul>
    </nav>
  ); 
};
   

export default Navbar;