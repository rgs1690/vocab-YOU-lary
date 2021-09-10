import domBuilder from '../../components/domBuilder';
import logoutButton from '../../components/logoutButton';
import navBar from '../../components/navBar';
import domEvents from '../../events/domEvents';
import navigationEvents from '../../events/navigationEvents';
import { getCards } from '../data/cardData';
import showCards from '../../components/cards';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  navBar();
  logoutButton();
  navigationEvents(user.uid);
  getCards(user.uid).then(showCards);
};

export default startApp;
