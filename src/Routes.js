import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './components/containers/Login';
import Register from './components/containers/Register';
import Dashboard from './components/containers/Dashboard';
import EditEventForm from './components/presentational/EditEventForm';
import RsvpForm from './components/presentational/RsvpForm';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/edit-event" component={EditEventForm} />
    <Route path="/rsvp" component={RsvpForm} />
  </Switch>

);

export default Routes;
