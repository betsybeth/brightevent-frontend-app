import React from 'react';
import { Link } from 'react-router-dom';





const EventDashboard = (props) => {
  const { data } =  props;
  const handlersvp = (id)=>{
    props.handleRsvpClick(id);
  };
  const eventsAll = data && data.length >= 1 ? data.map((dataItem) => (
    <div className="card col-sm-4" key={dataItem.id}>
      <div className="card-body">
        <h1 className="card-title">{dataItem.name}</h1>
        <h5 className="card-text">{dataItem.date_of_event}</h5>
        <h5 className="card-text">{dataItem.description}</h5>
        <h5 className="card-text">{dataItem.category}</h5>
        <h5 className="card-text">{dataItem.location}</h5>
        <span
          className="gly glyphicon glyphicon-user"
          key={dataItem.id}
          onClick={()=>handlersvp(dataItem.id)}
        ></span>
        <span
          key={dataItem.id}
          className="gly glyphicon glyphicon-pencil"
          onClick={(event) => {props.handleDisplayEditModal(); props.handleClick(event, dataItem);}} >
        </span>
        <span className="gly glyphicon glyphicon-trash" onClick={props.handleDeleteClick(dataItem.id)}></span>
          
      </div>
    </div>)):<div className='search'><h4> Event not available </h4> </div>;
  const search = data && data.length >= 1 ? data.map((dataItem) => (
    <div className="card col-sm-4" key={dataItem.id}>
      <div className="card-body">
        <h5 className="card-title">{dataItem.name}</h5>
        <h6 className="card-text">{dataItem.date_of_event}</h6>
        <p className="card-text">{dataItem.description}</p>
        <p className="card-text">{dataItem.category}</p>
        <p className="card-text">{dataItem.location}</p>
        <span
          id={dataItem.id}
          className="gly glyphicon glyphicon-pencil"
          onClick={(event) => {props.handleDisplayEditModal(); props.handleClick(event, dataItem);}} >
        </span>
        <span className="gly glyphicon glyphicon-trash" onClick={props.handleDeleteClick(dataItem.id)}></span>
      </div>
    </div>
  )): <div className="search"> No match, You are trying to search an event that is not available at the moment</div>;

  const handlePagination = (url, e) => {
    e.preventDefault();  
    props.getEventPages(url);  
  };
  
  return (
    <div className="body">
      <button className="add-button" onClick={props.handleDisplayModal}>
        <span>+</span>
      </button>
      <div> 
        <div className="form form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-" name="search" onChange={props.handleSearchChange}  type="search" placeholder="Search"/>
        </div>
      </div>
      <div>
        {props.pages > 1 ?
          <div>
            <button className="btn btn-lg btn-success"
              onClick={(e) => handlePagination(props.prevPage, e)}
              disabled={
                props.prevPage <= 1 
                  ? 
                  true
                  :
                  false
              }
            >Prev page</button>
            <button 
              className="btn btn-lg btn-success"         
              onClick={(e) => handlePagination(props.nextPage, e)}
              disabled={
                props.nextPage <= 1 
                  ? 
                  true
                  :
                  false
              }
            >Next page</button></div>:
          null}
        <div>
          {props.isSearch ? search : eventsAll}
        </div>  
      </div>

    </div>
  );
};
export default EventDashboard;
