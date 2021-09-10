import {
  createCard,
  deleteCard,
  getSingleCard,
  updateCard,
  getCards
} from '../helpers/data/cardData';
import showCards from '../components/cards';
import addCardForm from '../forms/addCardForm';
import filterLanguages from '../components/filterLanguages';
import { orderByTitle, orderByNew, orderByOld } from '../components/sortCards';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('submit-card')) {
      console.warn('submit clicked');
      e.preventDefault();
      const cardObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#select-language').value,
        timeSubmitted: new Date(),
        uid
      };
      createCard(cardObj).then((cardsArray) => showCards(cardsArray));
    }
    // UPDATE EVENT FOR CARD
    if (e.target.id.includes('updateCard')) {
      console.warn('CLICKED UPDATE CARD', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj, uid));
    }

    // EVENT FOR EDITING BOOK
    if (e.target.id.includes('edit-card')) {
      console.warn('CLICKED EDIT CARD BTN', e.target.id);
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const cardObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#select-language').value,
        timeSubmitted: new Date(),
        firebaseKey,
        uid
      };
      updateCard(cardObj).then(showCards);
    }
    // DELETE CARD EVENT
    if (e.target.id.includes('deleteCard')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');
        deleteCard(uid, id).then(showCards);
      }
    }
    // FILTER BTNS

    if (e.target.id.includes('Javascript')) {
      e.preventDefault();
      getCards(uid).then((userCards) => {
        console.warn(userCards);
        const jsCards = filterLanguages(userCards, e.target.id);
        console.warn(e.target.id);
        console.warn(jsCards);
        showCards(jsCards);
      });
    }
    if (e.target.id.includes('CSS')) {
      e.preventDefault();
      getCards(uid).then((userCards) => {
        console.warn(userCards);
        const cssCards = filterLanguages(userCards, e.target.id);
        console.warn(e.target.id);
        showCards(cssCards);
      });
    }
    if (e.target.id.includes('HTML')) {
      e.preventDefault();
      getCards(uid).then((userCards) => {
        console.warn(userCards);
        const htmlCards = filterLanguages(userCards, e.target.id);
        console.warn(e.target.id);
        showCards(htmlCards);
      });
    }
    if (e.target.id.includes('Python')) {
      e.preventDefault();
      getCards(uid).then((userCards) => {
        console.warn(userCards);
        const pythonCards = filterLanguages(userCards, e.target.id);
        console.warn(e.target.id);
        showCards(pythonCards);
      });
    }
    if (e.target.id.includes('Tech')) {
      e.preventDefault();
      getCards(uid).then((userCards) => {
        console.warn(userCards);
        const techCards = filterLanguages(userCards, e.target.id);
        console.warn(e.target.id);
        showCards(techCards);
      });
    }
    if (e.target.id.includes('sortTitle')) {
      e.preventDefault();
      getCards(uid).then((userCards) => {
        orderByTitle(userCards);
        showCards(userCards);
      });
    }
    if (e.target.id.includes('sortNew')) {
      e.preventDefault();
      getCards(uid).then((userCards) => {
        orderByNew(userCards);
        showCards(userCards);
      });
    }
    if (e.target.id.includes('sortOld')) {
      e.preventDefault();
      getCards(uid).then((userCards) => {
        orderByOld(userCards);
        showCards(userCards);
      });
    }
  });
};
export default domEvents;
