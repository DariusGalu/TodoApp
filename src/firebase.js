import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAdKv6EHDkCxkF5uAJRMDfA2vDLkWHdgG4",
    authDomain: "todo-app-5968c.firebaseapp.com",
    databaseURL: "https://todo-app-5968c.firebaseio.com",
    projectId: "todo-app-5968c",
    storageBucket: "todo-app-5968c.appspot.com",
    messagingSenderId: "333887246451",
    appId: "1:333887246451:web:7b83628351d59738ed1a06",
    measurementId: "G-6S96ZS64M7"
  });

const db = firebaseApp.firestore();

export default db;