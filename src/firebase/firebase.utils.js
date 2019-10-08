import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCY6fY_zU-4CFm2omOKLdrW6LavWHY3aF0",
    authDomain: "shop-demo-865fd.firebaseapp.com",
    databaseURL: "https://shop-demo-865fd.firebaseio.com",
    projectId: "shop-demo-865fd",
    storageBucket: "",
    messagingSenderId: "56387382607",
    appId: "1:56387382607:web:defb440513049fc4bba93a",
    measurementId: "G-NTQW4MH7CY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;