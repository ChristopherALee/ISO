import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';

const App = () => {
  return (
    <div id='iso-app'>
      <header>
        <h1>Welcome to ISO</h1>
      </header>

      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
    </div>
  );
};

export default App;
