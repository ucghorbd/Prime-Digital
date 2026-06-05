import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCp76nexgAlDr7rJTOueY7C8UApWofSLSk",
  authDomain: "hopeeb-71e7c.firebaseapp.com",
  projectId: "hopeeb-71e7c",
  storageBucket: "hopeeb-71e7c.firebasestorage.app",
  messagingSenderId: "642231885356",
  appId: "1:642231885356:web:a078dd5981a302ac797b89"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
