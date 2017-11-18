import React, { Component } from 'react'

class Comment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.defaultOpen
    }
  }

  render() {
    const { comment } = this.props

    return (
      <div>
        <h4>{comment.user}</h4>
        <p>{comment.text}</p>
      </div>
    )
  }
}


export default Comment