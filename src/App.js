import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  formatName () {
    return this.props.firstName + ' ' + this.props.lastName
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello {this.formatName()}</h1>
        </div>
      </div>
    )
  }
}

export default App
