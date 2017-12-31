import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// TESTING PURPOSES START
import * as SessionApiUtil from './util/session/session_api_util';

window.signUp = SessionApiUtil.signUp;
window.login = SessionApiUtil.login;
window.logout = SessionApiUtil.logout;
// TESTING ENDS

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<h1>ISO</h1>, root);
});
