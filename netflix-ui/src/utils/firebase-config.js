// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPU7X4rbB2AU_hp5Fj4hZyANN23xiVffU",
  authDomain: "react-netflix-clone-69f4a.firebaseapp.com",
  projectId: "react-netflix-clone-69f4a",
  storageBucket: "react-netflix-clone-69f4a.appspot.com",
  messagingSenderId: "205949922669",
  appId: "1:205949922669:web:7b1f81a2ef87508822fe64",
  measurementId: "G-TZG37N2700",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
