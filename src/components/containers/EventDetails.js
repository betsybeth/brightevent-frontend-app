import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import * as actions from '../../actions/EventActions';
import Navbar from '../presentational/NavBar';
import eventImage from './../../events.jpg';
var hdate = require('human-date');
class EventDetails extends  Component {
  constructor(props){
    super(props);
    this.state = {
      email:''
    };
  } 
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.getOneEvent(id);
    this.props.getRsvp(id);
  }
  // handles creating rsvps
  render(){
    const  events  = this.props.Event.request.message;
    const isLoggedIn = this.props.auth.data.authenticated;
    const result = this.props.Event.rsvp.info;
    
    return(
      <div>
        { isLoggedIn ?
          <Navbar 
            isLoggedIn = {this.props.auth.data.authenticated}
          />: null}
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
                <div className="rsvp">
                  <h3 className="listRsvp">Attendees </h3>
                  { result &&  result.map((eventdetail) => {
                    return(        
                      <h6 className="listRsvp">{eventdetail.email}</h6>
             
                    );
                  })} </div>
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
    getOneEvent:(id) => dispatch(actions.getOneEvent(id)),
    getRsvp:(id) => dispatch(actions.getRsvp(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
