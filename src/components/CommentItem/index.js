// Write your code here

import {formatDistanceToNow} from 'date-fns'

import './index.css'

function CommentItem(props) {
  const {
    each,
    HandleLikeEvent,
    HandleDeleteEvent,
    initialContainerBackgroundClassNames,
  } = props

  const {name, comment, id, isLiked} = each

  const commentCreatedTime = formatDistanceToNow(new Date())

  const firstLetter = name[0].toUpperCase()

  function HandelLikeButton() {
    HandleLikeEvent(id)
  }

  function HandelDelete() {
    HandleDeleteEvent(id)
  }

  const randomIndex = Math.floor(
    Math.random() * initialContainerBackgroundClassNames.length,
  )

  const randomClassName = initialContainerBackgroundClassNames[randomIndex]

  console.log(randomClassName)

  const url = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div>
        <div className="name-comment-container">
          <p className={`round ${randomClassName}`}>{firstLetter}</p>
          <div className="name-container">
            <h1 className="name">
              {name} <span className="formated">{commentCreatedTime}</span>
            </h1>

            <p className="comment">{comment}</p>
          </div>
        </div>
        <div className="like-delete-container">
          <div className="like-container">
            <button onClick={HandelLikeButton} className="delete" type="button">
              <img alt="like" src={url} />
            </button>

            <p className="like-name">{isLiked ? 'Liked' : 'Like'}</p>
          </div>
          <div>
            <button
              data-testid="delete"
              onClick={HandelDelete}
              className="delete"
              type="button"
            >
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
