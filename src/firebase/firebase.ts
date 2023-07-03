import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6wh6ykL0kv1aBuxmZc0can0CxPvawSts",
  authDomain: "leetcode-lite.firebaseapp.com",
  projectId: "leetcode-lite",
  storageBucket: "leetcode-lite.appspot.com",
  messagingSenderId: "432342654658",
  appId: "1:432342654658:web:8cc0e419369c0db2b0e55b",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
