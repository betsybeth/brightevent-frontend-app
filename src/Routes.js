import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './components/containers/Login'
import Register from './components/containers/Register';
import Dashboard from './components/containers/Dashboard';



const Routes = () =>(
  <Switch>

    <Route  exact path="/" component={Login} />
    <Route   path="/login" component={Login} />
    <Route path="/register" component={Register} />  
    <Route path='/dashboard' component={Dashboard} />
  </Switch>

);

export default Routes;
