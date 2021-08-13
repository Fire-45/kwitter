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
var room_name = localStorage.getItem("room");

function SEND(){
      var mEsSaGeS = document.getElementById("messages").value;
      firebase.database().ref(room_name).push({
      name:username,
      Message: mEsSaGeS,
      like:0
       })
       
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name_data = message_data["name"];
         message =  message_data["Message"];
         like = message_data["like"];
         nameWithTag = "<h4>"+name_data+"<img src = 'tick.png' class = 'user_tick'></h4>";
         messageWithTag = "<h4 class = 'message_h4'>"+message+"</h4>";
         likeWithTag = "<button class='btn btn-warning' id = '"+firebase_message_id+"'value = '"+like+"' onclick = 'update_like(this.id)'>Like: "+like+"</button>"
         document.getElementById("output").innerHTML += nameWithTag+messageWithTag+likeWithTag;
//Start code


//End code
      } });  }); }
getData();
function update_like(message_id){
button_id = message_id;
likes = document.getElementById(message_id).value;
likes = Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
      like: likes
})
}
