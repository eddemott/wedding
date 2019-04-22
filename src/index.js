import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase";
//import { injectGlobal } from 'styled-components';

var config = {
    apiKey: "AIzaSyDSb0Sz5D8kxHsrH0TRw3w8Np7viyx_w0k",
    authDomain: "wedding-23167.firebaseapp.com",
    databaseURL: "https://wedding-23167.firebaseio.com",
    projectId: "wedding-23167",
    storageBucket: "wedding-23167.appspot.com",
    messagingSenderId: "86792533943"
}
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();