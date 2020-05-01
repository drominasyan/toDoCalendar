import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { defaultLocale } from '../config';
import Home from '../Page/Home';
import ToDo from '../Page/ToDoList';

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
          <Route
            exact
            path="/toDoList"
            render={() => <ToDo />}
          />
					<Route path="/" render={() => (<Redirect to={{ pathname: `/${defaultLocale}` }} />)} />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRouter;
