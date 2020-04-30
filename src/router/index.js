import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Router } from 'react-router-dom';
import Root from '../containers/Root';

class PublicRoutes extends Component {

  render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route path="*" component={Root} />
        </Switch>
      </Router>
    );
  }
}

PublicRoutes.propTypes = {
    history : PropTypes.object.isRequired,
};

export default PublicRoutes;
