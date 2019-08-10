import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import AxiosComponent from './components/AxiosComponent';
import NotFound from './components/NotFound';



export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/axios" component={AxiosComponent} />
          <Route component={NotFound} />
        </Switch>
        
        
      </React.Fragment>
      
    )
  }
}
