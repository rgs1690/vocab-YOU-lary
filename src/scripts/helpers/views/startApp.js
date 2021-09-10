import domBuilder from '../../components/domBuilder';
import logoutButton from '../../components/logoutButton';
import navBar from '../../components/navBar';
import domEvents from '../../events/domEvents';
import navigationEvents from '../../events/navigationEvents';
import { getCards } from '../data/cardData';
import showCards from '../../components/cards';
import formEvents from '../../events/formEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  domEvents(user.uid);
  navigationEvents(user.uid);
  formEvents(user.uid);
  getCards(user.uid).then(showCards);
};

export default startApp;
