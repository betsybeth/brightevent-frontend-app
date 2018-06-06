import React from 'react'; // eslint-disable-line no-unused-vars


const EventForm = (props) => {
  return(     
    <div id="myModal" className="modal fade" role="dialog" style={{ display: props.displayModal }}>
      <form className="addEvent col-sm-4 modal-content" onSubmit={props.handleCreateEventSubmit}>
        <button type="button" className="close" data-dismiss="modal" onClick={props.handleCloseAddModal}>&times;</button>
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
        <div className='col-sm-12 modal-footer'>
          <button type="submit" className=" col-sm-6 btn btn-sm btn-success btn-block">Create event</button>
          <button type="button" className=" col-sm-6 btn btn btn-secondary" data-dismiss="modal" onClick={props.handleCloseAddModal}>Close</button>
        </div>
       
      </form>
    </div>   


  );

};

export default EventForm;
