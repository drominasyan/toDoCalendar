import React, { PureComponent } from 'react';
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
