import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDfR80P6V_sepGtu51o41dsQQQhxf8StYs",
  authDomain: "netflix-f8f36.firebaseapp.com",
  projectId: "netflix-f8f36",
  storageBucket: "netflix-f8f36.appspot.com",
  messagingSenderId: "949857127663",
  appId: "1:949857127663:web:f45546d6fdef52ba2d1f1a",
  measurementId: "G-V48ESN0Q74"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
