let React = require('react')

var Welcome = React.createClass({
  render () {
    return (
      <h1>Welcome {this.props.name}</h1>
    )
  }
})

module.exports = Welcome
