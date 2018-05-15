import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RingLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify'
import * as actions from '../../actions/UserActions'
import Navbar from '../presentational/NavBar';
import LoginForm  from '../presentational/LoginForm';
import ForgotPasswordForm from '../presentational/ForgotPasswordForm';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            loginData: {
                email: "",
                password:""
              },
            changePasswordInfo:{
                old_password:'',
                new_password:''
            },
            showForgotForm:false       
        }
    }
//  callback function handles data for login
    handleSignInChange = e => {
        let { loginData } = this.state
        loginData[e.target.name] = e.target.value
        this.setState({loginData, showForgotForm:false})
      }
    
    handleSignInSubmit = e => {
    e.preventDefault();
    const loginInfo = {
        email:this.state.loginData.email,
        password:this.state.loginData.password
    }
    // dispatching of an action
    this.props.loginUser(loginInfo).then((response)=> {
        this.props.history.push('/dashboard');
        let token = response.value.data.token
        // save the token that is given as response when the promise is completed
        localStorage.setItem('token', token)
        toast.success(response.value.data.message);   
    }).catch((error) => {
        if (error.response) {
        toast.error(error.response.data.message);
        }
    })
    this.setState({loginInfo, showForgotForm:false})
    }
// handle forgot password
    handleForgotpasswordChange = (event) => {
        let changePasswordInfo = this.state
        changePasswordInfo[event.target.name]= event.target.value
       
    }  

    handleForgotPasswordSubmit = (event) => {
        const changePasswordData = this.state.changePasswordInfo
        event.preventDefault()
        this.props.changePassword(changePasswordData).then((response) => {
            toast.success(response.value.data.token)
            this.props.history.push('/login')
        })
    }
    



    render() {
        const showForgotForm = this.state
        return (
          <div>
              {/* passing pf props to the children component */}
              <ToastContainer /> 
            <LoginForm
                onSignInSubmit={this.handleSignInSubmit}
                onSignInChange={this.handleSignInChange}
                {...this.state.loginData}
            />
                    
            
           
          </div>  
        )
    }   

}
// enable redux store to pass data to react as props
const mapStateToProps = state => {
    return {
      userInfo: state.auth
  
    }
  }
// enable redux action to be passed to react as props  
const mapDispatchToProps = dispatch => {
    return {
        loginUser: loginInfo => dispatch(actions.loginUser(loginInfo)),
        changePassword:changePasswordData => dispatch(actions.changePassword(changePasswordData))
        
    }
};
    
export default connect(mapStateToProps, mapDispatchToProps)(Login);