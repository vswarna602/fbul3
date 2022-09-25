  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBjMLAwQIchRU5UUHEIDUY8cldw6tNaK-o",
    authDomain: "team-7-65c0e.firebaseapp.com",
    projectId: "team-7-65c0e",
    storageBucket: "team-7-65c0e.appspot.com",
    messagingSenderId: "40668916617",
    appId: "1:40668916617:web:53896fa8f0a87f768b0f58"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const database = firebase.database()
  function add()
{
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne + numTwo;
  document.getElementById("answer").value = sum;
}
// Create User data
var user_data = {
    last_login : Date.now()
  }

  // Push to Firebase Database
  database_ref.child('users/' + user.uid).update(user_data)
