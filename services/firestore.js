// import firebase from "firebase/app";
const firebase = require("firebase/app");
require("firebase/firestore");

require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.FIRESTORE_APIKEY,
    authDomain: process.env.FIRESTORE_AUTHDOMAIN,
    projectId: process.env.FIRESTORE_PROJECTID,
    storageBucket: process.env.FIRESTORE_STORAGEBUCKET,
    messagingSenderId:process.env.FIRESTORE_MESSAGINGSENDERID,
    appId: process.env.FIRESTORE_APPID,
    measurementId: process.env.FIRESTORE_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;