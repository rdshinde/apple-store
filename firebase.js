const firebaseConfig = {
  apiKey: "AIzaSyBba0XGQdNjUWRxlBswW7JZhcyWjZ9UA6I",
  authDomain: "clone-557d8.firebaseapp.com",
  projectId: "clone-557d8",
  storageBucket: "clone-557d8.appspot.com",
  messagingSenderId: "413998393859",
  appId: "1:413998393859:web:97a62cd8dd6ccee041bc36",
  measurementId: "G-9T63RY51PL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = firebase.firestore();