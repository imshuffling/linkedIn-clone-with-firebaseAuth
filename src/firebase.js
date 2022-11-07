import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaaHx8wnfzasUrQyxe4bsQinYG2OSPieM",
  authDomain: "linkedin-clone-yt-d7920.firebaseapp.com",
  projectId: "linkedin-clone-yt-d7920",
  storageBucket: "linkedin-clone-yt-d7920.appspot.com",
  messagingSenderId: "647051835565",
  appId: "1:647051835565:web:b21284fe74de38d77dee24",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
