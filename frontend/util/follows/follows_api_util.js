export const fetchAllFollows = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/follows'
  });
};

export const fetchSingleFollow = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/follows/${id}`
  });
};

export const createFollow = (follow) => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { follow }
  });
};

export const removeFollow = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${id}/unfollow`
  });
};
