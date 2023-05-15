// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw3voM9LFZjFSrS_B_nWLLjctLivtTtHc",
  authDomain: "wander-2189f.firebaseapp.com",
  projectId: "wander-2189f",
  storageBucket: "wander-2189f.appspot.com",
  messagingSenderId: "224214714093",
  appId: "1:224214714093:web:274c1a65cbffbad2c3aee4",
  measurementId: "G-V2ZT4KX4VR",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
