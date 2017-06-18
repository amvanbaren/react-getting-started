require('./App.css')

let React = require('react')
let Welcome = require('./Welcome.js')
let logo = require('./logo.svg')

var App = React.createClass({
  render () {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    )
  }
})

module.exports = App
