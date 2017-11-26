import React, { Component } from 'react'
import './style.css'

class NewComment extends Component {

  state = {
    username: '',
    comment: ''
  }

  handleChange = ev => {
    const { value, name } = ev.target
    switch (name) {
      case 'username':
        ev.target.className = value.length < 10 ? "invalid" : ""
        this.setState({
          username: value.length < 100 ? value : ''
        })
        break;
      case 'comment':
        ev.target.className = value.length < 20 ? "invalid" : ""
        this.setState({
          comment: value.length < 100 ? value : ''
        })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="container">
        Username: <input value={this.state.username} name="username" onChange={this.handleChange} />
        Comment: <textarea value={this.state.comment} name="comment" onChange={this.handleChange} />
      </div>
    )
  }
}
export default NewComment