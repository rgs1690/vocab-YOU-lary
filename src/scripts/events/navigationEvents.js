import signOut from '../helpers/auth/signOut';
import showCards from '../components/cards';
import { getCards } from '../helpers/data/cardData';
import addCardForm from '../forms/addCardForm';

const navigationEvents = (uid) => {
  // LogOut Button
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  // All Cards
  document.querySelector('#allCards')
    .addEventListener('click', () => {
      getCards(uid).then(showCards);
    });
  // ADD CARD FORM
  document.querySelector('#createEntry')
    .addEventListener('click', () => {
      addCardForm();
    });
};

export default navigationEvents;
