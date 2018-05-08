import React from 'react';


export default (props) => {
  return(
    <div> 
      <form className="form form-inline my-2 my-lg-0" onSubmit={props.handleSearchEvent}>
        <input className="form-control mr-sm-" name="name" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  ); 
};