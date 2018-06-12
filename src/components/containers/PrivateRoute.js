import React from 'react';// eslint-disable-line no-unused-vars
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { toast} from 'react-toastify';

const PrivateRoute = ({isAuthenticated, component : Component, ...rest}) => (
  <Route {...rest} render={props => isAuthenticated ? <Component {...props} /> 
    :(toast.success('Please Login to continue'), <Redirect to="/" />)} />
);

const  mapStateToProps = (state) => {
  return {
    isAuthenticated : state.auth.data.authenticated
  };
};
export default connect(mapStateToProps)(PrivateRoute);