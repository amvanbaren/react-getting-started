let React = require('react')

let Comment = React.createClass({
  formatDate (date) {
    return date.toISOString()
  },

  render () {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={this.props.author.avatarUrl}
            alt={this.props.author.name}
          />
          <div className="UserInfo-name">
            {this.props.author.name}
          </div>
        </div>
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
