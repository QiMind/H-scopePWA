var firebase = require("firebase");
const { type } = require("os");

const preds = document.getElementById('preds');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEdDE4_WKKRrqJIy3ss5EBLZhQVi6YRw4",
    authDomain: "horoscopeml.firebaseapp.com",
    databaseURL: "https://horoscopeml-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "horoscopeml",
    storageBucket: "horoscopeml.appspot.com",
    messagingSenderId: "372996820049",
    appId: "1:372996820049:web:bac9100c172084df4abc70",
    measurementId: "G-CEHBHWD96P"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var rng = Math.floor(Math.random() * 100) + 1;
var index = 0;

database.ref().child("preds").get().then(function(snapshot) {
    if (snapshot.exists()) {
        snapshot.forEach(function(childSnapshot){
            index++;
            if(index == rng)
            {
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                preds.innerHTML = childData.text;
                //console.log(childData);
                return;
            }
        });
    }
    else {
      console.log("No data available");
    }
    return;
  }).catch(function(error) {
    console.error(error);
  });