import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfD7JaO1pBysrUtnm1tTDRRQfp5b8ya4o",
  authDomain: "reactjs-e4738.firebaseapp.com",
  projectId: "reactjs-e4738",
  storageBucket: "reactjs-e4738.firebasestorage.app",
  messagingSenderId: "792687155403",
  appId: "1:792687155403:web:7f5300010770c429d8634e",
  measurementId: "G-T233YQM9XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db=getFirestore(app);

export { auth, app };
