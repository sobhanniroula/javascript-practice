import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      
      <div className="container">
        <h1>Welcome</h1>
        <div className="row">
          <div className="col-6">number 1</div>
          <div className="col-6">number 2</div>
        </div>
      </div>
    )
  }
}
