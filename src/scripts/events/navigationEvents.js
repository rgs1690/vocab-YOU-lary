import signOut from '../helpers/auth/signOut';
import showCards from '../components/cards';
import getCards from '../helpers/data/cardData';

const navigationEvents = () => {
  // LogOut Button
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  // All Cards
  document.querySelector('#allCards')
    .addEventListener('click', () => {
      getCards().then(showCards);
    });
};

export default navigationEvents;
