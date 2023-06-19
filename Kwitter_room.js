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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
   console.log("Room Name-"+ Room_names);
   row="<div class = 'room_name' id="+ Room_names +"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";

    //End code
    });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
   
 localStorage.setItem("room_name",room_name);
 window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_room.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}