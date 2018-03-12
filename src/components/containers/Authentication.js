import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegisterForm  from '../presentational/RegisterForm'
import LoginForm  from '../presentational/LoginForm'
import * as actions from '../../actions/UserActions'


class Authentication extends Component {
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
          email: "",
          password:""
        },
      Redirect: ""
    }
  }

  handleSignUpChange = event => {
    let { registerData } = this.state
    console.log('>>>>>', registerData.name);
    registerData[event.target.name] = event.target.value
    console.log('.....', event.target.value);
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
    this.props.registerUser(user).then(() => {
      this.props.history.push('/events')
    })
    console.log('>DSDDD', user)
    this.setState(user: "")

  }


  handleSignInChange = e => {
    let { loginData } = this.state
    console.log('sdfgh', loginData.email);
    loginData[e.target.name] = e.target.value
    console.log('.....', e.target.value);
    this.setState(loginData)
  }

  handleSignInSubmit = e => {
    e.preventDefault();
    const loginInfo = {
      email:this.state.loginData.email,
      password:this.state.loginData.password
    }
    console.log(',,ffggffgh,,', loginInfo);
    this.props.loginUser(loginInfo).then(()=> {
      this.props.history.push('/events')
    })
    console.log(',,,,', loginInfo);
    this.setState(loginInfo: "")
   }


 render(){


   return(
     <div>
        <RegisterForm
          onsignUpSubmit={this.handleSignUpSubmit}
          onsignUpChange={this.handleSignUpChange}
          {...this.state.registerData}
        />
        <LoginForm
           onSignInSubmit={this.handleSignInSubmit}
           onSignInChange={this.handleSignInChange}
           {...this.state.loginData}
        />

     </div>

   );
 }
}
const mapStateToProps = state => {
  return {
    userInfo: state.auth,

  }
}
const mapDispatchToProps = dispatch => {
return {
  registerUser: user => dispatch(actions.registerUser(user)),
  loginUser: loginInfo => dispatch(actions.loginUser(loginInfo))
}
};


 export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
