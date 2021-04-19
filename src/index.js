import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




const firebaseConfig = {
  apiKey: "AIzaSyDwu4BWmjdFeVRD3wrT4YTGkG5EFQTVDC0",
  authDomain: "evernote-clone-3f1f1.firebaseapp.com",
  projectId: "evernote-clone-3f1f1",
  storageBucket: "evernote-clone-3f1f1.appspot.com",
  messagingSenderId: "364841710683",
  appId: "1:364841710683:web:c85b0fba8f5789c807bb7e"
};

firebase.initializeApp(firebaseConfig);

export const projectFirestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
