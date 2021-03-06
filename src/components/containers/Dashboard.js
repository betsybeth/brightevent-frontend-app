import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';
import * as actions from '../../actions/EventActions';
import * as action from '../../actions/UserActions';
import Navbar from '../presentational/NavBar';
import EventForm from '../presentational/EventForm';
import EditEventForm from '../presentational/EditEventForm';
import EventDashboard from '../presentational/EventDashboard';



class Dashboard extends Component {
  constructor(props){
    super(props);
    // component state
    this.state = {
      eventsInfo: {
        id:'',
        name: '',
        description:'',
        category:'',
        date_of_event:'',
        location: ''
      },
      editData: {
        id:'',
        name: '',
        description:'',
        category:'',
        date_of_event:'',
        location: ''
      },
      rsvpinfo:{
        name:'',
        email:'',
        phone_no:'',
        category:'',
      },
      createEvent:false,
      EditEvent:false,
      displayAddModal: 'none',
      displayEditModal:'none',
      searchTerm:false,
    };
    
    
  }
  // mounting a component to get all events
  // lifecycle method used due to side effects results
  componentDidMount(){
    this.props.getEvents();
     
  }
  
  //  callback functions
  handleChange = (event) => {
    let { eventsInfo } = this.state;
    eventsInfo[event.target.name] = event.target.value;
    this.setState({eventsInfo});
  }
  // Handles submiting of data
  handleCreateEventSubmit = (event) => {
    event.preventDefault();
    const eventsDetails = {
      name: this.state.eventsInfo.name,
      description: this.state.eventsInfo.description,
      category: this.state.eventsInfo.category,
      date_of_event: moment(this.state.eventsInfo.date_of_event).format('YYYY-MM-DD'),
      location: this.state.eventsInfo.location
    };
    // dispatching an action to enable completion of promise first.
    this.props.createEvent(eventsDetails).then((response) => {
      toast.success(response.value.data.message);
      // state is updated to none to close the modal
      this.setState({
        displayAddModal: 'none', eventsInfo: {
          id:'',
          name: '',
          description:'',
          category:'',
          date_of_event:'',
          location: ''
        }
      });
      this.props.getEvents();
    }).catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    });
    
  }
 

  // callback function to enable putting of input in the forms
  handleEditEventChange = (event) => {
    const { editData } = this.state;
    editData[event.target.name]= event.target.value;
    this.setState({editData});
  }
  // handles submitting of an editted data
  handleEditEventSubmit = (event) => {
    event.preventDefault();
    const editDetails = {
      name: this.state.editData.name,
      description: this.state.editData.description,
      category: this.state.editData.category,
      date_of_event: moment(this.state.editData.date_of_event).format('YYYY-MM-DD'),
      location: this.state.editData.location

    };
    const  currentId = this.state.editData.id;
    this.props.editEvent(currentId, editDetails)
      .then((response) => {
        toast.success(response.value.data.message);
        this.setState({
          displayEditModal: 'none'
        });
      }).catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        }
      });
    this.setState({editDetails});
        
  }
  // handles the glyphicon for edit to enable popping up of data 
  handleClick = (event, editData) => {
    event.preventDefault();   
    this.setState({editData});
    
  } 
  // handles deleting of a single event 
  handleDeleteClick = id  => e => {
    e.preventDefault();
    if(id) {
      this.props.deleteEvent(id).then((response) => {
        toast.success(response.value.data.message);
        this.props.getEvents();
      }).catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        }  
      });
    }
  }

  handleCloseModal = () => {
    this.setState({
      displayEditModal:'none'
    });
  }
  handleCloseAddModal = () => {
    this.setState({
      displayAddModal:'none'
    });
  }
  // Display create event modal
  handleDisplayModal = () => {
    this.setState({
      displayAddModal: 'block'
    });
  }

  // Display edit modal
  handleDisplayEditModal = () => { 
    this.setState({
      displayEditModal: 'block'
    });
  }

  handleLogout = () => {
    this.props.logoutUser().then((response)=> {
      localStorage.clear();
      toast.success(response.value.data.message);
      this.props.history.push('/');  
    }).catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message); } });
  }

  handleSearchChange = (event) => {
    event.preventDefault();
    event.target.value ? this.props.searchEvent(event.target.value).then((response) => {
      this.setState({searchTerm:true});
      toast.success(response.value.data.mesage);
    }).catch((error) => {
      if (error.response) {
        return error; } }):
      this.props.getEvents();
  }
  render(){

    return(
      <div>
        <ToastContainer />  
        <Navbar 
          isLoggedIn={this.props.auth.data.authenticated} 
          handleLogout={this.handleLogout}
          showChangeForm = {this.state.showChangeForm}
       
        />
        {/* passing of props to the children component  */}
        <EventDashboard
          getEventPages={this.props.getEventPages}
          handleDeleteClick={this.handleDeleteClick}
          handleClick={this.handleClick}
          data={this.props.Event.data}
          handleSearchChange={this.handleSearchChange}
          handleDisplayModal ={this.handleDisplayModal}
          handleDisplayEditModal={this.handleDisplayEditModal}
          isSearch={this.props.Event.request.data}
          pages={this.props.Event.request.pages}
          nextPage={this.props.Event.request.nextPage}
          prevPage={this.props.Event.request.prevPage}
          {...this.state.eventsInfo}
          searchTerm={this.state.searchTerm}
        

        />
        <EventForm 
          handleCreateEventSubmit={this.handleCreateEventSubmit}
          handleChange={this.handleChange}
          displayModal={this.state.displayAddModal}
          {...this.state.eventsInfo}
          handleCloseAddModal={this.handleCloseAddModal}
        />  


        <EditEventForm 
          handleEditEventChange={this.handleEditEventChange}
          handleEditEventSubmit={this.handleEditEventSubmit}
          displayEditModal={this.state.displayEditModal}
          handleDismissEditModal={this.handleDisplayEditModal}
          {...this.state.editData}
          handleCloseModal={this.handleCloseModal}
       
        />  
      </div>

    );
  } 
} 
//  Enable redux store state  to be passed as props
const mapStateToProps = state => {
  return {
    Event: state.event,
    auth:state.auth
  };
};
//  Enable of the redux action to be dispatch as a prop to react
const mapDispatchToProps = dispatch => {
  return {
    createEvent: eventsDetails => dispatch(actions.createEvent(eventsDetails)),
    getEvents: () => dispatch(actions.getEvents()),
    publicEvents:() => dispatch(actions.publicEvents()), 
    editEvent: (id, editDetails) => dispatch(actions.editEvent(id, editDetails)),
    deleteEvent: id => dispatch(actions.deleteEvent(id)),
    searchEvent:searchData => dispatch(actions.searchEvent(searchData)),
    logoutUser:() => dispatch(action.logoutUser()),
    getEventPages: url => dispatch(actions.getEventPages(url)),
    addRsvp:(id, rsvpData) => dispatch(actions.addRsvp(id, rsvpData))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
