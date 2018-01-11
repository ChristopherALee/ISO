import React from 'react';

const Comments = ({
  currentPhoto,
  currentUser,
  createComment,
  updateComment,
  deleteComment}) => {

  const comments = currentPhoto.comments.map( (comment, idx) => {
    return (
      <li key={idx}>
        <div className="comment-author-profile-photo-container">
          <div
            className="comment-author-profile-photo"
            style={{ backgroundImage: `url(${comment.authorProfilePhoto})`}}
            >
          </div>
        </div>
        <p>{comment.authorName}</p>
        <p>{comment.body}</p>
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
