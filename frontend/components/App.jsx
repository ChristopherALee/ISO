import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';

const App = () => {
  return (
    <div id='iso-app'>
      <header>
        <h1>Welcome to ISO</h1>
      </header>

      <Route path='/signup' container={SessionFormContainer} />
      <Route path='/login' container={SessionFormContainer} />
    </div>
  );
};

export default App;
