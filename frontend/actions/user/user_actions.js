import * as UserApiUtil from '../../util/users/users_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const START_LOADING_UPLOAD = 'START_LOADING_UPLOAD';

export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const receiveSingleUser = (user) => {
  return {
    type: RECEIVE_SINGLE_USER,
    user
  };
};

export const startLoadingUpload = () => {
  return {
    type: START_LOADING_UPLOAD
  };
};

export const fetchAllUsers = (users) => dispatch => {
  return (
    UserApiUtil.fetchUsers().then(
      (users) => {
        dispatch(receiveAllUsers(users));
        return users;
      }
    )
  );
};

export const fetchSingleUser = (user) => dispatch => {
  return (
    UserApiUtil.fetchSingleUser(user).then(
      (user) => {
        dispatch(receiveSingleUser(user));
        return user;
      }
    )
  );
};

export const updateUser = (user, username) => dispatch => {
  dispatch(startLoadingUpload());

  return (
    UserApiUtil.updateUser(user, username).then(
      (user) => {
        dispatch(receiveSingleUser(user));
        return user;
      }
    )
  );
};
