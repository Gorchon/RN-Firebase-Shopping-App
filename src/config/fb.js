import { initializeApp } from "firebase/app";
import Constants from 'expo-constants';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.extra.storageBucket,
    messagingSenderId: Constants.manifest.extra.messagingSenderId,
    appId: Constants.manifest.extra.appId, 
    dataBaseURL: Constants.manifest.extra.dataBaseURL,
};

initializeApp(firebaseConfig);  
export const database = getFirestore(); // export by default means that we can import it with any name we want in other files and it will be the same as database. And export const database = getFirestore(); means that we can import it with the same name in other files and it will be the same as database.