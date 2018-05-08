import React from 'react';


const EventForm = (props) => {
  return(     
    <div id="myModal" className="modal fade" role="dialog" style={{ display: props.displayModal }}>
      <form className="form modal-content" onSubmit={props.handleCreateEventSubmit}>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h2> Add Event </h2>
        <label>Event Name</label><br/>
        <input className="form-control" type="text" name="name" value={props.name} onChange={props.handleChange} placeholder="name" autoFocus="True"/>
        <label>Description</label><br/>
        <textarea className="form-control" name="description" value={props.description} onChange={props.handleChange} rows="3" cols="50" placeholder="description"></textarea>
        <label>Categories</label><br/>
        <select  className="form-control" name="category" value={props.category} onChange={props.handleChange}>
          <option value="">select category</option>
          <option value="Business">Business</option>
          <option value="Education">Education</option>
          <option value="Technology">Technology</option>
          <option value="Social">Social</option>
          <option value="Music">Music</option>
        </select>
        <label>Date of Event</label><br/>
        <input className="form-control"  type="datetime-local" name="date_of_event" value={props.date_of_event} onChange={props.handleChange} placeholder="YYYY-MM-DD"/>
        <label>Location</label><br/>
        <input className="form-control" type="text" name="location" value={props.location} onChange={props.handleChange} placeholder="location"/><br/>
        <button type="submit" className="btn btn-sm btn-success btn-block">Create event</button>
        <button type="button" className="btn btn btn-default" data-dismiss="modal">Close</button>
      </form>
    </div>   


  );

};

export default EventForm;
