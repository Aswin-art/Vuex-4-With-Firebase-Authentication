import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC9NPgo5EZcVgCGEx7vE9p9mONnc8b0-Gk",
    authDomain: "vuex4-fb-auth-f4781.firebaseapp.com",
    projectId: "vuex4-fb-auth-f4781",
    storageBucket: "vuex4-fb-auth-f4781.appspot.com",
    messagingSenderId: "909573656083",
    appId: "1:909573656083:web:698804125fb568eaa4b9e6"
};

// Init firebase
initializeApp(firebaseConfig)

// Init firebase auth
const auth = getAuth()

export { auth }