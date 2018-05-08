import React from 'react';


const RsvpForm = () => {
  return(
    <div className="rsvpcard">
      <form className=" rsvpform form">
        <h1 className="h1">Rsvp Form</h1>
        <p>You are invited to event Name</p>
        <label>Name</label><br/>
        <input  className="form-control" type="text" name="text" placeholder="Name" />
        <label>Email</label><br/>
        <input  className="form-control" type="email" name="email" placeholder="Email"/>
        <label>Phone Number</label><br/>
        <input  className="form-control" type="number" name="number" placeholder="phone number"/>
        <label>Category</label><br/>
        <select  className="form-control" name="category">
          <option value="">select category</option>
          <option value="Business">Guest</option>
          <option value="Education">Speaker</option>
          <option value="Technology">others</option>
        </select>
        <button type="submit"  className="btn btn-lg btn-success btn-block">Rsvp</button>
      </form>
    </div>  
        
  );
};

export default RsvpForm;