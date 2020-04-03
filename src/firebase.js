import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// TODO: WARNING: CONFIGURATION HAS TO BE SET TO ENVIRONMENT BEFORE PRODUCTION YA2EMA HANROO7 FE DAHYA

const app = firebase.initializeApp({
  apiKey: "AIzaSyAkgDEsFAcdLF0k-_SlEUIAEuvhDlRfPEc",
  authDomain: "coronaisblind-1e81a.firebaseapp.com",
  databaseURL: "https://coronaisblind-1e81a.firebaseio.com",
  projectId: "coronaisblind-1e81a",
  storageBucket: "coronaisblind-1e81a.appspot.com",
  messagingSenderId: "267268697534",
  appId: "1:267268697534:web:160b264b03f91e72909def"
});

export default app;
