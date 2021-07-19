import { firebaseapp } from "./Firebase";
import * as firebase from "firebase";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

export  const validarsesion = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("usuario logueado");
        } else {
            console.log("no ha iniciado sesion");
         }
    });
};

