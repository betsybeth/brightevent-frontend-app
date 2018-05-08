import React from 'react';
//  presentation component with markup and data is passed through props
const EditEventForm = (props) => {
  return (
    <div id="myMod" className="modal fade" role="dialog" style={{ display: props.displayEditModal }}>
      <form className="form modal-content" onSubmit={props.handleEditEventSubmit}>
        <h2> Edit Event </h2>
        <label>Event Name</label><br />
        <input className="form-control" type="text" name="name"value={props.name} onChange={props.handleEditEventChange} placeholder="name" />
        <label>Decription</label><br />
        <textarea className="form-control" name="description"value={props.description} onChange={props.handleEditEventChange} rows="3" cols="50"></textarea>
        <label>Categories</label><br />
        <select className="form-control" name="category" value={props.category} onChange={props.handleEditEventChange}>
          <option value="">select category</option>
          <option value="Business">Business</option>
          <option value="Education">Education</option>
          <option value="Technology">Technology</option>
          <option value="Social">Social</option>
          <option value="Music">Music</option>
        </select>
        <label>Date of Event</label><br />
        <input className="form-control" type="datetime-local" name="date_of_event" value={props.date_of_event} onChange={props.handleEditEventChange} />
        <label>Location</label><br />
        <input className="form-control" type="text" name="location" value={props.location} onChange={props.handleEditEventChange} placeholder="Location" /><br />
        <button type="submit" className="btn btn-lg btn-success btn-block"  >Edit Event</button>
      </form>
    </div>
  );
};

export default EditEventForm;
