import React from 'react';


const Navbar = (props) => {
  if(props.isRegister === false){ 
    return (
      <nav className="navbar navbar-expand-sm navbar-dark">
          <a className="navbar-brand" href="">Bright Event App</a>
          <ul className="nav-item">
            <li><a href="/">Login</a></li>
          </ul>
        </nav>
    ) 
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
        <a className="navbar-brand" href="">Bright Event App</a>
        <ul className="nav-item">
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>
  ) 
}

export default Navbar;