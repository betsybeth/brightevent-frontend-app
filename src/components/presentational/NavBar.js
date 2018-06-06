import React from 'react'; // eslint-disable-line no-unused-vars
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
            <p><Link  className="dropdown-item" to='/dashboard'>Dashboard</Link></p>
            <p><Link className="dropdown-item" to="/public-events">Public Events</Link></p>
            <p><Link  className="dropdown-item" to='/' onClick={props.handleLogout}>Logout</Link></p>
          </div>
        </div>:<ul className=" nav navbar-nav mr-auto">
          <li> <Link className="nav-item"to="/login">Login</Link> </li>
          <li ><Link className="nav-item" to="/register">Create an account</Link></li>
        </ul>}
    </nav>
  ); 
};

   

export default Navbar;