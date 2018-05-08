import React from 'react';
import { Link } from 'react-router-dom';


const LoginForm = (props) =>{
  return(
    <div className="logincard">
      <form   className="form" onSubmit={props.onSignInSubmit}>
        <h1 className="h1">Sign In </h1>
        <p>Type in your details to Login</p>
        <label>Email</label><br/>
        <input  className="form-control" type="email" name="email" value={props.email} onChange={props.onSignInChange} placeholder="username" autoFocus="True"/>
        <label>Password</label><br/>
        <input  className="form-control" type="password" name="password"  value={props.password} onChange={props.onSignInChange} placeholder="password" required/>
        <p>New User?<Link to="/register"> Sign Up</Link></p>
        <button type="submit"  className="btn btn-lg btn-success btn-block">Sign In</button>
      </form>
    </div>  
      
  );
};


export default LoginForm;
