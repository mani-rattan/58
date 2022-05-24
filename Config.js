import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCA71iKRbT854MxHgtH4p1fMXiJ2_Jfd7k",
    authDomain: "newsletter-f4bd2.firebaseapp.com",
    databaseURL: "https://newsletter-f4bd2.firebaseio.com",
    projectId: "newsletter-f4bd2",
    storageBucket: "newsletter-f4bd2.appspot.com",
    messagingSenderId: "281251542429",
    appId: "1:281251542429:web:0e8313f0238119fe09ab74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();