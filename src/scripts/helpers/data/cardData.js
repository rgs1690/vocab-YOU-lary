import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET CARDS
const getCards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getCards;
