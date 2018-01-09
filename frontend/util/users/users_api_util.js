export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};

export const fetchSingleUser = (user) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${user}`
  });
};

export const updateUser = (user, userId) => {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}`,
    processData: false,
    contentType: false,
    data: user
  });
};
