let React = require('react')

var Avatar = React.createClass({
  render () {
    return (
      <img className="Avatar" src={this.props.user.avatarUrl} alt={this.props.user.name} />
    )
  }
})

module.exports = Avatar
