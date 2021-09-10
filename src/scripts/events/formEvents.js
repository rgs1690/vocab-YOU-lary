// import showCards from '../components/cards';
// import { createCard } from '../helpers/data/cardData';

// const formEvents = (uid) => {
//   document.querySelector('#main-container').addEventListener('submit', (e) => {
//     if (e.target.id.includes('cardSubmit')) {
//       console.warn('submit clicked');
//       e.preventDefault();
//       const cardObj = {
//         title: document.querySelector('#title').value,
//         definition: document.querySelector('#definition').value,
//         language: document.querySelector('#select-language').value,
//         timeSubmitted: new Date(),
//         uid
//       };
//       createCard(cardObj).then((cardsArray) => showCards(cardsArray));
//     }
//   });
// };

// export default formEvents;
