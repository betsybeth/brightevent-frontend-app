import React, { Component } from 'react'


class NavForm extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-sm navbar-dark">
      <a className="navbar-brand" href="">Bright Event App</a>
      <ul className="">
        <li>
          <form className="navbar-form">
            <input type="text" className="form-control login-input" placeholder="username"/>
            <input type="password" className="form-control login-input" placeholder="password"/>
            <button type="submit" className="btn btn-primary login-btn"><a class="btn-link" href="">Sign in</a></button>
          </form>
        </li>
      </ul>
    </nav>

    );

  };

}

export default NavForm;
