const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: comment
  });
};

const updateComment = (comment) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: comment
  });
};

const deleteComment = (commentId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  });
};
