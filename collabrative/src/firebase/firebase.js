// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // ✅ Required for auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDOG6zleR2k3D2MXNwPs-XKDoT3b-aRt8",
  authDomain: "collabrative-editor-228c9.firebaseapp.com",
  projectId: "collabrative-editor-228c9",
  storageBucket: "collabrative-editor-228c9.appspot.com", // ✅ corrected `.app` to `.appspot.com`
  messagingSenderId: "15463794229",
  appId: "1:15463794229:web:6293991c3143338fc2d37c",
  measurementId: "G-MBJRBEJ33K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ initialize auth

export { auth };
export default app; // Export the initialized app if needed elsewhere