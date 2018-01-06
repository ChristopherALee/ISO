import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import { ProtectedRoute } from '../../util/protected_route_util';
import NavBarContainer from '../navbar/navbar_container';
import LandingPageContainer from '../landing_page/landing_page_container';
import SessionFormContainer from '../session/session_form_container';
import GreetingContainer from '../greeting/greeting_container';
import FeedContainer from '../feed/feed_container';
import ProfileContainer from '../profile/profile_container';
import DiscoverContainer from '../discover/discover_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllPhotos();
  }

  render() {
    return (
      <div id='main-container'>
        <Switch>
          <ProtectedRoute exact path='/feed' component={FeedContainer} />
          <Route exact path='/discover' component={DiscoverContainer} />
          <AuthRoute path='/signup' component={SessionFormContainer} />
          <AuthRoute path='/login' component={SessionFormContainer} />
          <Route exact path='/:username' component={ProfileContainer} />
        </Switch>
      </div>
    );
  }
}

export default Main;
