import React from 'react';
import { Link } from 'react-router-dom';

const Comments = (props) => {
  const deleteCommentButton = (comment) => {
    const deleteCommentAction = () => {
      props.deleteComment(comment.id);
    };

    if (comment && props.sessionUser && props.sessionUser === comment.authorName) {
      return (
        <div className="delete-comment-button" onClick={deleteCommentAction}>X</div>
      );
    } else {
      return null;
    }
  };

  const toggleAuthorName = (comment) => {
    if (comment.authorName && comment.authorName.length > 15) {
      return (
        comment.authorName.slice(0, 15) + "..."
      );
    } else {
      return (
        comment.authorName
      );
    }
  };

  const comments = props.photoComments.map( (comment, idx) => {
    return (
      <li key={idx}>
        <div className="comment-author-profile-photo-container">
          <div
            className="comment-author-profile-photo"
            style={{ backgroundImage: `url(${comment.authorProfilePhoto})`}}
            >
          </div>
        </div>

        <div className="comment-text-contents">
          <Link to={`/${comment.authorName}`}>{toggleAuthorName(comment)}</Link>
          <p>{comment.body}</p>
        </div>

        {deleteCommentButton(comment)}
      </li>
    );
  });

  return (
    <div className="comments-content">
      <ul>
        {comments}
      </ul>
    </div>
  );
};

export default Comments;
