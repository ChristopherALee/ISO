import * as FollowsApiUtil from '../../util/follows/follows_api_util';
import { receiveAllUsers } from '../user/user_actions';

export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_SINGLE_FOLLOW = 'RECEIVE_SINGLE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveAllFollows = (follows) => {
  return {
    type: RECEIVE_ALL_FOLLOWS,
    follows: follows
  };
};

export const receiveSingleFollow = (follow) => {
  return {
    type: RECEIVE_SINGLE_FOLLOW,
    follow: follow
  };
};

export const removeFollow = (follow) => {
  return {
    type: REMOVE_FOLLOW,
    followId: follow.id
  };
};

export const fetchAllFollows = () => dispatch => {
  return (
    FollowsApiUtil.fetchAllFollows().then(
      (follows) => {
        dispatch(receiveAllFollows());
        return follows;
      }
    )
  );
};

export const createFollow = (follow) => dispatch => {
  return (
    FollowsApiUtil.createFollow(follow).then(
      (users) => {
        dispatch(receiveAllUsers(users));
        return users;
      }
    )
  );
};

export const removeSingleFollow = (follow) => dispatch => {
  return (
    FollowsApiUtil.removeFollow(follow.id).then(
      (follow) => {
        dispatch(removeFollow(follow));
        return follow;
      }
    )
  );
};
