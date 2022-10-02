import {
	initializeApp
} from 'firebase/app';

import {
	getFirestore
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCpDDYKQIkpnPfhNNRlbZBUyUp-bDsp9hs",
	authDomain: "app01-60151.firebaseapp.com",
	projectId: "app01-60151",
	storageBucket: "app01-60151.appspot.com",
	messagingSenderId: "653525364224",
	appId: "1:653525364224:web:e87fd96e706f00c41eb2e5",
	measurementId: "G-TTBB61FZTK"
}
const app = initializeApp( firebaseConfig );

export const db = getFirestore( app );