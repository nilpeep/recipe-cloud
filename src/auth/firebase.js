// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfdKop_gwKKFNRVXxEOh11ZJI-ZJTLono",
  authDomain: "recipecloud-8e2d8.firebaseapp.com",
  projectId: "recipecloud-8e2d8",
  storageBucket: "recipecloud-8e2d8.appspot.com",
  messagingSenderId: "274421347360",
  appId: "1:274421347360:web:aab527595becbba2a37845",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
