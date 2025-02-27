import { getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDiGVGUq37f891VNjavYWTQ6PBY0RAfhqw",
  authDomain: "tasklistsdiri.firebaseapp.com",
  databaseURL: "https://tasklistsdiri-default-rtdb.firebaseio.com",
  projectId: "tasklistsdiri",
  storageBucket: "tasklistsdiri.firebasestorage.app",
  messagingSenderId: "164432865008",
  appId: "1:164432865008:web:e98c3803adb90f3d86c435",
  measurementId: "G-D74L08T52G"
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApps() [0];
export const db = getDatabase(app);