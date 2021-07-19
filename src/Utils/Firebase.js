import  firebase from "firebase/app";



 const firebaseConfig = {
    apiKey: "AIzaSyBYA90o5Cm0OqShsjXnVU54hRJU1QD1hAA",
    authDomain: "tiendacommerce-d48f9.firebaseapp.com",
    projectId: "tiendacommerce-d48f9",
    storageBucket: "tiendacommerce-d48f9.appspot.com",
    messagingSenderId: "216662727323",
    appId: "1:216662727323:web:cde10406036631ddc7843e",
  };
  // Initialize Firebase
  export const firebaseapp=firebase.initializeApp(firebaseConfig);
