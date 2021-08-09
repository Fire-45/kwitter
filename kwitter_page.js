//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB8QwOB8jBp32UA_2oTA78_dfPR3B0ScbM",
      authDomain: "kwitter-fb577.firebaseapp.com",
      databaseURL: "https://kwitter-fb577-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb577",
      storageBucket: "kwitter-fb577.appspot.com",
      messagingSenderId: "219324947039",
      appId: "1:219324947039:web:8355d49608a55c7bb119ea"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function logout(){
      window.location = "index.html";
      document.getElementById("Input_username").innerHTML = "";

}

var username = localStorage.getItem("USERNAME");
var roomName = localStorage.getItem("room");

function SEND(){
      var mEsSaGeS = document.getElementById("messages").value;
      firebase.database().ref(roomName).push({
      name:username,
      Message: mEsSaGeS,
      like:0
       })
       
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();
