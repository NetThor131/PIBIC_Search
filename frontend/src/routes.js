import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import login from "./pages/login"

// import { Container } from './styles';

export default class routes extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/login" component = { login } />
            </Switch>
        </BrowserRouter>
    );
  }
}
