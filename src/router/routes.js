import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { defaultLocale } from '../config';

const Home = lazy(() => import('../Page/Home'));

class AppRouter extends Component {
  render() {
    return (
      <Suspense fallback={<div />}>
        <Switch>
          <Route
            exact
            path="/homepage"
            render={() => <Home />}
          />
					<Route path="/" render={() => (<Redirect to={{ pathname: `/${defaultLocale}` }} />)} />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRouter;
