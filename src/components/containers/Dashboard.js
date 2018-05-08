import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify'
import * as actions from '../../actions/EventActions';
import * as action from '../../actions/UserActions'
import Navbar from '../presentational/NavBar';
import EventForm from '../presentational/EventForm';
import EditEventForm from '../presentational/EditEventForm'
import EventDashboard from '../presentational/EventDashboard';
import RsvpForm from '../presentational/RsvpForm';



class Dashboard extends Component {
  constructor(props){
    super(props)
    // component state
    this.state = {
      eventsInfo: {
        id:"",
        name: "",
        description:"",
        category:"",
        date_of_event:"",
        location: ""
      },
      editData: {
        name: "",
        description:"",
        category:"",
        date_of_event:"",
        location: ""
      },
      rsvpInfo:{
        name:"",
        email:"",
        phone_no:""
      },
      createEvent:false,
      EditEvent:false,
      displayAddModal: 'none',
      displayEditModal:'none',
      searchTerm:false,
    }
    
    
  }
  // mounting a component to get all events
  // lifecycle method used due to side effects results
  componentDidMount(){
      this.props.getEvents()
    
  }
  //  callback functions
  handleChange = (event) => {
    let { eventsInfo } = this.state
    eventsInfo[event.target.name] = event.target.value
    this.setState({eventsInfo})
  }
  // Handles submiting of data
  handleCreateEventSubmit = (event) => {
    event.preventDefault();
    const eventsDetails = {
      name: this.state.eventsInfo.name,
      description: this.state.eventsInfo.description,
      category: this.state.eventsInfo.category,
      date_of_event: moment(this.state.eventsInfo.date_of_event).format('YYYY-MM-DD', 'h:mm:ss a'),
      location: this.state.eventsInfo.location
    }
    // dispatching an action to enable completion of promise first.
    this.props.createEvent(eventsDetails).then((response) => {
      toast.success(response.value.data.mesage)
      // state is updated to none to close the modal
      this.setState({
        displayAddModal: 'none'
      })
      this.props.getEvents()
    }).catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    })
    this.setState({eventsDetails})
    
  }
// callback function to enable putting of input in the forms
  handleEditEventChange = (event) => {
    const { editData } = this.state
    editData[event.target.name]= event.target.value
    this.setState({editData})
  }
  // handles submitting of an editted data
  handleEditEventSubmit = (event) => {
    event.preventDefault()
    const editDetails = {
      name: this.state.editData.name,
      description: this.state.editData.description,
      category: this.state.editData.category,
      date_of_event: moment(this.state.editData.date_of_event).format('YYYY-MM-DD', 'h:mm:ss a'),
      location: this.state.editData.location

    }
    const  current_id  = this.state.editData.id
    this.props.editEvent(current_id, editDetails)
    .then((response) => {
      toast.success(response.value.data.mesage)
      this.setState({
        displayEditModal: 'none'
      })
      this.props.getEvents()

    }).catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message);
    }
    })
    this.setState({editDetails});
        
  }
// handles the glyphicon for edit to enable popping up of data 
  handleClick = (event, editData) => {
    // event.preventDefault()   
    this.setState({editData})
    
  } 
  // handles deleting of a single event 
  handleDeleteClick = id  => e => {
    e.preventDefault()
    if(id) {
      this.props.deleteEvent(id).then((response) => {
        toast.success(response.value.data.mesage)
        this.props.getEvents()
      }).catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        }  
      })
    }
  }


  // Display create event modal
  handleDisplayModal = () => {
    this.setState({
      displayAddModal: 'block'
    })
  }

  // Display edit modal
  handleDisplayEditModal = () => { 
   this.setState({
     displayEditModal: 'block'
   })
  }

  handleLogout = () => {
    this.props.logoutUser().then((response)=> {
      localStorage.clear()
    toast.success(response.value.data.message);
    
    })

  }

  handleSearchChange = (event) => {
    event.preventDefault()
    event.target.value ? this.props.searchEvent(event.target.value).then((response) => {
      toast.success(response.value.data.mesage)
    }).catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message) } }):
    this.props.getEvents();
  }
  handlePagination = (event) => {
    event.preventDefault()
    this.props.getBucketPages()
  }

  // handles creating rsvps 
  handleRsvpChange = (event) => {
    let rsvpInfo = this.state
    rsvpInfo[event.target.name] = event.target.value
    this.setState({rsvpInfo})

  }
  handleRsvpSubmit = (event) => {
    event.preventDefault()
    const  rsvpData  ={
      name:this.state.rsvpInfo.name,
      email:this.state.rsvpInfo.email,
      phone_no:this.state.rsvpInfo.phone_no,
      category:this.state.rsvpInfo.category
    }
    const { current_id }  = this.state.editData.id
    this.props.addRsvp(current_id, rsvpData)
  

  }
  handleRsvpClick = (eventId) => {
    console.log("surprisingly the id is", eventId)
    this.props.history.push('/rsvp')
  }

  render(){
    return(
      <div>
        <ToastContainer />  
        <Navbar 
          isLoggedIn={this.props.auth.data.authenticated} 
          handleLogout={this.handleLogout}       
         />
        {/* passing of props to the children component  */}
        <EventDashboard
          handleRsvpClick={this.handleRsvpClick}
          getEventPages={this.props.getEventPages}
          handleDeleteClick={this.handleDeleteClick}
          handleClick={this.handleClick}
          data={this.props.Event.data}
          handleSearchChange={this.handleSearchChange}
          handleDisplayModal ={this.handleDisplayModal}
          handleDisplayEditModal={this.handleDisplayEditModal}
          isSearch={this.props.Event.request.isSearch}
          pages={this.props.Event.request.pages}
          nextPage={this.props.Event.request.nextPage}
          prevPage={this.props.Event.request.prevPage}
          {...this.state.eventsInfo}
        />
        <EventForm 
          handleCreateEventSubmit={this.handleCreateEventSubmit}
          handleChange={this.handleChange}
          displayModal={this.state.displayAddModal}
          {...this.state.eventsInfo}
        />  


        <EditEventForm 
          handleEditEventChange={this.handleEditEventChange}
          handleEditEventSubmit={this.handleEditEventSubmit}
          displayEditModal={this.state.displayEditModal}
          handleDismissEditModal={this.handleDisplayEditModal}
          {...this.state.editData}
       
        />  
        
      </div>

    );
  }
  renderRsvp(){
    <RsvpForm
    handleRsvpChange={this.handleRsvpChange}
    handleRsvpSubmit={this.handleRsvpSubmit}
     />
  }
 }
//  Enable redux store state  to be passed as props
 const mapStateToProps = state => {
   return {
     Event: state.event,
     auth:state.auth
   }
 }
//  Enable of the redux action to be dispatch as a prop to react
 const mapDispatchToProps = dispatch => {
   return {
     createEvent: eventsDetails => dispatch(actions.createEvent(eventsDetails)),
     getEvents: () => dispatch(actions.getEvents()),
     editEvent: (id, editDetails) => dispatch(actions.editEvent(id, editDetails)),
     deleteEvent: id => dispatch(actions.deleteEvent(id)),
     searchEvent:searchData => dispatch(actions.searchEvent(searchData)),
     logoutUser: logoutUser => dispatch(action.logoutUser()),
     getEventPages: url => dispatch(actions.getEventPages(url)),
     addRsvp:(id, rsvpData) => dispatch(actions.addRsvp(id, rsvpData))
   }
 };
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
