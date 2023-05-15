// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, browserLocalPersistence } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DB_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.setPersistence(browserLocalPersistence);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
