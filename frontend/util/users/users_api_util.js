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

export const updateUser = (user, username) => {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${username}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: user
  });
};
