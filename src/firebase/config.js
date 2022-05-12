import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAib2871bh8oMkFUlQfK3BsTEpS_mdkriI',
	authDomain: 'skatergram2.firebaseapp.com',
	databaseURL: 'gs://skatergram2.appspot.com', // this has been added
	projectId: 'skatergram2',
	storageBucket: 'skatergram2.appspot.com',
	messagingSenderId: '893980442770',
	appId: '1:893980442770:web:b6320b7450b3b323eba64b',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
