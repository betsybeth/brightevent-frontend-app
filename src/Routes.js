import React from 'react'; // eslint-disable-line no-unused-vars
import { Switch, Route } from 'react-router';
import Login from './components/containers/Login';
import PrivateRoute from './components/containers/PrivateRoute';
import Register from './components/containers/Register';
import Dashboard from './components/containers/Dashboard';
import EditEventForm from './components/presentational/EditEventForm';
import EventDetails from './components/containers/EventDetails';
import PublicEvents from './components/containers/publicEvents';
import SingleEvent from './components/containers/SingleEvent';




const Routes = () => (
  <Switch>
    <Route exact path="/" component={PublicEvents} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute path="/edit-event" component={EditEventForm} />
    <PrivateRoute path="/eventDetails/:id" component={EventDetails} />
    <PrivateRoute path="/public-events" component={PublicEvents} />
    <Route path="/singleEvent/:id" component={SingleEvent} />
    
    

  </Switch>

);

export default Routes;
