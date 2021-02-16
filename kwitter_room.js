var firebaseConfig = {
    apiKey: "AIzaSyBDlzv1AbDYSpXvlsztyjgIeRHfQ4W17t4",
    authDomain: "my-chat-app-448a6.firebaseapp.com",
    databaseURL: "https://my-chat-app-448a6-default-rtdb.firebaseio.com",
    projectId: "my-chat-app-448a6",
    storageBucket: "my-chat-app-448a6.appspot.com",
    messagingSenderId: "168402561717",
    appId: "1:168402561717:web:febbd20247e1e4a490ecfc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var username= localStorage.getItem("user_name")
  document.getElementById("hello").innerHTML="Hello"+username

