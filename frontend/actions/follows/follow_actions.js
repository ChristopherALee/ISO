import * as FollowsApiUtil from '../../util/follows/follows_api_util';
import { receiveAllUsers, receiveSingleUser } from '../user/user_actions';

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

// Uses receiveAllUsers action to update state of new follows per user
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

// Uses receiveSingleUser to update state of removed follows per user
export const deleteFollow = (follow) => dispatch => {
  return (
    FollowsApiUtil.removeFollow(follow.followee_id).then(
      (users) => {
        dispatch(receiveAllUsers(users));
        return users;
      }
    )
  );
};
