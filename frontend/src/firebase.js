import {
	initializeApp
} from "firebase/app";

import {
	getFirestore
} from "firebase/firestore";

import {
	getAuth
} from 'firebase/auth'
import {
	GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCd_YXr6NTTmDdtHaNWafI21FA-qEimOCY",
	authDomain: "pizza-delivery-5201d.firebaseapp.com",
	projectId: "pizza-delivery-5201d",
	storageBucket: "pizza-delivery-5201d.appspot.com",
	messagingSenderId: "71075292279",
	appId: "1:71075292279:web:f07fde8e43671e50b71272"
}

const fireApp = initializeApp(firebaseConfig);

export const db = getFirestore(fireApp);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();