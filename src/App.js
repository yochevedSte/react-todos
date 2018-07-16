import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Todos'
import Todos from './Todos';
import PropTypes from 'prop-types';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.props.applicationName}</h1>
        </header>
        <Todos buttonText="Add Item"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
  applicationName: PropTypes.string.isRequired
};
export default App;
