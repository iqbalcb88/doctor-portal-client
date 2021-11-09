import firebaseConfig from './firebase.config';
import { initializeApp } from 'firebase/app';

const initAppAuth = () => {
  initializeApp(firebaseConfig);
};
export default initAppAuth;
