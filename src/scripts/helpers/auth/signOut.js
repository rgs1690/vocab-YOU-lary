import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from '../clearDom';

const signOut = () => {
  firebase.auth().signOut();
  document.querySelector('#navigation').innerHTML = '';
  clearDom();
};

export default signOut;
