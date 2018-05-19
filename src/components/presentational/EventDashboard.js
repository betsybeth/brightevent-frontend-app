import React from 'react';
import { Link } from 'react-router-dom';




const EventDashboard = (props) => {
  const { data } =  props;
  const eventsAll = data && data.length >= 1 ? data.map((dataItem) => (   
    <div className="card col-sm-4" key={dataItem.id}>
      <div className="card-top">
        <h5 className="card-h1">{dataItem.name}</h5>
      </div>  
      <div className='middle'>
        <h6 className="card-text">{dataItem.date_of_event}</h6>
      </div>  
      <div className='bottom'>
        <p className="card-text">{dataItem.description}</p>
        <p className="card-text">{dataItem.category}</p>
        <p className="card-text">{dataItem.location}</p>
        <div className="dropdown">        
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        more details
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" key={dataItem.id}>
            <p class="dropdown-item">
              <Link to={`/eventDetails/${dataItem.id}`}>View Event</Link>
            </p>
          </div>
        </div> 
        <span
          id={dataItem.id}
          className="gly glyphicon glyphicon-pencil"
          onClick={(event) => {props.handleDisplayEditModal(); props.handleClick(event, dataItem);}} >
        </span>
        <span className="gly glyphicon glyphicon-trash" onClick={props.handleDeleteClick(dataItem.id)}></span>
      </div></div>
  )):<div className='search'><h4> Event not available </h4> </div>;
  const search = data && data.length >= 1 ? data.map((dataItem) => (
    <div className="card col-sm-4" key={dataItem.id}>
      <div className="card-top">
        <h5 className="card-h1">{dataItem.name}</h5>
      </div>  
      <div className='middle'>
        <h6 className="card-text">{dataItem.date_of_event}</h6>
      </div>  
      <div className='bottom'>
        <p className="card-text">{dataItem.description}</p>
        <p className="card-text">{dataItem.category}</p>
        <p className="card-text">{dataItem.location}</p>
        <div className="dropdown">        
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        more details
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" key={dataItem.id}>
            <p class="dropdown-item">
              <Link to={`/eventDetails/${dataItem.id}`}>View Event</Link>
            </p>
          </div>
        </div> 
        <span
          id={dataItem.id}
          className="gly glyphicon glyphicon-pencil"
          onClick={(event) => {props.handleDisplayEditModal(); props.handleClick(event, dataItem);}} >
        </span>
        <span className="gly glyphicon glyphicon-trash" onClick={props.handleDeleteClick(dataItem.id)}></span>
      </div></div>
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
