import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import * as actions from '../../actions/EventActions';
import * as action from '../../actions/UserActions';
import RsvpForm from '../presentational/RsvpForm';
import { Link } from 'react-router-dom';
import eventImage from './../../events.jpg';

class EventDetails extends  Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.getOneEvent(id);
  }
    // handles creating rsvps 
    handleRsvpChange = (event) => {
      let rsvpInfo = this.state
      rsvpInfo[event.target.name] = event.target.value
      this.setState({rsvpInfo})
  
    }
    handleRsvpSubmit = (event, id) => {
      event.preventDefault()
      const  rsvpData  ={
        name:this.state.rsvpInfo.name,
        email:this.state.rsvpInfo.email,
        phone_no:this.state.rsvpInfo.phone_no,
        category:this.state.rsvpInfo.category
      }
      this.props.addRsvp(id, rsvpData)
    
  
    }
  render(){
    const  events  = this.props.Event.request.message;
    return(
      <div className="singleEventCard">
        <div className="card-body">
          <h1 className="card-title">{events.name}</h1>
          <img className="eventimage"src={eventImage} alt='no internet connection'/>
          <h5 className="card-text">{events.description}</h5>
          <h5 className="card-text">{events.date_of_event}</h5>
          <h5 className="card-text">{events.category}</h5>
          <h5 className="card-text">{events.location}</h5>				        
          <button type="submit"  className="btn-rsvp btn-lg btn-success btn-block">
            <Link className="btn-rsvp" to={`/eventDetails/${events.id}/add-rsvp/`}>Add Rsvp</Link>
          </button>     
          <span
            className="gly glyphicon glyphicon-pencil">
          </span>
          <span className="gly glyphicon glyphicon-trash"></span>
          
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
    getOneEvent:(id) => dispatch(actions.getOneEvent(id)),
  
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
