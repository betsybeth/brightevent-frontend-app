import React from 'react';


const LoginForm = (props) =>{
    return(
      <form   className="form" onSubmit={props.onSignInSubmit}>
          <h1 className="h1">Sign In </h1>
          <p>Type in your details to Login</p>
          <label>Email</label><br/>
          <input  className="form-control" type="email" name="email" value={props.email} onChange={props.onSignInChange} placeholder="username" autoFocus="True"/>
          <label>Password</label><br/>
          <input  className="form-control" type="password" name="password"  value={props.password} onChange={props.onSignInChange} placeholder="password" required/>
          <p><i>New User?</i><a href="/register" onClick={props.onLoginClick}>Sign Up</a></p>
          <button type="submit"  className="btn btn-lg btn-success btn-block">Sign In</button>
      </form>
    );
};


export default LoginForm;
