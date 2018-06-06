import React from 'react';// eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';

const RegisterForm = (props) => {
  return (
    <div className="registerCard">
      <form className="form" onSubmit={props.onsignUpSubmit}>
        <h2>Sign Up</h2>
        <p>Type in your details to register</p>
        <label>Name</label><br />
        <input className="form-control" type="text" name="name" value={props.name} onChange={props.onsignUpChange} placeholder="name" />
        <label>Email</label><br />
        <input className="form-control" type="email" name="email" value={props.email} onChange={props.onsignUpChange} placeholder="email" />
        <label>Password</label><br />
        <input className="form-control" type="password" name="password" value={props.password} onChange={props.onsignUpChange} placeholder="password" required />
        <label>Confirm</label><br />
        <input className="form-control" type="password" name="confirm" value={props.confirm} onChange={props.onsignUpChange} placeholder="confirm" required />
        <p>Already have an account?<Link to="/login">Sign In</Link></p>
        <button type="submit" className="btn btn-lg btn-success btn-block">Sign Up</button>
      </form>
    </div>  


  );
};


export default RegisterForm;
