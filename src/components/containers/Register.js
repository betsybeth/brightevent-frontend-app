import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegisterForm  from '../presentational/RegisterForm'
import { toast, ToastContainer } from 'react-toastify'
import * as actions from '../../actions/UserActions'
import Navbar from '../presentational/NavBar';


class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      registerData: {
        name:"",
        email:"",
        password:"",
        confirm:""
      },
    }
  }
// callback functions
  handleSignUpChange = event => {
    let { registerData } = this.state
    registerData[event.target.name] = event.target.value
    this.setState(registerData)
  }

  handleSignUpSubmit = event => {
    event.preventDefault();
    const user  = {
        name: this.state.registerData.name,
        email: this.state.registerData.email,
        password: this.state.registerData.password,
        confirm: this.state.registerData.confirm
    }
    this.props.registerUser(user).then((response) => {
      this.props.history.push('/dashboard')
      toast.success(response.value.data.mesage)
    }).catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    })
    this.setState(user)
  }


 render(){
  // Enable passing props to the children component 
   return(
    <div> 
      <ToastContainer />
      <RegisterForm
        onsignUpSubmit={this.handleSignUpSubmit}
        onsignUpChange={this.handleSignUpChange}
        onLoginClick={this.onLoginClick}
        {...this.state.registerData}/>
    </div>

   );
 }
}
// enable redux store to pass data to react as props
const mapStateToProps = state => {
  return {
    userInfo: state.auth

  }
}// enable redux action to be passed to react as props  
const mapDispatchToProps = dispatch => {
return {
  registerUser: user => dispatch(actions.registerUser(user))
}
};


 export default connect(mapStateToProps, mapDispatchToProps)(Register);
