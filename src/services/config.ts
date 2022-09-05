import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF5TLt7s2pEiyQysis5B6bN7JAJr8HeBQ",
  authDomain: "sparesquare-7113e.firebaseapp.com",
  projectId: "sparesquare-7113e",
  storageBucket: "sparesquare-7113e.appspot.com",
  messagingSenderId: "165176118857",
  appId: "1:165176118857:web:a87896fee512ebd2d0f998",
};


firebase.initializeApp(firebaseConfig);


const BASE_URL = 'http://192.168.1.224:8000';
export { firebase as default };
export {
  BASE_URL
}
