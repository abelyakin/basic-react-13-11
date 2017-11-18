import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.defaultOpen
    }
  }

  render() {
    if (!this.props.article.comments) return (null);

    const commentsItems = this.props.article.comments.map((comment) =>
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>)

    return (
      <div>
        <h3>
          Comments
          <button onClick={this.handleClick}>
            {this.state.isOpen ? 'close' : 'open'}
          </button>
        </h3>
        {this.state.isOpen && <ul>{commentsItems}</ul>}
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
