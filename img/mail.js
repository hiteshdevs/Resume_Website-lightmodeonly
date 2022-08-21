  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBMmpdAregkk9a-CYUg8t2BXNQ_v2sN2iQ",
    authDomain: "hiteshcvcontactform.firebaseapp.com",
    databaseURL: "https://hiteshcvcontactform-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hiteshcvcontactform",
    storageBucket: "hiteshcvcontactform.appspot.com",
    messagingSenderId: "752984780268",
    appId: "1:752984780268:web:5f889985c28544b13264c9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference your database
  var contactFormDBfirebase.database().ref('contactform');

  document.getElementById('contactform').addEventListener('submit', submitForm);


  function submitForm(e) {
    // body...
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('msg');

    console.log(name, email, message);
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
