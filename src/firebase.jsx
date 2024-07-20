import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC8p1Ld4yXH5H-UWBzwo6ezTtlrnlRCcoA",
  authDomain: "organickauth.firebaseapp.com",
  projectId: "organickauth",
  storageBucket: "organickauth.appspot.com",
  messagingSenderId: "710554951227",
  appId: "1:710554951227:web:9af26b23e2ac96d7b3061e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
