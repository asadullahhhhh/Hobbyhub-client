import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi-Fx20xnh3xhljIQNjUmX3iMBo7_p6tI",
  authDomain: "assignment-10-88efe.firebaseapp.com",
  projectId: "assignment-10-88efe",
  storageBucket: "assignment-10-88efe.firebasestorage.app",
  messagingSenderId: "746130485120",
  appId: "1:746130485120:web:ed818cfc44a37a205f5b65",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);