import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDpHCViwJJB1d1DYAIZSPeEir4yJG98j2o",
    authDomain: "devcform.firebaseapp.com",
    databaseURL: "https://devcform.firebaseio.com",
    projectId: "devcform",
    storageBucket: "devcform.appspot.com",
    messagingSenderId: "273352750225"
};

export default firebase.initializeApp(config);
