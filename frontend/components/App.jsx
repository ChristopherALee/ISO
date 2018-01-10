import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/protected_route_util';
import NavBarContainer from './navbar/navbar_container';
import LandingPageContainer from './landing_page/landing_page_container';
import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import FeedContainer from './feed/feed_container';
import ProfileContainer from './profile/profile_container';
import DiscoverContainer from './discover/discover_container';
import PhotoContainer from './photo/photo_container';
// import MainContainer from './main/main_container';
import About from './about/about';

const App = () => {
  return (
    <div id='iso-app'>
      <header>
        {/* <h1>Welcome to ISO</h1> */}
        {/* <Route exact path='/feed' component={GreetingContainer} /> */}
      </header>

      <Route path='/' component={NavBarContainer}/>
      <Route exact path='/' component={LandingPageContainer} />

      {/* <Route path='/' component={MainContainer} /> */}
      <Switch>
        <ProtectedRoute exact path='/feed' component={FeedContainer} />
        <Route exact path='/discover' component={DiscoverContainer} />
        <AuthRoute path='/signup' component={SessionFormContainer} />
        <AuthRoute path='/login' component={SessionFormContainer} />
        <Route exact path='/about' component={About} />
        <Route exact path='/:username' component={ProfileContainer} />
        <Route exact path='/photos/:photoId' component={PhotoContainer} />
      </Switch>

    </div>
  );
};

export default App;
