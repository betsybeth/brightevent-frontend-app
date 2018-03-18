import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RingLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify'
import * as actions from '../../actions/UserActions'
import Navbar from '../presentational/NavBar';
import LoginForm  from '../presentational/LoginForm';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            loginData: {
                email: "",
                password:""
              },    
        }
    }

    handleSignInChange = e => {
        let { loginData } = this.state
        loginData[e.target.name] = e.target.value
        this.setState(loginData)
      }
    
    handleSignInSubmit = e => {
    e.preventDefault();
    const loginInfo = {
        email:this.state.loginData.email,
        password:this.state.loginData.password
    }
    this.props.loginUser(loginInfo).then((response)=> {
        this.props.history.push('/dashboard');
        let token = response.value.data.token
        localStorage.setItem('token', token)
        toast.success(response.value.data.message);   
    }).catch((error) => {
        if (error.response) {
        toast.error(error.response.data.message);
        }
    })
    this.setState(loginInfo)
    }
    


    render() {
        const { loading } = this.props
        console.log('asdfg,' ,this.props)
        if (loading === true){
            return (
                <div className='sweet-loading'>
                <RingLoader
                  color={'#123abc'} 
                  loading={this.props.userInfo.request.loading}
                />
              </div>
            )

        }
        return (
          <div>
            <Navbar/> 
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

const mapStateToProps = state => {
    return {
      userInfo: state.auth
  
    }
  }
const mapDispatchToProps = dispatch => {
    return {
        loginUser: loginInfo => dispatch(actions.loginUser(loginInfo))
    }
};
    
export default connect(mapStateToProps, mapDispatchToProps)(Login);