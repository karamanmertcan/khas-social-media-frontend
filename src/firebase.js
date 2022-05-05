// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GithubAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDBdse_UDhNrUdwMY2r6ij43j46q8VvgzM',
  authDomain: 'khas-social-media-app.firebaseapp.com',
  databaseURL: 'https://khas-social-media-app-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'khas-social-media-app',
  storageBucket: 'khas-social-media-app.appspot.com',
  messagingSenderId: '916486050985',
  appId: '1:916486050985:web:073b5bcca8225fc46385b8',
  measurementId: 'G-YXB7N4FXK2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);

// eslint-disable-next-line import/prefer-default-export
export const provider = new GithubAuthProvider();

export const db = getFirestore(app);
