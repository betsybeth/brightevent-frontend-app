import React from 'react'; // eslint-disable-line no-unused-vars
//  presentation component with markup and data is passed through props
const EditEventForm = (props) => {
  return (
    <div id="myMod" className="modal fade" role="dialog" style={{ display: props.displayEditModal }}>
      <div className="modal-body">
        <form className="addEvent col-sm-4 modal-content" onSubmit={props.handleEditEventSubmit}>
          <button type="button" className="close" data-dismiss="" aria-label="Close">
            <span aria-hidden="true" onClick={props.handleCloseModal}>&times;</span>
          </button>
          <h2> Edit Event </h2>
          <label>Event Name</label><br />
          <input className="form-control" type="text" name="name" value={props.name} onChange={props.handleEditEventChange} placeholder="name" />
          <label>Decription</label><br />
          <textarea className="form-control" name="description" value={props.description} onChange={props.handleEditEventChange} rows="3" cols="50"></textarea>
          <label>Categories</label><br />
          <input  className="form-control" name="category" value={props.category} onChange={props.handleEditEventChange} placeholder="category"/>
          <label>Date of Event</label><br />
          <input className="form-control" type="text" name="date_of_event" value={props.date_of_event} onChange={props.handleEditEventChange} />
          <label>Location</label><br />
          <input className="form-control" type="text" name="location" value={props.location} onChange={props.handleEditEventChange} placeholder="Location" /><br />
          <div className='col-sm-12 modal-footer'>
            <button type="submit" className=" col-sm-6 btn btn-sm btn-primary btn-block">Update Event</button>
            <button type="button" className="col-sm-6 btn btn-secondary" data-dismiss="modal" onClick={props.handleCloseModal}>Close</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default EditEventForm;
