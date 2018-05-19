import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <a className="navbar-brand" href="">Bright Event App</a>
      {props.isLoggedIn ? 
        <div className="navbardropdown dropdown">        
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Accounts
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <p className="dropdown-item" ><Link to='/'>Change Password</Link></p>
            <p className="dropdown-item">Public Events</p>
            <p className="dropdown-item"><Link to='/' onClick={props.handleLogout}>Logout</Link></p>
          </div>
        </div>:null}
    </nav>
  ); 
};

   

export default Navbar;