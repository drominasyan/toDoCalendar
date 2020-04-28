import { all } from 'redux-saga/effects';
import appSagas from './app/saga';


import externalSocketSagas from '../sockets/sagas';

export default function* rootSaga() {
	yield all([
		appSagas(),
	]);
}
