import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import * as actions from '../../actions/EventActions';
import * as action from '../../actions/UserActions';
import Navbar from '../presentational/NavBar';
import { connect } from 'react-redux';




class PublicEvents extends Component {
  componentDidMount(){
    this.props.publicEvents();     
  }

  handlePublicSearchChange = (event) => {
    event.preventDefault();
    event.target.value ? this.props.searchPublicEvent(event.target.value).then((response) => {
      toast.success(response.value.data.mesage);
    }).catch((error) => {
      if (error.response) {
        return error; } }):
      this.props.publicEvents();
  }
  handleLogout = () => {
    this.props.logoutUser().then((response)=> {
      localStorage.clear();
      toast.success(response.value.data.message);  
    }).catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message); } });
  }

  render(){ 
    const data  =  this.props.Event.data;
    const isSearch=this.props.Event.request.isSearch;
    const pages=this.props.Event.request.pages;
    const nextPage=this.props.Event.request.nextPage;
    const prevPage=this.props.Event.request.prevPage;
    const eventsAll = data && data.length >= 1 ? data.map((dataItem) => (   
      <div className="card col-md-4 col-sm-4" key={dataItem.id}>
        <div className="card-top">
          <h5 className="card-h1">{dataItem.name}</h5>
        </div>  
        <div className='middle'>
          <h6 className="card-text">{dataItem.date_of_event.split('00')[0]}</h6>
        </div> 
        <div className='bottom'>
          <p className="card-text">{dataItem.description}</p>
          <p className="card-text">{dataItem.category}</p>
          <p className="card-text">{dataItem.location}</p>     
          <p>
            <Link to={`/singleEvent/${dataItem.id}`}>View Event</Link>
          </p>           
        </div> 
      </div>
    )):<div className='search'><h4> Event not available </h4> </div>;
    const search = data && data.length >= 1 ? data.map((dataItem) => (
      <div className="card col-sm-4" key={dataItem.id}>
        <div className="card-top">
          <h5 className="card-h1">{dataItem.name}</h5>
        </div>  
        <div className='middle'>
          <h6 className="card-text">{dataItem.date_of_event.split('00')[0]}</h6>
        </div>  
        <div className='bottom'>
          <p className="card-text">{dataItem.description}</p>
          <p className="card-text">{dataItem.category}</p>
          <p className="card-text">{dataItem.location}</p>     
          <p>
            <Link to={`/singleEvent/${dataItem.id}`}>View Event</Link>
          </p>           
        </div></div>
    )): <div className="search"> No match</div>;

    const handlePublicPagination = (url, e) => {
      e.preventDefault();  
      this.props.getPublicPages(url);  
    };
  
    return (
      <div>
        <ToastContainer />  
        <Navbar
          handleLogout={this.handleLogout}
          const isLoggedIn = {this.props.auth.data.authenticated}                
        />

        <div className="container">
          <div className="row">
            <div className="form form-inline my-2 my-lg-0 col-md-4">
              <input className="form-control" name="search" onChange={this.handlePublicSearchChange}  type="search" placeholder="Search"/>
            </div>
            <div className="col-md-4">
              {pages > 1 ?
                <nav className="navpaginate" aria-label="Page navigation example">
                  <ul className="pagination justify-content-end">
                    <li className="page-item">
                      <a className="page-link"
                        onClick={(e) => handlePublicPagination(prevPage, e)}
                        disabled={
                          prevPage <= 1 
                        }
                      >Prev</a></li>
                    <li className="page-item">
                      <a className="page-link"         
                        onClick={(e) =>handlePublicPagination(nextPage, e)}
                        disabled={
                          nextPage <= 1 
                        }
                      >Next</a></li></ul></nav>:
                null}</div>
          </div>
          <div>
            {isSearch ? search : eventsAll}
          </div>  
        

        </div>
      </div>  
    );
  }
}
const mapStateToProps = state => {
  return {
    Event: state.event,
    auth:state.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    publicEvents:() => dispatch(actions.publicEvents()),
    getEventPages: url => dispatch(actions.getEventPages(url)), 
    searchPublicEvent:publicData => dispatch(actions.searchPublicEvent(publicData)),
    getPublicPages: url => dispatch(actions.getPublicPages(url)),
    logoutUser: () => dispatch(action.logoutUser())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PublicEvents);