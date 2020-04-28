import { reducer as formReducer } from 'redux-form';
import App from './app/reducer';
import Banners from './banners/reducer';
import BetHistory from './betHistory/reducer';
import Common from './common/reducer';
import Currency from './currency/reducer';
import Documents from './documents/reducer';
import EmailConfirm from './emailConfirm/reducer';
import Files from './files/reducer';
import Firebase from './firebase/reducer';
import Footer from './footer/reducer';
import Header from './header/reducer';
import Histories from './histories/reducer';
import Games from './games/reducer';
import InfoPages from './infoPages/reducer';
import LatestWinners from './latestWinners/reducer';
import Modals from './modals/reducer';
import Payment from './payment/reducer';
import ResetPassword from './resetPassword/reducer';
import Sessions from './sessions/reducer';
import Social from './social/reducer';
import Socket from './socket/reducer';

export default {
  App,
  Banners,
  BetHistory,
  Common,
  Currency,
  Documents,
  EmailConfirm,
  Files,
  Firebase,
  Footer,
  Header,
  Histories,
  Games,
  InfoPages,
  LatestWinners,
  Modals,
  Payment,
  ResetPassword,
  Sessions,
  Social,
  Socket,
  form: formReducer,
};
