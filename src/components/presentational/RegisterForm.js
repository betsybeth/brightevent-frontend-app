import React from 'react';

const RegisterForm = (props) =>{
  return(
      <form   className="form" onSubmit={props.onsignUpSubmit}>
          <h2>Sign Up</h2>
          <p>Type in your details to register</p>
          <label>Name</label><br/>
          <input className="form-control" type="text" name="name" value={props.name} onChange={props.onsignUpChange} placeholder="name" autoFocus="True"/>
          <label>Email</label><br/>
          <input  className="form-control" type="email" name="email" value={props.email} onChange={props.onsignUpChange} placeholder="email"/>
          <label>Password</label><br/>
          <input  className="form-control" type="password" name= "password" value={props.password} onChange={props.onsignUpChange} placeholder="password" required/>
          <label>Confirm</label><br/>
          <input  className="form-control" type="password" name="confirm" value={props.confirm} onChange={props.onsignUpChange} placeholder="confirm" required/>
          <p>Already have an account?<a href="/login">Sign In</a></p>
          <button type="submit"  className='btn btn-lg btn-success btn-block'>Sign Up</button>
     </form>


  );
};


export default RegisterForm;
