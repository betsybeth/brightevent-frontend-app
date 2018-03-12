import React from 'react'



export const LoginForm = (props) => {
    return(
        <ul className="">
          <li>
            <form className="navbar-form" onSubmit={props.onSubmit}>
              <input type="email" className="form-control login-input" value={props.loginData.email} onChange={props.onChange} placeholder="email"/>
              <input type="password" className="form-control login-input" value={props.loginData.password} onChange={props.onChange} placeholder="password"/>
              <button type="submit" className="btn btn-primary login-btn">Sign in</button>
            </form>
          </li>
        </ul>

    );
}


export default LoginForm;
