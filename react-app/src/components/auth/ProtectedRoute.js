// React Dependencies
import React from 'react';
// React Router Dom Dependencies
import { Route, Redirect } from 'react-router-dom';

// Define Protected Route Component
// If there is an authenticated prop set to true, display the component, else, redirect them to the home page
const ProtectedRoute = props => {
  return (
    <Route {...props}>
      {(props.authenticated)? props.children  : <Redirect to="/" />}
    </Route>
  )
};

export default ProtectedRoute;
