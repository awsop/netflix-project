import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAardsZ51dtg2pzBKlUtVphKw7I2-zQqcc",
  authDomain: "netflix-jenkins.firebaseapp.com",
  projectId: "netflix-jenkins",
  storageBucket: "netflix-jenkins.appspot.com",
  messagingSenderId: "24670353033",
  appId: "1:24670353033:web:cf1765dbe4530be092f858"

};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
