import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDGs0GqBhugQ_GbXYMjK2ckCjwprq4aOz8",
    authDomain: "netflix-clone-b312c.firebaseapp.com",
    projectId: "netflix-clone-b312c",
    storageBucket: "netflix-clone-b312c.firebasestorage.app",
    messagingSenderId: "506410533260",
    appId: "1:506410533260:web:28cb7158215c1a36cc56a9"
  };

const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore and Auth instances
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Export instances for use in other parts of your app
export { auth };
export default db;