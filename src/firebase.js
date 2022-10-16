// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC3tk3XmjjfFT9caihua_AZUYUK-Rundz8",
  authDomain: "clone3-2be9f.firebaseapp.com",
  projectId: "clone3-2be9f",
  storageBucket: "clone3-2be9f.appspot.com",
  messagingSenderId: "33412288140",
  appId: "1:33412288140:web:f52c0679352df6702f35a9"
};

const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
provider.setCustomParameters({ prompt: 'select_account' });
