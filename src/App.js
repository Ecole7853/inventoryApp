import logo from './logo.svg';
import './App.css';
//import Dashboard from "./components/Dashboard.js";
import Login from './pages/LoginPage.js';
import Navbar from './components/navibar.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLJG8NdQpmoXYXLeKOjuAIqKkDSzAvpp8",
  authDomain: "aldridge-inventory-app.firebaseapp.com",
  projectId: "aldridge-inventory-app",
  storageBucket: "aldridge-inventory-app.appspot.com",
  messagingSenderId: "519872713243",
  appId: "1:519872713243:web:fbbd4b64b62947fd04debe",
  measurementId: "G-V14Q4QNQ76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return ( 

  <div class="h-screen w-screen overflow-hidden"><></><Navbar /><Login /></div>
  );
}



export default App;


//FIX LINKS, INSTALL REACT ROUTER 
//SCAFFOLD NEXT COMPONENTS AND PAGES
//COMPLETE ROUTER LINKS FOR THESE PAGES
