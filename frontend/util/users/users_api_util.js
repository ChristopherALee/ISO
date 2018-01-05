export const fetchSingleUser = (username) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${username}`
  });
};
