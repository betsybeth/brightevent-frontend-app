import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import * as actions from '../../actions/UserActions';
import LoginForm  from '../presentational/LoginForm';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginData: {
        email: '',
        password:''
      },    
    };
  }
  //  callback function handles data for login
    handleSignInChange = e => {
      let { loginData } = this.state;
      loginData[e.target.name] = e.target.value;
      this.setState({loginData,showChangeForm:false});
    }
    
    handleSignInSubmit = e => {
      e.preventDefault();
      const loginInfo = {
        email:this.state.loginData.email,
        password:this.state.loginData.password
      };
      // dispatching of an action
      this.props.loginUser(loginInfo).then((response)=> {
        this.props.history.push('/dashboard');
        let token = response.value.data.token;
        // save the token that is given as response when the promise is completed
        localStorage.setItem('token', token);
        toast.success(response.value.data.message);   
      }).catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        }
      });
      this.setState({loginInfo});
    }


    render() {
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
      );
    }   

}
// enable redux store to pass data to react as props
const mapStateToProps = state => {
  return {
    userInfo: state.auth
  
  };
};
// enable redux action to be passed to react as props  
const mapDispatchToProps = dispatch => {
  return {
    loginUser: loginInfo => dispatch(actions.loginUser(loginInfo)),
        
  };
};
    
export default connect(mapStateToProps, mapDispatchToProps)(Login);