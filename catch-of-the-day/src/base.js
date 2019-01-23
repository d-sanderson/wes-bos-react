import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBbCv0QwLtAuOWRVj4oNy7F_B7tvKjOD4A",
	authDomain: "catch-of-the-day-david-s.firebaseapp.com",
	databaseURL: "https://catch-of-the-day-david-s.firebaseio.com",

});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export

export { firebaseApp }

//this is a default export

export default base;

