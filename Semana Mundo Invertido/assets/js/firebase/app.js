  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDl3ooZ9jY6VQZZAj5AEQXRt5MfQdUdZgQ",
    authDomain: "dia-mundo-invertido.firebaseapp.com",
    projectId: "dia-mundo-invertido",
    storageBucket: "dia-mundo-invertido.appspot.com",
    messagingSenderId: "664670317720",
    appId: "1:664670317720:web:1994a5e065f1a7f42f34ed",
    measurementId: "G-7Q33CX7LXV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app

