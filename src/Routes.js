import React from 'react';
import { Switch, Route } from 'react-router';
import Authentication from './components/containers/Authentication';
import Events from './components/containers/Events'
import LoginForm from './components/presentational/LoginForm'



const Routes = () =>(
  <Switch>
    <Route exact path="/" component={Authentication} />
    <Route path="/login" component={LoginForm} />
    <Route path='/events' component={Events} />
  </Switch>

);

export default Routes;
