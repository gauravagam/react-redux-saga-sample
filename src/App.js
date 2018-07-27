import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import { Redirect } from 'react-router';
import { Switch } from 'react-router'
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import { connect } from "react-redux";
import EditComponent from './components/EditComponent';

class App extends Component {
  render() {
    console.log('localstorage ',JSON.parse(localStorage.getItem('user')));
    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginComponent} />
          <PrivateRoute path="/home" component={HomeComponent}  />
          <PrivateRoute path="/editProduct" component={EditComponent}/>
        </Switch>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} 
    render={props => JSON.parse(localStorage.getItem('user')) ? (<Component {...props} />)
    : (<Redirect
      to={{
        pathname: "/",
        state: { from: props.location }
      }} />)} />)
}


export default App





