// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBt5j9hx4cRa0X1nh7iOrnx9a9mtPEBJOU",
    authDomain: "livre-f667f.firebaseapp.com",
    projectId: "livre-f667f",
    storageBucket: "livre-f667f.appspot.com",
    messagingSenderId: "551112077457",
    appId: "1:551112077457:web:8b0e190d5fc3aa7ad94f30",
    measurementId: "G-4HF4CVKNS0"
  }
};
