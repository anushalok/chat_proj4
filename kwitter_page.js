var firebaseConfig = {
    apiKey: "AIzaSyASsINEX8OwrREsOILTbPBMigEbUtGRA-4",
    authDomain: "barter-app-d49f7.firebaseapp.com",
    databaseURL: "https://barter-app-d49f7-default-rtdb.firebaseio.com",
    projectId: "barter-app-d49f7",
    storageBucket: "barter-app-d49f7.appspot.com",
    messagingSenderId: "1040921797913",
    appId: "1:1040921797913:web:39a5240afb6c8c20389188"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "" ;
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}