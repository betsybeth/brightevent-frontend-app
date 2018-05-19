import React from 'react';

const ChangePasswordForm = (props) =>{
  return(
    <div className="ChangePasswordcard">
      <form   className="form" onSubmit={props.handleChangePasswordSubmit} style={{ display: props.showChangeForm }}>
        <h1 className="h1"><strong>Change password</strong></h1>
        <p>Type in your details to change password</p>
        <label>old Password</label><br/>
        <input  className="form-control" type="password" name="old_password" value={props.old_password} onChange={props.handleChangepasswordChange} placeholder="old password" autoFocus="True"/>
        <label>New Password</label><br/>
        <input  className="form-control" type="password" name="new_password"  value={props.new_password} onChange={props.handleChangepasswordChange}placeholder="New password"  required/>
        <label>Confirm Password</label><br/>
        <input  className="form-control" type="password" name="confirm_password"  value={props.confirm_password} onChange={props.handleChangepasswordChange}placeholder="Confirm password"  required/>        
        <button type="submit"  className="btn btn-lg btn-success btn-block">Change Password</button>
      </form>
    </div> 
  );
};  
export default ChangePasswordForm;        