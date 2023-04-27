import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCGyLM--nz27FQaNNNOgjiprXbEAkqfo7Y",
  authDomain: "e-bike-299a5.firebaseapp.com",
  projectId: "e-bike-299a5",
  storageBucket: "e-bike-299a5.appspot.com",
  messagingSenderId: "482964724727",
  appId: "1:482964724727:web:01b80703eff635b8ccacf2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
