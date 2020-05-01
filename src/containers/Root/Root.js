import React, { PureComponent } from 'react';
// import * as PropTypes from 'prop-types';
// import { push } from 'react-router-redux';
import Header from '../Header';
import Routes from '../../router/routes';
import './RootStyle.css';

class Root extends PureComponent {
	render() {
		return (
			<div className = "containter">
					<Header />
					<Routes />
			</div>
		);
   }
}

export default Root;
