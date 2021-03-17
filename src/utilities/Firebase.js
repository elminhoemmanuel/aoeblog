import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD9q0r3CGNpgcE0tmE7kHRY3cFVNzu5eSg",
    authDomain: "aoe-blog.firebaseapp.com",
    databaseURL: "https://aoe-blog-default-rtdb.firebaseio.com",
    projectId: "aoe-blog",
    storageBucket: "aoe-blog.appspot.com",
    messagingSenderId: "766389788128",
    appId: "1:766389788128:web:3cad0bcc9f300f4f2f9f85"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;