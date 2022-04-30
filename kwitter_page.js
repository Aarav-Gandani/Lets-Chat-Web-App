//YOUR FIREBASE LINKS

    
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
var firebaseConfig = {
      apiKey: "AIzaSyCb8Pf5B9IdAJITeC6tIq48Z61VwYMOHKA",
      authDomain: "lets-chat-web-app-72773.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-72773-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-72773",
      storageBucket: "lets-chat-web-app-72773.appspot.com",
      messagingSenderId: "467687213799",
      appId: "1:467687213799:web:f1dc937633ea12d12eb042"
      };
        // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//End code
      } });  }); }
getData();
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
  
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0 
     });
     document.getElementById(msg).value="";
     }