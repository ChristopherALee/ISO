import React from 'react';

const Comments = (props) => {
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
          <p>{comment.authorName}</p>
          <p>{comment.body}</p>
        </div>
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
