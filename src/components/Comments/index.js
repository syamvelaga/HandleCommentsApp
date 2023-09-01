// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

// Write your code here

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

export default class Comments extends Component {
  state = {name: '', comment: '', isLiked: false, commentList: []}

  handelName = e => {
    const yourname = e.target.value

    this.setState({name: yourname})
  }

  handelComment = e => {
    const yourcomment = e.target.value

    this.setState({comment: yourcomment})
  }

  handleSubmitEvent = e => {
    e.preventDefault()

    const {name, comment, commentList} = this.state

    const newCommentObj = {id: uuidv4(), name, comment}

    this.setState({
      commentList: [...commentList, newCommentObj],
      name: '',
      comment: '',
    })
  }

  render() {
    const {name, comment, commentList, isLiked} = this.state
    // console.log(name, comment)
    // console.log(commentList)

    return (
      <div className="main-container">
        <div className="comments-create-container">
          <form onSubmit={this.handleSubmitEvent}>
            <h1>Comments</h1>
            <br />
            <p>Say Something about 4.0 Technologies</p>
            <input
              value={name}
              onChange={this.handelName}
              type="text"
              placeholder="Your Name"
            />
            <br />
            <br />
            <textarea
              value={comment}
              onChange={this.handelComment}
              rows="7"
              cols="25"
              type="text"
              placeholder="Your Comment"
            />
            <br />
            <br />
            <button type="submit">Add Comment</button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <br />
        <hr />
        <div className="count-comments">
          <p className="count">2</p>
          <p>Comments</p>
        </div>
        <ul className="comment-list-container">
          {commentList.map(each => (
            <CommentItem isLiked={isLiked} key={each.id} each={each} />
          ))}
        </ul>
      </div>
    )
  }
}
