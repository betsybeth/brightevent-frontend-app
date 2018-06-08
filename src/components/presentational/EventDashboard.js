import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';


const EventDashboard = (props) => {
  const { data } =  props;
  const search = data && data.length >= 1 ? data.map((dataItem) => (
    <div className="card col-md-4 col-sm-4" key={dataItem.id}>
      <div className="card-top">
        <h5 className="card-h1">{dataItem.name}</h5>
      </div>  
      <div className='middle'>
        <h6 className="card-text">{dataItem.date_of_event.split('00')[0]}</h6>
      </div>  
      <div className='bottom'>
        <p className="card-text">{dataItem.description.slice(0, 50)}</p>
        <p className="card-text">{dataItem.category}</p>
        <p className="card-text">{dataItem.location}</p>
        <p>
          <Link className="eventdetails" to={`/eventDetails/${dataItem.id}`}>View Event</Link>
        </p>
        <span
          id={dataItem.id}
          className="gly glyphicon glyphicon-pencil"
          onClick={(event) => {props.handleDisplayEditModal(); props.handleClick(event, dataItem);}} >
        </span>
        <span className="gly glyphicon glyphicon-trash" data-toggle="modal" data-target="#deletemodal"id={dataItem.id}></span>
        <div className="modal fade" id="deletemodal">
          <div className="modal-dialog">
            <form className="modal-content"onSubmit={props.handleDeleteClick(dataItem.id)}>


              <div className="modal-header">
                <h4 className="modal-title">Delete Event</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                                Are you sure you want to delete this event?
              </div>
              <div className="modal-footer">
                <button type="submit"  className="custom-btn cs-del-modal edit btn btn-danger btn-sm">Delete</button>
                <button type="button" className="btn btn-sm" data-dismiss="modal">Cancel</button>
              </div>

            </form>
          </div>
        </div>
      </div></div>
  ))
    : <div><h4 className="search">No Event available</h4> </div>;
  const handlePagination = (url, e) => {
    e.preventDefault();  
    props.getEventPages(url);  
  };
  
  return (
    <div className="container">
      <div className="row">
        
        <div className="col-md-4">
          <button className="add-button" onClick={props.handleDisplayModal}>
            <span>+</span>
          </button>
        </div>

        <div className="form form-inline my-2 my-lg-0 col-md-4" >
          <input className="form-control" name="search" onChange={props.handleSearchChange}  type="search" placeholder="Search"/>
        </div> 
      
        <div className="col-md-4">
          {props.pages > 1 ?
            <nav className="navpaginate" aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item">
                  <a className="page-link"
                    onClick={(e) => handlePagination(props.prevPage, e)}
                    disabled={
                      props.prevPage <= 1 
                    }
                  >Prev</a></li>
                <li className="page-item">
                  <a className="page-link"      
                    onClick={(e) => handlePagination(props.nextPage, e)}
                    disabled={
                      props.nextPage <= 1 
                    }
                  >Next</a></li></ul></nav>:
            null}</div>

      </div>
      <div>
        {search}
      </div>  
    </div>
  );
};
export default EventDashboard;
