import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDVJJIAtlDokrj7Wl6KWOUJW3honsMsm7k",
    authDomain: "mern-whatsapp-6ecbb.firebaseapp.com",
    projectId: "mern-whatsapp-6ecbb",
    storageBucket: "mern-whatsapp-6ecbb.appspot.com",
    messagingSenderId: "683692050062",
    appId: "1:683692050062:web:6a181dc498713b922eebdf",
    measurementId: "G-NETMDJQLW1"
  };

  const app=initializeApp(firebaseConfig);

  const auth=getAuth();
  const provider=new GoogleAuthProvider();

  export {app,auth,provider};