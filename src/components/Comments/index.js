// Write your code here

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

export default class Comments extends Component {
  state = {name: '', comment: '', commentList: []}

  handelName = e => {
    const yourname = e.target.value

    this.setState({name: yourname})
  }

  HandleLikeEvent = id => {
    this.setState(prev => ({
      commentList: prev.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  HandleDeleteEvent = id => {
    this.setState(prev => ({
      commentList: prev.commentList.filter(each => each.id !== id),
    }))
  }

  handelComment = e => {
    const yourcomment = e.target.value

    this.setState({comment: yourcomment})
  }

  handleSubmitEvent = e => {
    e.preventDefault()

    const {name, comment, commentList} = this.state

    const newCommentObj = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState({
      commentList: [...commentList, newCommentObj],
      name: '',
      comment: '',
    })
  }

  render() {
    const {name, comment, commentList} = this.state
    // console.log(name, comment)
    // console.log(commentList)

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
              required
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
              required
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
          <p className="count">{commentList.length}</p>
          <p>Comments</p>
        </div>
        <ul className="comment-list-container">
          {commentList.map(each => (
            <CommentItem
              HandleLikeEvent={this.HandleLikeEvent}
              HandleDeleteEvent={this.HandleDeleteEvent}
              key={each.id}
              each={each}
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
            />
          ))}
        </ul>
      </div>
    )
  }
}
