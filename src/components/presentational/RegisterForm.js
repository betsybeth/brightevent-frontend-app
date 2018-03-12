import React from 'react'



export const RegisterForm = (props) =>{
  return(
    <div className='main-container'>
      <form  className="form" onSubmit={props.onSubmit}>
        <div className="form-group">
          <h2>Sign Up</h2>
          <h6>Type in your details to register</h6><br/>
          <input className="form-control" type="text" name="name" value={props.registerData.name} onChange={props.onChange} placeholder="name"/><br/>
          <input className="form-control" type="email" name="email" value={props.registerData.email} onChange={props.onChange} placeholder="email"/>
          <br/>
          <input className="form-control" type="password" name= "password" value={props.registerData.password} onChange={props.onChange} placeholder="password"/>
          <br/>
          <input className="form-control" type="password" name="confirm"  value={props.registerData.confirm} onChange={props.onChange} placeholder="confirm"/>
          <br/>
          <h6>Already have an account?<a href="">Sign In</a></h6>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>

  );
};


export default RegisterForm;
