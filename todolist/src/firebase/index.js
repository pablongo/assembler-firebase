import * as firebase from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA8g1yMjGVCMK7BFmpAzXEREtlyQRRXNlE',
  authDomain: 'fir-demo-f00f5.firebaseapp.com',
  projectId: 'fir-demo-f00f5',
  storageBucket: 'fir-demo-f00f5.appspot.com',
  messagingSenderId: 426740211095,
  appId: '1:426740211095:web:67ebb30f7115c41fd238d2'
};
const app = firebase.initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export { app, googleProvider, auth };
