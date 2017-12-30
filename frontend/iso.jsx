import React from 'react';
import ReactDOM from 'react-dom';

window.signUp = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {
      user
    }
  }).then(
    user => console.log(user)
  );
};

window.login = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {
      user
    }
  }).then(
    user => console.log(`${user.username} has logged in!`)
  );
};

window.logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  }).then(
    () => console.log('logged out!')
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>ISO</h1>, root);
});
