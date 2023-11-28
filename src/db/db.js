import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

// Config de FireBase para aplicacion web
const firebaseConfig = {

    apiKey: "AIzaSyDNDz98aqwBmYSiaM0Bf1vi9HpSmT2q4GA",

    authDomain: "reactjs-chindamo.firebaseapp.com",

    projectId: "reactjs-chindamo",

    storageBucket: "reactjs-chindamo.appspot.com",

    messagingSenderId: "902121107713",

    appId: "1:902121107713:web:343e188c7c4baa2262ab00"

};

//Iniciar Firebase con configuracion 
initializeApp(firebaseConfig);

// Obtener una instancia de Firestore para interactuar con la base de datos
// en otros archivos
export const db = getFirestore()

export const orderCollections = collection( db , 'orders')

export const productsCollections = collection( db , 'product')