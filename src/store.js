import { createStore, combineReducers, compose } from "redux";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNYSpy3mdWOBmxyPuAYLS9qplUcZzZmnM",
  authDomain: "reactclientpanel-f6376.firebaseapp.com",
  databaseURL: "https://reactclientpanel-f6376.firebaseio.com",
  projectId: "reactclientpanel-f6376",
  storageBucket: "reactclientpanel-f6376.appspot.com",
  messagingSenderId: "628832555842"
};

//react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig) // firebase instance as first argument
  // reduxFirestore(firebase) // <- needed if using firestore
)(createStore);
