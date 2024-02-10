import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5WxF1KGyrIIYuFK4K6dpy4LGl4Dv26l8",
  authDomain: "hallticket-2dd4e.firebaseapp.com",
  projectId: "hallticket-2dd4e",
  storageBucket: "hallticket-2dd4e.appspot.com",
  messagingSenderId: "793240440468",
  appId: "1:793240440468:web:5d12b5774130b16954ee81",
  measurementId: "G-PJ8WX089KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);