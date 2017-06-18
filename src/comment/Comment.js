let React = require('react')
let UserInfo = require('./UserInfo.js')

let Comment = React.createClass({
  formatDate (date) {
    return date.toISOString()
  },

  render () {
    return (
      <div className="Comment">
        <UserInfo user={this.props.author} />
        <div className="Comment-text">
          {this.props.text}
        </div>
        <div className="Comment-date">
          {this.formatDate(this.props.date)}
        </div>
      </div>
    );
  }
})

module.exports = Comment
