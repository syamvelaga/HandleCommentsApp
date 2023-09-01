// Write your code here

import {formatDistanceToNow} from 'date-fns'

import './index.css'

function CommentItem(props) {
  const {each, isLiked} = props
  // console.log(each)
  const {name, comment} = each

  const commentCreatedTime = formatDistanceToNow(new Date())

  console.log(formatDistanceToNow(new Date()))

  const firstLetter = name[0].toUpperCase()

  function HandelLikebutton() {
    console.log(!isLiked)
  }

  return (
    <li>
      <div>
        <div className="name-comment-container">
          <p className="round">{firstLetter}</p>
          <div className="name-container">
            <h1 className="name">
              {name} <span className="formated">{commentCreatedTime}</span>
            </h1>

            <p className="comment">{comment}</p>
          </div>
        </div>
        <div className="like-delete-container">
          <div className="like-container">
            <button
              onClick={HandelLikebutton()}
              className="delete"
              type="button"
            >
              <img
                alt="like"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              />
            </button>

            <p className="like-name">Like</p>
          </div>
          <div>
            <button className="delete" type="button">
              <img
                alt="delete"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              />
            </button>
          </div>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
