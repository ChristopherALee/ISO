import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/protected_route_util';
import NavBarContainer from './navbar/navbar_container';
import LandingPageContainer from './landing_page/landing_page_container';
import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting/greeting_container';

const App = () => {
  return (
    <div id='iso-app'>
      <header>
        {/* <h1>Welcome to ISO</h1> */}
        {/* <Route exact path='/feed' component={GreetingContainer} /> */}
      </header>

      <Route path='/' component={NavBarContainer}/>
      <Route exact path='/' component={LandingPageContainer} />

      <div id='session-form'>
        <AuthRoute path='/signup' component={SessionFormContainer} />
        <AuthRoute path='/login' component={SessionFormContainer} />
      </div>
    </div>
  );
};

export default App;
