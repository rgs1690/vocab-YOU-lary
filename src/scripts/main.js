// USE WITH FIREBASE AUTH
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import checkLoginStatus from './helpers/auth/auth';

const init = () => {
  checkLoginStatus();
  console.warn('YOU ARE UP AND RUNNING!');
};

init();
