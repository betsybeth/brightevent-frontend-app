import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/EventActions';
import EventForm from '../presentational/EventForm'


class Events extends Component {
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
  handlecreateEventChange = (event) => {
    let { eventsInfo } = this.state
    eventsInfo[event.target.name] = event.target.value
    this.setState(eventsInfo)
  }
  handlecreateEventSubmit = (event) =>{
    event.preventDefault();
    const eventsDetails = {
      name:this.state.eventsInfo.name,
      description:this.state.eventsInfo.description,
      category:this.state.eventsInfo.category,
      date_of_event:this.state.eventsInfo.date_of_event,
      location:this.state.eventsInfo.location
    }
    this.props.createEvent(eventsDetails)
    this.setState(eventsDetails:"")
  }

  render(){


    return(
      <div>
         <EventForm
           oncreateEventSubmit={this.handlecreateEventSubmit}
           oncreateEventSubmit={this.handlecreateEventSubmit}
           {...this.state.event}
         />
      </div>

    );
  }
 }
 const mapStateToProps = state => {
   return {
     userInfo: state.event,

   }
 }
 const mapDispatchToProps = dispatch => {
   return {
     createEvent: eventsDetails => dispatch(actions.createEvent(eventsDetails)),
   }
 };

export default connect(mapStateToProps, mapDispatchToProps)(Events);
