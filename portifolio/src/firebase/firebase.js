
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDPox54EvUghuusX3bmEmWdTlV7sBAhTLQ",
    authDomain: "portifolio-63d2c.firebaseapp.com",
    projectId: "portifolio-63d2c",
    storageBucket: "portifolio-63d2c.appspot.com",
    messagingSenderId: "1045683842336",
    appId: "1:1045683842336:web:990fa9740a5074f2a6fb45",
    measurementId: "G-9TW1GJBYTC"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

export { db };
