import domBuilder from '../../components/domBuilder';
import logoutButton from '../../components/logoutButton';
import navBar from '../../components/navBar';
import domEvents from '../../events/domEvents';
import navigationEvents from '../../events/navigationEvents';
import getCards from '../data/cardData';
import showCards from '../../components/cards';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  domEvents();
  navigationEvents();
  getCards().then(showCards);
};

export default startApp;
