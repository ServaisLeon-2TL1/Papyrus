/*import { getDatabase } from "firebase/database"
export const database = getDatabase(app);
//import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
const handleSubmit = () =>{
    let obj = {
            firstName : firstName,
            lastName:lastName,
            email:emailq,
            password:password,
            confirmPassword:confirmPassword,
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
}*/

import firebase from  'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDAiff-BxHcxbRVtJ8i7Sg7owbzT1mb_cU",

    authDomain: "authentification-devlopment.firebaseapp.com",

    projectId: "authentification-devlopment",

    storageBucket: "authentification-devlopment.appspot.com",

    messagingSenderId: "964267178737",

    appId: "1:964267178737:web:2782f4aa2d8c69b19e8750",

    measurementId: "G-9KWST49LJP"



})


export const auth = app.auth()
export default app
