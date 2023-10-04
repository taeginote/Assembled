// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDcke9CNyEUuiy8H7ovfSJDe-aftTZckBA',
	authDomain: 'assemble-notification.firebaseapp.com',
	projectId: 'assemble-notification',
	storageBucket: 'assemble-notification.appspot.com',
	messagingSenderId: '163880028666',
	appId: '1:163880028666:web:c494b96903ca668388bc43',
	measurementId: 'G-JPGXHPW5CQ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
