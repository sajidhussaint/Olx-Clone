
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAYdFjpK51GzVoU56qZ5oDRIXS8-f6C58w",
  authDomain: "fir-a72b5.firebaseapp.com",
  projectId: "fir-a72b5",
  storageBucket: "fir-a72b5.appspot.com",
  messagingSenderId: "213073557292",
  appId: "1:213073557292:web:6c4b497b7f8dc3a2e19e89",
  measurementId: "G-YB3DE949VF"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
export default firebaseApp;
