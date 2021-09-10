import signOut from '../helpers/auth/signOut';
import { showCards, emptyCards } from '../components/cards';
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

  // SEARCH
  document.querySelector('#search')
    .addEventListener('keydown', (e) => {
      const searchValue = document.querySelector('#search').value.toLowerCase();
      console.warn(searchValue);
      // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
      if (e.keyCode === 13) {
        e.preventDefault();
        getCards(uid).then((userCards) => {
          const filteredSearch = userCards.filter((card) => card.title.toLowerCase().includes(searchValue)
          || card.definition.toLowerCase().includes(searchValue));
          showCards(filteredSearch);
        });
      } else (document.querySelector('#search').value = '');
      emptyCards();
    });
};
export default navigationEvents;
