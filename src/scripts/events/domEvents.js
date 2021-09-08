import { createCard } from '../helpers/data/cardData';
import showCards from '../components/cards';

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
  });
};

export default domEvents;
