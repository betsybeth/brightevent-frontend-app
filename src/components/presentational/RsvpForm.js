import React from 'react';


const RsvpForm = (props) => {
  return(
    <div className="rsvpcard">
      <form className=" rsvpform form" onSubmit={props.handleRsvpSubmit}>
        <h1 className="h1">Rsvp Form</h1>
        <p>You are invited to event Name</p>
        <label>Name</label><br/>
        <input  className="form-control" type="text" name="name" value={props.name} onChange={props.handleRsvpChange}placeholder="Name" />
        <label>Email</label><br/>
        <input  className="form-control" type="email" name="email" value={props.email} onChange={props.handleRsvpChange} placeholder="Email"/>
        <label>Phone Number</label><br/>
        <input  className="form-control" type="number" name="number" value={props.phone_no} onChange={props.handleRsvpChange} placeholder="phone number"/>
        <label>Category</label><br/>
        <select  className="form-control" name="category" value={props.category} onChange={props.handleRsvpChange}>
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