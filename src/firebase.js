
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBEnIJlSv1BLPuGfQhOVrspTxQbmAgC87s",
    authDomain: "trello-new-clone.firebaseapp.com",
    databaseURL: "https://trello-new-clone-default-rtdb.firebaseio.com",
    projectId: "trello-new-clone",
    storageBucket: "trello-new-clone.appspot.com",
    messagingSenderId: "598929690555",
    appId: "1:598929690555:web:c7f5d5fc8cd238a59f3e9e",
    measurementId: "G-KP6BW2541T"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export default firestore;
