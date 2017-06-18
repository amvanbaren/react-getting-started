let React = require('react')
let Avatar = require('./Avatar.js')

var UserInfo = React.createClass({
  render () {
    return (
      <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">
          { this.props.user.name }
        </div>
      </div>
    )
  }
})

module.exports = UserInfo