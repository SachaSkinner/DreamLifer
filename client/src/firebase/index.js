 
 import firebase from "firebase/app";
 import "firebase/storage";
 require("dotenv").config();
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: process.env.ONE,
    // authDomain: process.env.TWO,
    // databaseURL: process.env.THREE,
    // projectId: process.env.FOUR,
    // storageBucket: "dreamlifer-36c5e.appspot.com",
    // messagingSenderId: process.env.SIX,
    // appId: process.env.SEVEN
    // apiKey: "AIzaSyAHiI-h-c9rONc5ToeyhFpUeS35oI6RP_g",
    authDomain: "dreamlifer-36c5e.firebaseapp.com",
    databaseURL: "https://dreamlifer-36c5e.firebaseio.com",
    projectId: "dreamlifer-36c5e",
    storageBucket: "dreamlifer-36c5e.appspot.com",
    messagingSenderId: "868968746429",
    appId: "1:868968746429:web:dbbe19a2b3e9c4e9c156d4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  
  export {
      storage, firebase as default
  }