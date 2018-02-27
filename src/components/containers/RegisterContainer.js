import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RegisterForm } from '../presentational/RegisterForm'
import { LoginForm } from '../presentational/LoginForm'
import * as actions from '../../actions/index'


class RegisterContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      registerData: {
        name:"",
        email:"",
        password:"",
        confirm:""
      },
      loginData: {
        email:"",
        password:""
      }

    }
    this.handleSignupChange = this.handleSignupChange.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    this.handleSignInChange = this.handleSignInChange.bind(this)
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this)
  }
  handleSignupChange = event =>{

    let { registerData } = this.state
    console.log('>>>>>', registerData.name);
    registerData[event.target.name] = event.target.value
    console.log('.....', event.target.value);
    this.setState(registerData)
  }
  handleSignupSubmit= event =>{
    event.preventDefault();
    const user  ={
        name: this.state.registerData.name,
        email: this.state.registerData.email,
        password: this.state.registerData.password,
        confirm: this.state.registerData.confirm

    }
    this.props.registerUser(user)
    console.log('>DSDDD', user)
    this.setState(user: "")


  }
  handleSignInChange = e =>{
    let { loginData } = this.state
    loginData[e.target.email] = e.target.value
    this.setState(loginData)
  }
  handleSignInSubmit = e =>{
    e.preventDefault();
    const logininfo = {
      email:this.state.loginData.email,
      confirm:this.state.loginData.password
    }
    this.props.loginUser(logininfo)
    this.setState(logininfo: "")
  }

 render(){
   return(
     <div>
        <RegisterForm
          onSubmit={this.handleSignupSubmit}
          onChange={this.handleSignupChange}
          registerData={this.state.registerData}
        />
        <LoginForm
        onSubmit={this.handleSignInSubmit}
        onChange={this.handleSignInChange}
        loginData={this.state.loginData}
        />

     </div>

   );
 }
}
const mapStateToProps = state =>{
  return {
    userinfo: state.auth,

  }
}
const mapDispatchToProps = dispatch =>{
return {
  registerUser: user => dispatch(actions.registerUser(user))
}
};


 export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
