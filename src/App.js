require('./App.css')

let React = require('react')
let Comment = require('./Comment.js')
let Welcome = require('./Welcome.js')
let logo = require('./logo.svg')

var App = React.createClass({
  render () {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name="Edite" />
        <Comment author={{ name: 'Sara', avatarUrl: 'http://placekitten.com/g/64/64' }} date={new Date()} text="First!" />
        <Comment author={{ name: 'Joann', avatarUrl: 'http://placekitten.com/g/64/64'}} date={new Date()} text="Second :(" />
      </div>
    )
  }
})

module.exports = App
