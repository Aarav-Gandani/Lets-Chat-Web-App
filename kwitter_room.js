var firebaseConfig = {
    apiKey: "AIzaSyCb8Pf5B9IdAJITeC6tIq48Z61VwYMOHKA",
    authDomain: "lets-chat-web-app-72773.firebaseapp.com",
    projectId: "lets-chat-web-app-72773",
    storageBucket: "lets-chat-web-app-72773.appspot.com",
    messagingSenderId: "467687213799",
    appId: "1:467687213799:web:f1dc937633ea12d12eb042"
  };

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("Room Name - " + Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();
function addRoom(){
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
   });
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";     
}
