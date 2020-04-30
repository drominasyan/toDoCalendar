import React, { PureComponent } from 'react';
// import * as PropTypes from 'prop-types';
// import { push } from 'react-router-redux';
import Header from '../Header';
import Routes from '../../router/routes';

class Root extends PureComponent {
	render() {
		return (
			<>
				<div>
					<Header />
					<Routes />
					{/* <Footer /> */}
				</div>
			</>
		);
   }
}

export default Root;
