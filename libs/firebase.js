import { initializeApp, getApps } from "firebase/app";
import { getFirestore, getDocs } from "firebase/firestore";

const clientCredentials = {
  apiKey: "AIzaSyBSMZCgZ8ZFUzqZY2SYRuyVUYPAKD-gPLc",
  authDomain: "mfd-mbti.firebaseapp.com",
  projectId: "mfd-mbti",
  storageBucket: "mfd-mbti.appspot.com",
  messagingSenderId: "118120112308",
  appId: "1:118120112308:web:b509da211f5ec5a41b77e1",
  measurementId: "G-ZJ3ZEL9KDQ",
};

let firebaseApp;

if (!getApps().length) {
  firebaseApp = initializeApp(clientCredentials);
}

export const db = getFirestore(firebaseApp);

/*
const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
*/
