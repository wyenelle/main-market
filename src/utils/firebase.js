// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqWTYh4u-sk0Qxj7Fh9epB-joLKp9QElE",
  authDomain: "marketplace-copy.firebaseapp.com",
  projectId: "marketplace-copy",
  storageBucket: "marketplace-copy.appspot.com",
  messagingSenderId: "1029325360923",
  appId: "1:1029325360923:web:1066b75f35b2c063a70dbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore();

const google_provider = new GoogleAuthProvider()
google_provider.setCustomParameters({
  prompt: "select_account",login_hint: 'user@example.com'
});

export const sign_in_with_google_popup = () => signInWithPopup(auth,google_provider)
export const sign_in_with_google_redirect = () => signInWithRedirect(auth,google_provider)

export const create_user_from_email_and_password = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const create_user_from_auth = async (user, displayName = {}) => {
  //  create a reference to the database
  const reference = doc(db, "users", user.uid);

  // get the refernece document
  const get_refernce = await getDoc(reference);

  //  checks if the reference exist and if not create a new one
  if (!get_refernce.exists()) {
    const { email } = user;
    const date = new Date();

    try {
      // create a new user reference if none is found
      setDoc(reference, { displayName, email, date });
    } catch (err) {
      console.log(err.Error);
    }
  }
  // returnn the reference is one is found
  return reference;
};

// this function handles user;s sign in
export const sign_in_user = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
// signs out the current logged in user
export const sign_out = async () => await signOut(auth)