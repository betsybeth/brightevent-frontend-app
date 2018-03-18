import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import * as actions from '../../actions/EventActions';
import Navbar from '../presentational/NavBar';
import EventForm from '../presentational/EventForm';
import EventDashboard from '../presentational/EventDashboard';



class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      eventsInfo: {
        name: "",
        description:"",
        category:"",
        date_of_event:"",
        location:""
      }
    }
    
  }
  handleCreateEventChange = (event) => {
    let { eventsInfo } = this.state
    eventsInfo[event.target.name] = event.target.value
    this.setState(eventsInfo)
  }

  handleCreateEventSubmit = (event) => {
    event.preventDefault();
    const eventsDetails = {
      name: this.state.eventsInfo.name,
      description: this.state.eventsInfo.description,
      category: this.state.eventsInfo.category,
      date_of_event: this.state.eventsInfo.date_of_event,
      location: this.state.eventsInfo.location
    }
    this.props.createEvent(eventsDetails)
    this.setState(eventsDetails)
  }

  render(){

    return(
      <div>
        <ToastContainer />
        <Navbar />
        <EventDashboard />
        
      </div>

    );
  }
 }
 const mapStateToProps = state => {
   return {
     userInfo: state.event,
     token: state.auth.user.token_

   }
 }
 const mapDispatchToProps = dispatch => {
   return {
     createEvent: eventsDetails => dispatch(actions.createEvent(eventsDetails)),
   }
 };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
