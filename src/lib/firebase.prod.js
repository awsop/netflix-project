import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
 import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDwRAdFJgeK1dIMnRDmHwtLVzd3wo4TO3M",
  authDomain: "jenkins-netflix.firebaseapp.com",
  projectId: "jenkins-netflix",
  storageBucket: "jenkins-netflix.appspot.com",
  messagingSenderId: "797761463704",
  appId: "1:797761463704:web:fc74ca758291043ad4b7ed",
  measurementId: "G-TZ5MCFDE4W"

};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
 seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
