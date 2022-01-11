import ReBase from "re-base";
import firebase from 'firebase/app'
import 'firebase/database' 

const firebaseConfig = {
    apiKey: "AIzaSyAhyWhp3TWRexLDTwpE-dky1lfLpC8C8lk",
    authDomain: "chatbox-app-1f38d.firebaseapp.com",
    databaseURL: "https://chatbox-app-1f38d-default-rtdb.firebaseio.com",
    //projectId: "chatbox-app-1f38d",
    //storageBucket: "chatbox-app-1f38d.appspot.com",
    //messagingSenderId: "960376751778",
    //appId: "1:960376751778:web:2f8793ad3d2611522479fb",
    //measurementId: "G-WR9TN4CD5L"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig)

const base =ReBase.createClass(firebase.database())

export {firebaseApp}

export default base