import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCvIOzitxhJCtc-K_OF0L_QkEse9owObL0",
  authDomain: "netflix-k8s.firebaseapp.com",
  projectId: "netflix-k8s",
  storageBucket: "netflix-k8s.appspot.com",
  messagingSenderId: "561539661219",
  appId: "1:561539661219:web:6f0b991f20abbe8d782e16"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
