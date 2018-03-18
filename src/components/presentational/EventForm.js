import React from 'react';


const EventForm = (props) => {
  return(
    <form  className="form" onSubmit={props.onCreateEventSubmit}>
        <h2> Add Event </h2>
        <label>Event Name</label><br/>
        <input className="form-control" type="text" name="name" value={props.name} onChange={props.onCreateEventChange} placeholder="name" autoFocus="True"/>
        <label>Decription</label><br/>
        <textarea className="form-control" name="description" value={props.description} onChange={props.onCreateEventChange} rows="3" cols="50"></textarea>
        <label>Categories</label><br/>
        <select  className="form-control" name="category" value={props.category} onChange={props.onCreateEventChange}>
          <option value="">select category</option>
          <option value="Business">Business</option>
          <option value="Education">Education</option>
          <option value="Technology">Technology</option>
          <option value="Social">Social</option>
          <option value="Music">Music</option>
        </select>
        <label>Date of Event</label><br/>
        <input className="form-control" name="date" value={props.date_of_event} onChange={props.onCreateEventChange} />
        <label>Location</label><br/>
        <input className="form-control" type="text" name="location" value={props.location} onChange={props.onCreateEventChange} placeholder="Location"/><br/>
        <button type="submit" className="btn btn-lg btn-success btn-block">Create event</button>
   </form>



  )

};

export default EventForm;
