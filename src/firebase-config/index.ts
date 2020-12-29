import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
import firebaseConfig from '../config/firebase'

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const storage = firebase.storage()
const firestore = firebase.firestore()

export { auth, firebase, storage, firestore }
