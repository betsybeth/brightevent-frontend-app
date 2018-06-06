import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import * as actions from '../../actions/EventActions';
import * as action from '../../actions/UserActions';
import Navbar from '../presentational/NavBar';
import eventImage from './../../events.jpg';
import { toast, ToastContainer } from 'react-toastify';
var hdate = require('human-date');
class SingleEvent extends  Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      displayRsvpModal:'none'
    };
  } 
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.getOnePublicEvent(id);
  }
    // handles creating rsvps 
    handleRsvpChange = (event) => { 
      this.setState({email: event.target.value});
    }
    
    handleOpenModal = () => {
      this.setState({displayRsvpModal:'block'});
    }
  
    handleRsvpSubmit = (event) => {       
      event.preventDefault();
      const  rsvpInfo  = {
        email:this.state.email};
      const {id} = this.props.match.params;
      this.props.addRsvp(id, rsvpInfo).then((response) =>{
        toast.success(response.value.data.mesage);
        this.setState({
          displayRsvpModal: 'none'
        });
      }).catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message); } });

      
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
      const  events  = this.props.Event.request.message;
      
      return(
        <div>
          <ToastContainer />
          <Navbar
            const isLoggedIn = {this.props.auth.data.authenticated}
            handleLogout={this.handleLogout}
          />
          <div className="singleEventCard">
            <div className="card-body">
              <h1 className="card-title">{events.name}</h1>
              <div className="col-md-12">
                <div className="col-md-6">
                  <img className="eventimage"src={eventImage} alt='no internet connection'/>
                  <div className="date text-center">
                    <h6 className="card-text">{hdate.relativeTime(events.date_of_event)}</h6>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <h4>DESCRIPTION</h4>
                  <h5 className="card-text">{events.description}</h5>
                  <h4>CATEGORY</h4>  
                  <h6 className="card-text">{events.category}</h6>
                  <h4>LOCATION</h4>
                  <h6 className="card-text">{events.location}</h6>

                  <div className="rowy">
         
                    <button type="button"  className="btn-rsvp btn-lg fluid btn-success btn-block col-md-4 " data-toggle="modal" data-target="#rsvpmodal" onClick={this.handleOpenModal}>
           Attend
                    </button> 
                    <div className="modal fade" id="rsvpmodal">
                      <div className="modal-dialog">
                        <div className="modal-content">


                          <div className="modal-header">
                            <h4 className="modal-title">Rsvp Event</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                          </div>

                          <div className="modal-body">
                            <h4>Enter Email</h4>
                            <input  className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleRsvpChange} placeholder="username" autoFocus="True"/>
                          </div>



                          <div className="modal-footer">
                            <button type="button" onClick={this.handleRsvpSubmit} className="custom-btn cs-del-modal edit btn btn-primary btn-sm" data-dismiss="modal">Attend</button>
                            <button type="button" className="btn btn-sm" data-dismiss="modal">Cancel</button>
                          </div>

                        </div>
                      </div>
                    </div>  
                  </div> 

                </div>	
              </div>              	
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
    getOnePublicEvent:(id) => dispatch(actions.getOnePublicEvent(id)),
    addRsvp:(id, rsvpInfo) => dispatch(actions.addRsvp(id, rsvpInfo)),
    logoutUser:() => dispatch(action.logoutUser())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);